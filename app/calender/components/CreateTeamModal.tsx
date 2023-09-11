"use client";

import Modal from "@/app/components/Modal";
import { Button } from "@/components/ui/button";
import { User } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { FC, useState } from "react";
import toast from "react-hot-toast";
import AsyncSelect from "react-select/async";

interface CreateTeamModalProps {
  users: User[];
  isOpen: boolean;
  onClose: () => void;
}
const CreateTeamModal: FC<CreateTeamModalProps> = ({
  users,
  isOpen,
  onClose,
}) => {

  const [selectedUsers, setSelectedUsers] = useState<any[]>([]);
  const [workSpaceName, setWorkSpaceName] = useState("");
  const router = useRouter()
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

  const {
    mutate: creatWorkspaceMutation,
    isLoading,
    isError,
  } = useMutation({
    mutationFn: () => {
      return axios.post("/api/teams", {title: workSpaceName, users: selectedUsers});
    },
    onSuccess: (response) => {
      toast.success("Workspace created! Redirecting")
      router.push(`/calender/${response.data.id}`)
    },
    onError: () => {
      toast.error("Something went wrong")
    }
  });

  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <div className="space-y-4 flex flex-col h-[370px]">
        <h2 className={`text-base font-semibold leading-7`}>
          Create your team workspace
        </h2>

        <label className="block text-sm font-md leading-6">
          Workspace Name
        </label>
        <input
          className="form-input block w-full ronded-md border-0 py-1.5 shadow-sm ring-1 px-2 bg-white text-black
      ring-inset ring-gray-300 placeholder:text-gray-400focus focus:ring-2 focus:ring-inset
      focus:ring-sky-600 sm:text-sm sm:leading-6"
          value={workSpaceName}
          onChange={(e) => setWorkSpaceName(e.target.value)}
        />
        <label className="block text-sm font-md leading-6">
          Workspace Members
        </label>

        <AsyncSelect
          isMulti
          loadOptions={promiseOptions}
          components={{ Option: CustomOption }}
          onChange={handleUserChange}
        />
        <Button
          disabled={isLoading}
          onClick={() => creatWorkspaceMutation()}
          className=" fixed right-6 bottom-4"
        >
          Send an invite
        </Button>
      </div>
    </Modal>
  );
};

export default CreateTeamModal;

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
