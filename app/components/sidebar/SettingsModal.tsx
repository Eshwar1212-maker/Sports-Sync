"use client";

import { User } from "@prisma/client";
import axios from "axios";
import { AiOutlineEdit } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Input from "../inputs/Input";
import Image from "next/image";
import { CldUploadButton } from "next-cloudinary";
import Modal from "../Modal";
import { useTheme } from "next-themes";
import clsx from "clsx";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { SlLogout } from "react-icons/sl";
import ThemeButton from "./ThemeButton";
import { IoClose } from "react-icons/io5";

interface SettingsModal {
  isOpen?: boolean;
  onClose: () => void;
  currentUser: User;
}

const SettingsModal: React.FC<SettingsModal> = ({
  isOpen,
  onClose,
  currentUser,
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [active, setActive] = useState(false)
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
      .post("/api/settings", { ...data, imageUrl })
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
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7">Settings</h2>
            <div className="mt-10 flex flex-col gap-y-8">
              <Input
                disabled={isLoading}
                label="Name"
                id="name"
                errors={errors}
                required
                register={register}
              />
              <div className="">
                <h3 className="text-sm">Photo</h3>
                <div className="mt-2 flex items-center">
                  <Image
                    width="160"
                    height="200"
                    className="rounded-md h-[170px]"
                    alt="Avatar"
                    src={
                      image ||
                      currentUser?.image ||
                      "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                    }
                  />
                  <CldUploadButton
                    options={{ maxFiles: 1 }}
                    onUpload={handleUpload}
                    uploadPreset="d49kth4r"
                  >
                    <button className="text-sm pl-3" type="button">
                      <AiOutlineEdit size={23} />
                    </button>
                  </CldUploadButton>
                </div>
                <div className="">
                  <input
                    className={clsx(
                      "text-[12px] p-1 my-2 border-[1px] bg-white",
                        "bg-slate-400 text-black p-1 border-[1px] border-black w-[160px] px-2"
                    )}
                    placeholder="Or enter image address"
                    onChange={(e) => setImageUrl(e.target.value)}
                  />
                </div>
                <div className="mt-2 sm:mt-4">
                  <Button
                   className="lg:hidden"
                   type="button" 
                   variant={"secondary"}
                   ><ThemeButton isSettings={true} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="
            mt-6 
            flex 
            items-center 
            justify-between 
            gap-x-6
            relative bottom-0
          "
        >
          <div>
            <Button className="w-fit px-4 pl-2 mb-1" variant={"secondary"}>
              <SlLogout
                color={theme === "dark" ? "white" : ""}
                onClick={() =>
                  signOut({ callbackUrl: "http://localhost:3000" })
                }
                size={24}
                className="mx-auto"
              />
            </Button>
          </div>
          <div className="gap-4 flex">
            <Button
              variant={"secondary"}
              type="button"
              disabled={isLoading}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button className="" disabled={isLoading} type="submit">
              Save
            </Button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default SettingsModal;
