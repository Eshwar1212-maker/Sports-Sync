"use client";

import Modal from "@/app/components/Modal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FC, useState } from "react";
import Exercises from "./Exercises";
import Button from "@/app/components/Button";
import { IoIosAdd } from "react-icons/io";
import { IoClose } from "react-icons/io5";

interface WorkoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  handleCallbackExercises: (exerciseData: any) => void;
}

const WorkoutModal: FC<WorkoutModalProps> = ({
  isOpen,
  onClose,
  handleCallbackExercises,
}) => {
  const [exercise, setExercise] = useState<string>("");
  const [weight, setWeight] = useState<number | null>(null);
  const [sets, setSets] = useState<number | null>(null);
  const [reps, setReps] = useState<number | null>(null);
  const [addExercise, setAddExercise] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("exercises");

  const handleExerciseSelected = (selectedExercise: string) => {
    setExercise(selectedExercise);
    setActiveTab("weight");
  };

  const handleWorkoutAddition = () => {
    const exerciseData = {
      exercise,
      weight,
      sets,
      reps,
    };
    handleCallbackExercises(exerciseData);
    onClose();
    setActiveTab("exercises");
  };

  return (
    <Modal isFullWidth isOpen={isOpen} onClose={onClose}>
      <Tabs value={activeTab} defaultValue="exercises">
        <TabsList>
          <TabsTrigger
            onClick={() => setActiveTab("exercises")}
            value="exercises"
          >
            My Exercises
          </TabsTrigger>
          <TabsTrigger onClick={() => setActiveTab("weight")} value="weight">
            Intensity
          </TabsTrigger>
        </TabsList>
        <button onClick={onClose} className="sm:hidden fixed right-3">
          <IoClose size={20} />
        </button>
        {addExercise && (
          <input
            placeholder="Enter new exercise name..."
            className="w-[200px] border-[1px] border-gray-500 p-1"
          />
        )}
        <TabsContent value="exercises">
          <Exercises handleCallbackExercises={handleExerciseSelected} />
        </TabsContent>
        ...
        <TabsContent
          className="flex flex-col w-fit mx-auto py-[70px] gap-2 justify-center"
          value="weight"
        >
          <h3 className="text-xl pb-6">{exercise}</h3>

          <label>Weight:</label>
          <input
            type="number"
            value={weight ? weight.toString() : ""}
            onChange={(e) => setWeight(Number(e.target.value))}
            placeholder="Enter weight (in kg)"
            className="border-[1px] border-gray-500"
          />

          <label>Sets:</label>
          <input
            type="number"
            value={sets ? sets.toString() : ''}
            onChange={(e) => setSets(Number(e.target.value))}
            placeholder="Enter number of sets"
            className="border-[1px] border-gray-500"
          />

          <label>Reps:</label>
          <input
            type="number"
            value={reps ? reps.toString() : ''} 
            onChange={(e) => setReps(Number(e.target.value))}
            placeholder="Enter number of reps"
            className="border-[1px] border-gray-500"
          />
        </TabsContent>
        ...
      </Tabs>
      <div className="bottom-8 fixed flex gap-2 right-8">
        <Button onClick={() => setAddExercise(!addExercise)} secondary>
          New Exercises <IoIosAdd size={22} />
        </Button>
        <Button disabled={!exercise} onClick={handleWorkoutAddition}>
          Add Workout
        </Button>
      </div>
    </Modal>
  );
};

export default WorkoutModal;
