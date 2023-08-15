"use client";

import Modal from "@/app/components/Modal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FC, useState } from "react";
import Exercises from "./Exercises";
import Button from "@/app/components/Button";
import { IoIosAdd } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

interface WorkoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  handleCallbackExercises: (exerciseData: any) => void;
  date: string
  editedName?: string
  editedWeight?: any
  editedSets?: any
  editedReps?: any
  selectedExercise: boolean
}

const WorkoutModal: FC<WorkoutModalProps> = ({
  isOpen, onClose, handleCallbackExercises, date, editedName, editedWeight, editedReps, editedSets, selectedExercise

}) => {
  const [title, setTitle] = useState<string>("");
  const [weight, setWeight] = useState<number | null>(0);
  const [sets, setSets] = useState<number | null>(0);
  const [reps, setReps] = useState<number | null>(0);
  const [addExercise, setAddExercise] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("exercises");


  const handleExerciseSelected = (selectedExercise: string) => {
    setTitle(selectedExercise);
    setActiveTab("weight");
  };


  const { mutate: addWorkout, isLoading, isError } = useMutation(
    (data: {title: string, weight: number | null, sets: number | null, reps: number | null, date: string}) => {
      return axios.post("/api/workouts", data)
    }, 
    {
      onSuccess: () => {
  
      },
      onError: (error) => {
        console.log(error);
        
      }
    }
  );
  

  const handleWorkoutAddition = () => {
    const exerciseData = {
      title,
      weight,
      sets,
      reps,
      date
    };

    addWorkout(exerciseData);
    handleCallbackExercises(exerciseData);
    onClose();
    setActiveTab("exercises");
    setTitle("")
    setWeight(null)
    setReps(null)
    setSets(null)
};


console.log(selectedExercise, editedName);



  return (
    <Modal isFullWidth isOpen={isOpen} onClose={onClose}>
      <Tabs value={activeTab} defaultValue="exercises">
        <TabsList>
          <TabsTrigger
            onClick={() => setActiveTab("exercises")}
            value="exercises"
            className=""
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
        <TabsContent
          className="flex flex-col w-fit mx-auto py-[70px] gap-2 justify-center"
          value="weight"
        >
          <h3 className="text-xl pb-6">{!selectedExercise ? title : editedName}</h3>

          <label>Weight:</label>
          <input
            type="number"
            value={!selectedExercise ? weight?.toString() : editedWeight}
            onChange={(e) => setWeight(Number(e.target.value))}
            placeholder="Enter weight (in kg)"
            className="border-[1px] border-gray-500 p-2"
          />
 
          <label>Sets:</label>
          <input
            type="number"
            value={!selectedExercise ? sets?.toString() : editedSets}
            onChange={(e) => setSets(Number(e.target.value))}
            placeholder="Enter number of sets"
            className="border-[1px] border-gray-500 p-2"
          />

          <label>Reps:</label>
          <input
            type="number"
            value={!selectedExercise ? reps?.toString() : editedReps} 
            onChange={(e) => setReps(Number(e.target.value))}
            placeholder="Enter number of reps"
            className="border-[1px] border-gray-500 p-2"
          />
        </TabsContent>
      </Tabs>
      <div className="bottom-4 fixed flex gap-2 right-8">
        <Button onClick={() => setAddExercise(!addExercise)} secondary>
          New Exercises <IoIosAdd size={22} />
        </Button>
        <Button disabled={!title} onClick={handleWorkoutAddition}>
          {selectedExercise ? "Update" : "Add Workout"}
        </Button>
      </div>
    </Modal>
  );
};

export default WorkoutModal;
