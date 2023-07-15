"use client";

import useConversation from "@/app/hooks/useConversation";
import axios from "axios";
import { FC } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { HiPaperAirplane } from "react-icons/hi2";
import { HiPhoto } from "react-icons/hi2";
import MessageInput from "./MessageInput";
import { useMutation } from "@tanstack/react-query";
import { CldUploadButton } from "next-cloudinary";

interface FormProps {}
interface PostMessageData {
  message: string;
  conversationId: string;
}

const Form: FC<FormProps> = ({}) => {
  const { conversationId } = useConversation();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: { message: "" },
  });

  const {
    mutate: postMessage,
    isLoading,
    isError,
  } = useMutation<FieldValues>(
    (data) => {
      return axios.post("/api/messages", {
        ...(data as any),
        conversationId,
      });
    },
    {
      onError: () => {
        // handle error
      },
      onSuccess: () => {
        // handle success
        setValue("message", "", { shouldValidate: true });
      },
    }
  );

  const onSubmit: SubmitHandler<FieldValues> = (data: any) => {
    setValue("message", "", { shouldValidate: true });
    postMessage(data);
  };

  const handleImageUpload = (result: any) => {
    axios.post("/api/messages", {
      image: result?.info?.secure_url,
      conversationId: conversationId,
    });
  };

  return (
    <div className="py-4 px-4 bg-white border-t flex items-center gap-2 lg:gap-4 w-full">
      <CldUploadButton
        options={{ maxFiles: 1 }}
        onUpload={handleImageUpload}
        uploadPreset="d49kth4r"
      >
        <HiPhoto size={30} className="text-sky-500" />
      </CldUploadButton>

      <form
        className="flex items-center gap-2 lg:gap-4 w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <MessageInput
          id="message"
          register={register}
          required
          placeholder="Write a message..."
          errors={errors}
        />
        <button
          type="submit"
          className="rounded-full p-2 bg-sky-500 cursor-pointer  hover:bg-sky-600"
        >
          <HiPaperAirplane size={18} className="text-white" />
        </button>
      </form>
    </div>
  );
};

export default Form;
