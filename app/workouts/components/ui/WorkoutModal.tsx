"use client"

import Modal from "@/app/components/Modal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FC, useState } from "react";
import Exercises from "./Exercises";
import Button from "@/app/components/Button";
import { IoIosAdd } from "react-icons/io";
import ConfirmModal from "@/app/conversations/components/ConfirmModal";

interface WorkoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WorkoutModal: FC<WorkoutModalProps> = ({ isOpen, onClose }) => {
    
    const [exercise, setExercise] = useState("")
    const [weight, setWeight] = useState(0)
    const [sets, setSets] = useState(0)
    const [reps, setReps] = useState(0)


  return (
    <Modal isFullWidth={true} isOpen={isOpen} onClose={onClose}>
      <Tabs defaultValue="exercises" className="w-full">
        <TabsList className="">
          <TabsTrigger className="text-md" value="exercises">
            My Exercises
          </TabsTrigger>
          <TabsTrigger  className="text-md" value="weight">
            Intensity
          </TabsTrigger>

        </TabsList>

        <TabsContent className="" value="exercises">
          <Exercises />
        </TabsContent>
        <TabsContent className="flex flex-col w-fit mx-auto py-[150px] gap-2 justify-center" value="weight">
          <label>Enter weight</label>
          <input
            type="number"
            className="border-[1px] border-s border-gray-500"
          />
                    <label>Enter sets</label>
          <input
            type="number"
            className="border-[1px] border-s border-gray-500"
          />
                    <label>Enter reps</label>
          <input
            type="number"
            className="border-[1px] border-s border-gray-500"
          />
        </TabsContent>

      </Tabs>
      <div className="bottom-8 fixed flex gap-2 right-8">
        <Button secondary>
          New Exercises{" "}
          <span className="my-auto">
            <IoIosAdd size={22} />
          </span>
        </Button>
        <Button disabled={!exercise} onClick={() => onClose()}>
          Add Workout
        </Button>
      </div>
    </Modal>
  );
};

export default WorkoutModal;
