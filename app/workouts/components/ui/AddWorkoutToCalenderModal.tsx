"use client";

import Modal from "@/app/components/Modal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FC, useEffect, useState } from "react";
import Exercises from "./Exercises";
import ListBox from "./ListBox";
import { Button } from "@/components/ui/button";

interface WorkoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  workout: string
}

const AddWorkoutToCalenderModal: FC<WorkoutModalProps> = ({
  isOpen,
  onClose,
  workout
}) => {
  return (
    <Modal isFullWidth isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col gap-3 mb-3 h-[12%]">
        <h3 className="font-semibold text-lg pl-2">Title</h3>
        <ListBox />
      </div>
      <div className="h-[88%]">          
         <h3 className="font-semibold text-lg pl-2">Workout</h3>
         <p className="px-5 py-4 whitespace-pre-line">
          {workout}
         </p>
      </div>
      <div className="bottom-4 fixed flex gap-2 right-8">
        <Button>Add To Calender</Button>
      </div>
    </Modal>
  );
};

export default AddWorkoutToCalenderModal;
