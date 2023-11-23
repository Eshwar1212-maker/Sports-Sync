"use client";

import Modal from "@/app/components/Modal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FC, useEffect, useState } from "react";
import Exercises from "./Exercises";
import { IoClose } from "react-icons/io5";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useTheme } from "next-themes";
import { Button } from "../../../../components/ui/button";
import { BiSolidTrash } from "react-icons/bi";
import usePersonalRecord from "@/app/hooks/useWorkoutlRecord";
import Program from "./Program";

interface WorkoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  handleCallbackExercises: (exerciseData: any) => void;
  date: string;
  editedName?: string;
  editedWeight?: any;
  editedSets?: any;
  editedReps?: any;
  selectedExercise: boolean;
  setEditedExerciseWeight: any;
  setEditedExerciseSets: any;
  setEditedExerciseReps: any;
  workoutId: string;
  updateWorkoutInState: any;
  workoutRecord: any;
  showConfetti?: any;
}

const WorkoutModal: FC<WorkoutModalProps> = ({
  isOpen,
  onClose,
  handleCallbackExercises,
  date,
  editedName,
  editedWeight,
  editedReps,
  editedSets,
  selectedExercise,
  setEditedExerciseReps,
  setEditedExerciseWeight,
  setEditedExerciseSets,
  workoutId,
  updateWorkoutInState,
  workoutRecord,
}) => {
  const [title, setTitle] = useState<string>("");
  const [weight, setWeight] = useState<number>(0);
  const [sets, setSets] = useState<number | null>(0);
  const [reps, setReps] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<string>();    

  const personalRecord = usePersonalRecord(title, weight, workoutRecord)  

  const handleExerciseSelected = (selectedExercise: string) => {
    setTitle(selectedExercise);
    setActiveTab("intensity");
  };

  //POST REQUEST, ADDING WORKOUT
  const {
    mutate: addWorkout,
    isLoading,
    isError,
  } = useMutation(
    (data: {
      workoutId: string
      title: string;
      weight: number | null;
      sets: number | null;
      reps: number | null;
      date: string;
      isPersonalRecord?: boolean;
    }) => {
      return axios.post("/api/workouts", data);
    },
    {
      onSuccess: (response) => {
        console.log(response.data);
        handleCallbackExercises(response.data)
      },
      onError: (error) => {
      },
    }
  );

  //UPDATE WORKOUT
  const { mutate: updateWorkout, isLoading: isUpdateLoading } = useMutation(
    (data: {
      weight: number;
      sets: number;
      reps: number;
      workoutId: string;
      isPersonalRecord: boolean;
    }) => {
      return axios.patch("/api/workouts/update", data);
    },
    {
      onSuccess: (response) => {
        onClose();
        updateWorkoutInState(response.data);
        handleCallbackExercises(response.data)
        toast.success("Workout updated");

      },
      onError: (error) => {
        toast.error("Issue updating, reload the page if issue persists")
      },
    }
  );

  //DELETE WORKOUT
  const { mutate: deleteWorkout, isLoading: isDeleteLoading } = useMutation(
    (data: {
      weight: number;
      sets?: number;
      reps?: number;
      workoutId: string;
      isPersonalRecord?: boolean;
      date: Date;
    }) => {
      return axios.patch("/api/workouts/update", data);
    },
    {
      onSuccess: (response) => {
        onClose();
        toast.success("Workout deleted");
        updateWorkoutInState(response.data);
        handleCallbackExercises(response.data);
      },
      onError: (error) => {
        console.log(error);
        toast.error("Issue deleting, reload the page if issue persists")
      },
    }
  );

  const handleDeleteWorkout = () => {
    const updatedExerciseData = {
      workoutId: workoutId,
      date: new Date("1900-02-21"),
      weight: 0
    };
    deleteWorkout(updatedExerciseData);
  };

  const handleWorkoutAddition = () => {
    const exerciseData = {
      workoutId,
      title,
      weight,
      sets,
      reps,
      date,
      isPersonalRecord: personalRecord,
    };
    const updatedExerciseData = {
      weight: editedWeight,
      sets: editedSets,
      reps: editedReps,
      workoutId: workoutId,
      isPersonalRecord: personalRecord,
    };
    if (selectedExercise) {
      updateWorkout(updatedExerciseData);
    } else {
      addWorkout(exerciseData);
      onClose();
      setActiveTab("exercises");
      setTitle("");
      setWeight(0);
      setReps(null);
      setSets(null);
    }
  };

  useEffect(() => {
    if (selectedExercise) {
      setActiveTab("intensity");
    } else {
      setActiveTab("exercises");
    }
  }, [selectedExercise]);
  const { theme } = useTheme();

  return (
    <Modal isFullWidth={true} isImage={true} isOpen={isOpen} onClose={onClose}>
      <Tabs value={activeTab} defaultValue="exercises">
        <TabsList className="gap-1">
          <TabsTrigger
            onClick={() => setActiveTab("exercises")}
            value="exercises"
            className={theme === "light" ? "text-black" : "text-white"}
          >
            My Exercises
          </TabsTrigger>
          <TabsTrigger
            className={theme === "light" ? "text-black" : "text-white"}
            onClick={() => setActiveTab("intensity")}
            value="intensity"
          >
            Intensity
          </TabsTrigger>
          {/* <TabsTrigger
            className={theme === "light" ? "text-black" : "text-white"}
            onClick={() => setActiveTab("program")}
            value="program"
          >
            Program
          </TabsTrigger> */}

        </TabsList>
        <button onClick={onClose} className="sm:hidden fixed right-3">
          <IoClose size={20} />
        </button>
        <TabsContent value="exercises">
          <Exercises handleCallbackExercises={handleExerciseSelected} />
        </TabsContent>
        <TabsContent value="program">
            <Program />
        </TabsContent>
        <TabsContent
          className="flex flex-col w-fit mx-auto py-[70px] gap-2 justify-center"
          value="intensity"
        >
          <h3 className="text-2xl mb-3 font-semibold">
            {!selectedExercise ? title : editedName}
          </h3>
          
          <label>Weight:</label>
          <input
            type="number"
            value={!selectedExercise ? weight?.toString() : editedWeight}
            onChange={(e) => {
              if (selectedExercise) {
                setEditedExerciseWeight(Number(e.target.value));
              } else {
                setWeight(Number(e.target.value));
              }
            }}
            placeholder="Enter weight (in kg)"
            className="border-[1px] border-gray-500 p-2"
          />

          <label>Sets:</label>
          <input
            type="number"
            value={!selectedExercise ? sets?.toString() : editedSets}
            onChange={(e) => {
              if (selectedExercise) {
                setEditedExerciseSets(Number(e.target.value));
              } else {
                setSets(Number(e.target.value));
              }
            }}
            placeholder="Enter number of sets"
            className="border-[1px] border-gray-500 p-2"
          />

          <label>Reps:</label>
          <input
            type="number"
            value={!selectedExercise ? reps?.toString() : editedReps}
            onChange={(e) => {
              if (selectedExercise) {
                setEditedExerciseReps(Number(e.target.value));
              } else {
                setReps(Number(e.target.value));
              }
            }}
            placeholder="Enter number of reps"
            className="border-[1px] border-gray-500 p-2"
          />
        </TabsContent>
      </Tabs>

      <div className="">
{ selectedExercise &&       <div className="fixed left-8 bottom-6">
          <div className="hidden md:flex gap-2">
            <Button
              disabled={isDeleteLoading}
              variant={"destructive"}
              onClick={handleDeleteWorkout}
            >
              Delete
            </Button>
          </div>
          <div className=" flex gap-2 md:hidden pb-2">
            <BiSolidTrash
              aria-label="Delete workout"
              onClick={handleDeleteWorkout}
              size={20}
            />
          </div>
        </div>}
        <div className="fixed right-8 bottom-4 flex gap-4 ">
          <Button className="" onClick={onClose} variant={"secondary"}>
            Cancel
          </Button>
          <Button className="" disabled={!selectedExercise ? !title : isUpdateLoading} onClick={handleWorkoutAddition}>
            {selectedExercise ? "Update" : "Add Workout"}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default WorkoutModal;
