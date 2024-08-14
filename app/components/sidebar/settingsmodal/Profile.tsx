import { FC } from "react";
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
import placeHolderImage from "../../../assets/randomavatar.jpeg";

interface ProfileProps {
  isOpen?: boolean;
  onClose: () => void;
  currentUser: any;
}
const Profile: FC<ProfileProps> = ({ currentUser, isOpen, onClose }) => {
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
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-4 flex flex-col gap-y-4">
            <Input
              disabled={isLoading}
              label="Name"
              id="name"
              errors={errors}
              required
              register={register}
              data-testid="user-name"
            />
            <label className="block text-sm font-md leading-6">Bio</label>
            <input
              data-testid="user-bio"
              placeholder={
                currentUser?.bio
                  ? undefined
                  : "Mention what sport you play, or type of athlete, or if you're a coach!"
              }
              value={bio || ""}
              onChange={(e) => setBio(e.target.value)}
              className="form-input block w-full border-0 py-1.5 shadow-sm ring-1 px-2 bg-white text-black ring-inset ring-gray-300focus:ring-sky-600 sm:text-sm sm:leading-6"
            />
            <div className="">
              <label className="block text-sm font-md leading-6">Photo</label>
              <div className="mt-2 flex items-center">
                <Image
                  width="160"
                  height="200"
                  className="rounded-md h-[170px]"
                  alt="Avatar"
                  src={image || currentUser?.image || placeHolderImage}
                  data-testid="user-image"
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
              <div className="mt-2 sm:mt-4">
                <Button
                  className="lg:hidden"
                  type="button"
                  variant={"secondary"}
                >
                  <ThemeButton isSettings={true} />
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
        <ActionTooltip label="Logout">
          <Button
            type="button"
            className="w-fit px-4 pl-2 mb-1"
            variant={"secondary"}
          >
            <SlLogout
              color={theme === "dark" ? "white" : ""}
              onClick={() => signOut({ callbackUrl: "http://localhost:3000" })}
              size={24}
              className="mx-auto"
            />
          </Button>
        </ActionTooltip>
        <div className="gap-4 flex">
          <Button
            variant={"secondary"}
            type="button"
            disabled={isLoading}
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button className="rounded-md" disabled={isLoading} type="submit">
            Save
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Profile;
