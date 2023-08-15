"use client";

import Modal from "@/app/components/Modal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FC, useEffect, useState } from "react";
import Exercises from "./Exercises";
import ListBox from "./ListBox";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import axios from "axios";

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
        date,
      });
    },
    {
      onSuccess: (response) => {
        onClose();
        toast.success(
          `Event added to calender for ${formattedDate}`
        );
      },
      onError: (error) => {
        console.log("ADD EVENT ERROR: ", error);
      }
      ,
    }
  );

  function handleSelect(title: any) {
    console.log(title.name);
    setWorkoutTitle(title.name);
  }

  return (
    <Modal isFullWidth isOpen={isOpen} onClose={onClose}>
      <h1 className="text-center">
        {date.toString().split(" ")[0] +
          "        " +
          date.toString().split(" ")[1] +
          "      " +
          date.toString().split(" ")[2]}
      </h1>
      <div className="flex flex-col gap-3 mb-3 h-[8%]">
        <ListBox onSelectedChange={handleSelect} />
      </div>
      <div className="h-[92%] max-h-[530px] overflow-y-scroll border-b-black border-b-[1px]">
        <p className="px-5 py-4 whitespace-pre-line ">{workout}</p>
      </div>
      <div className="bottom-4 fixed flex gap-2 right-8">
        <Button
          onClick={() => addEvent()}
          disabled={isLoading}
        >
          Add To Calender
        </Button>
      </div>
    </Modal>
  );
};

export default AddWorkoutToCalenderModal;
