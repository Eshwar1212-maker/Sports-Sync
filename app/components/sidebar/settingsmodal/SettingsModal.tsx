"use client";

import axios from "axios";
import { AiOutlineEdit } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Input from "../../inputs/Input";
import Image from "next/image";
import { CldUploadButton } from "next-cloudinary";
import Modal from "../../Modal";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { SlLogout } from "react-icons/sl";
import ThemeButton from "../ThemeButton";
import { ActionTooltip } from "../../ActionToolTip";
import placeHolderImage from "../../assets/randomavatar.jpeg"
import Profile from "./Profile";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface SettingsModal {
  isOpen?: boolean;
  onClose: () => void;
  currentUser: any;
}

const SettingsModal: React.FC<SettingsModal> = ({
  isOpen,
  onClose,
  currentUser,
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [bio, setBio] = useState<any>(currentUser?.bio || "");
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: currentUser?.name,
      image: currentUser?.image,
      bio: currentUser?.bio!,
    },
  });
  const image = watch("image");
  const handleUpload = (result: any) => {
    setValue("image", result?.info?.secure_url || imageUrl, {
      shouldValidate: true,
    });
  };

  const { theme } = useTheme();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post("/api/settings", { ...data, bio })
      .then(() => {
        router.refresh();
        onClose();
      })
      .catch(() => {
        toast.error("Something went wrong");
      })
      .finally(() => {
        setIsLoading(false);
        toast.success("Profile settings updated");
      });
  };

  return (

    <Modal isOpen={isOpen} onClose={onClose}>
        <Tabs defaultValue="profile">
        <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="subscription">Subscription</TabsTrigger>
      </TabsList>
        </Tabs>
        <Profile currentUser={currentUser} onClose={onClose} isOpen/>
    </Modal>
  );
};

export default SettingsModal;
