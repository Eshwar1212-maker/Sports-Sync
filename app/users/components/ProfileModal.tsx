import Modal from "@/app/components/Modal";
import { Button } from "@/components/ui/button";
import { User } from "@prisma/client";
import Image from "next/image";
import { FC } from "react";
import toast from "react-hot-toast";
import { BiMessageSquareAdd } from "react-icons/bi";
interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: User;
  createConversation?: any;
}
const ProfileModal: FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  user,
  createConversation,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-8 space-y-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white pb-8">
            {user?.name}
          </h3>
          {user?.image && (
            <Image
              alt="Profile image"
              width={160}
              height={160}
              src={user?.image as string}
              className="mx-auto rounded-lg object-cover"
            />
          )}
        </div>
        <p className="text-center text-sm text-gray-700 dark:text-gray-300 py-2">
          {user?.bio! && user?.bio!}
        </p>
        {!user?.bio! && (
          <p className="text-center text-[13px] text-gray-500 dark:text-gray-300 py-2 font-light">
            User has not filled out their bio
          </p>
        )}
        <div className="flex justify-center py-1 gap-4">
          <Button onClick={() => createConversation()}>Message</Button>
          {/* <Button
            onClick={() => {
              toast.success("Friend request sent!");
            }}
            variant="secondary"
          >
            Add Friend <BiMessageSquareAdd size={16} className="ml-2" />
          </Button> */}
        </div>
        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          Joined {user?.createdAt.toString().split(" ").slice(0, 4).join(" ")}
        </p>
      </div>
    </Modal>
  );
};

export default ProfileModal;
