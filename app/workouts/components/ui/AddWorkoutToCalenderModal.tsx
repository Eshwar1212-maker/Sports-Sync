"use client";

import Modal from "@/app/components/Modal";
import { FC,useState } from "react";
import ListBox from "./ListBox";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import axios from "axios";
import { IoClose } from "react-icons/io5";

interface WorkoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  workout: string;
  formattedDate: string
  date: string;
}

const AddWorkoutToCalenderModal: FC<WorkoutModalProps> = ({
  isOpen,
  onClose,
  workout,
  formattedDate,
  date
}) => {
  const [workoutTitle, setWorkoutTitle] = useState("");
  

  const {
    mutate: addEvent,
    isLoading,
    error,
  } = useMutation(
    () => {
      return axios.post("/api/events", {
        title: workoutTitle,
        notes: workout,
        date
      });
    },
    {
      onSuccess: (response) => {
        console.log(response.data);
        
        onClose();
        toast.success(
          `${workoutTitle} added for ${formattedDate}`
        );
      },
      onError: (error) => {
      }
      ,
    }
  );

  function handleSelect(title: any) {
    setWorkoutTitle(title.name);
  }

  return (
    <Modal isFullWidth={true} isImage={true} isOpen={isOpen} onClose={onClose}>
      <h1 className="text-center pb-2">
        {date.toString().split(" ")[0] +
          "        " +
          date.toString().split(" ")[1] +
          "      " +
          date.toString().split(" ")[2]}
      </h1>
      <button aria-label="close modal button" onClick={onClose} className="sm:hidden fixed right-3 top-3">
            <IoClose size={20} />
      </button>

      <div className="flex flex-col gap-3 mb-3 h-[6%]">
        <ListBox onSelectedChange={handleSelect} />
      </div>
      <div className="h-[94%] max-h-[530px] overflow-y-scroll border-b-black border-b-[1px]">
        <p className="px-5 py-4 whitespace-pre-line ">{workout}</p>
      </div>
      <div className="bottom-4 fixed flex gap-2 right-8">
        <Button
          onClick={() => addEvent()}
          disabled={isLoading}
        >
          Add To Calendar
        </Button>
      </div>
    </Modal>
  );
};

export default AddWorkoutToCalenderModal;
