"use client";

import getCurrentUser from "@/app/actions/getCurrentUser";
import Button from "@/app/components/Button";
import Modal from "@/app/components/Modal";
import Input from "@/app/components/inputs/Input";
import Select from "@/app/components/inputs/Select";
import useOtherUser from "@/app/hooks/useOtherUser";
import { User } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import clsx from "clsx";
import { log } from "console";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

import { FC } from "react";
import { Field, FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
interface GroupChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  users: any;
}

const GroupChatModal: FC<GroupChatModalProps> = ({
  isOpen,
  onClose,
  users,
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
    isError,
  } = useMutation(
    (data: FieldValues) => {
      console.log("FIELD VALUES DATA: " + data);
      return axios.post(`/api/conversations`, {
        ...data,
        isGroup: true,
      });
    },
    {
      onSuccess: () => {
        router.refresh();
        router.push(`/conversations`);
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
            image: user.image,
          }))
      );
    });
  };

  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

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
                `text-base font-semibold leading-7`, currentTheme === "dark" ? "text-white" : "text-gray-900"
              )}
            >
              Create a group chat
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600"></p>
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
            secondary
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
