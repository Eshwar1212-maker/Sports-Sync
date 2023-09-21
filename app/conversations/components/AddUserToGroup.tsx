"use client";

import Modal from "@/app/components/Modal";
import { Button } from "@/components/ui/button";
import { User } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import { FC, useState } from "react";
import toast from "react-hot-toast";
import AsyncSelect from "react-select/async"

const CustomOption: FC<any> = ({ data, innerRef, innerProps }) => (
  <div className="flex justify-between px-6" ref={innerRef} {...innerProps}>
    <p className="my-auto text-black">{data?.label}</p>
    {data?.photo && (
      <div className="rounded-full">
        <Image
          className="rounded-full"
          src={data?.photo}
          alt={`${data?.label}'s photo`}
          width={40}
          height={40}
        />
      </div>
    )}
  </div>
);

interface AddUserToGroupProps {
  isOpen: boolean;
  onClose: () => void;
  users: User[];
  data: any;
}
const AddUserToGroup: FC<AddUserToGroupProps> = ({
  isOpen,
  onClose,
  users,
  data,
}) => {
  const [selectedUsers, setSelectedUsers] = useState<any[]>([]);
  const handleUserChange = (selectedOptions: any) => {
    setSelectedUsers(selectedOptions);
  };
  const loadUserOptions = (inputValue: any) => {
    return users
      .filter((user) =>
        user?.name?.toLowerCase().includes(inputValue.toLowerCase())
      )
      .map((user) => ({
        label: user.name,
        value: user.id,
        photo: user.image,
        email: user.email,
      }));
  };

  const pathName = useParams();

  const promiseOptions = (inputValue: any) =>
    new Promise<any>((resolve) => {
      setTimeout(() => {
        if (inputValue) {
          resolve(loadUserOptions(inputValue));
        } else {
          resolve(
            users?.map((user) => ({
              label: user?.name || "Unknown User",
              value: user?.id || "No ID",
              photo: user?.image || "/path/to/default/image.png",
              email: user?.email || "",
            })) || []
          );
        }
      }, 1000);
    });


  //POST REQUEST FOR INVITES
  const {
    mutate: inviteMutation,
    isLoading,
    isError,
  } = useMutation(
    async () => {
      axios.post("/api/notifications/invitations", {
        title: `${data?.admin} invited you to ${data?.name}'s `,
        users: selectedUsers,
        groupId: pathName?.conversationId,
      });
    },
    {
      onSuccess: () => {
        toast.success("Invitations sent");
        onClose();
      },
      onError: () => {},
    }
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="space-y-6 flex flex-col h-[190px]">
        <h2 className={`text-base font-semibold leading-7`}>Invite Users</h2>
        <AsyncSelect
          isMulti
          loadOptions={promiseOptions}
          components={{ Option: CustomOption }}
          onChange={handleUserChange}
        />
        <Button
          onClick={() => inviteMutation()}
          disabled={selectedUsers.length < 1 || isLoading}
          className=" fixed right-6 bottom-4"
        >
          Send an invite
        </Button>
      </div>
    </Modal>
  );
};
export default AddUserToGroup;
