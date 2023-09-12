"use client";

import Modal from "@/app/components/Modal";
import Input from "@/app/components/inputs/Input";
import Select from "@/app/components/inputs/Select";
import { Button } from "@/components/ui/button";
import { User } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { FC } from "react";
import {FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
interface GroupChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  users: User[];
  currentUser: any
}
export const revalidate = 0;


const GroupChatModal: FC<GroupChatModalProps> = ({
  isOpen,
  onClose,
  users,
  currentUser
}) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      members: [],
    },
  });

  const members = watch("members");
  
  const {
    mutate: createGroupChatMutation,
    isLoading,
  } = useMutation(
    (data: FieldValues) => {
      return axios.post(`/api/conversations`, {

        ...data,
        isGroup: true,
        admin: `${currentUser.email + " " + currentUser.name}`
      });
    },
    {
      onSuccess: (response) => {
        console.log(response);
        
        router.refresh();
        router.push(`/conversations/${response.data.id}`);
        toast.success(`Succesfully created group`)
        onClose()
      },
      onError: () => {
        toast.error(
          "Something went wrong, please make sure you are adding at least 3 members to a group."
        );
      },
    }
  );

  const loadUserOptions = (inputValue: string) => {
    return new Promise<User[]>((resolve) => {
      resolve(
        users
          .filter((user: User) =>
            user?.name?.toLowerCase().includes(inputValue.toLowerCase())
          )
          .map((user: User) => ({
            label: user.name,
            value: user.id,
            image: user?.image,
          })) as any
      );
    });
  };



  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    createGroupChatMutation(data);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-10">
            <h2
              className={clsx(
                `text-base font-semibold leading-7`
              )}
            >
              Create a group chat
            </h2>
            <div className="mt-10 flex flex-col gap-y-8"></div>
            <Input
              register={register}
              label="Name"
              id="name"
              disabled={isLoading}
              errors={errors}
            />
            <Select
              disabled={isLoading}
              label="Members"
              onChange={(value) =>
                setValue("members", value, { shouldValidate: true })
              }
              value={members}
              loadOptions={loadUserOptions}
            />
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <Button
            disabled={isLoading}
            onClick={onClose}
            type="button"
            variant={"secondary"}
          >
            Cancel
          </Button>
          <Button disabled={isLoading} type="submit">
            Create
          </Button>
          
        </div>
      </form>
    </Modal>
  );
};

export default GroupChatModal;
