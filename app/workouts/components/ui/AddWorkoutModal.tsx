"use client";

import Modal from "@/app/components/Modal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FC, useEffect, useState } from "react";
import Exercises from "./Exercises";
import Button from "@/app/components/Button";
import { IoIosAdd } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Workout } from "@prisma/client";
import { AiOutlineTrophy } from "react-icons/ai";
import { useTheme } from "next-themes";
import { Button as Button2 } from "../../../../components/ui/button";
import { BiSolidTrash } from "react-icons/bi";

type exercise = {
  title: string;
  reps?: number | null;
  sets?: number | null;
  exercise?: string;
  weight?: number | null;
  id?: string;
};

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
  const [personalRecord, setPersonalRecord] = useState<boolean>(false);

  //FINDING PERSONAL RECORDD
  const findWorkoutRecord = () => {
    
    const titleRecord = workoutRecord.filter(
      (workout: Workout) => workout.title === title
    );
    const isPersonalRecord = titleRecord.every((workout: Workout) => {
      return weight > workout?.weight!;
    });
    setPersonalRecord(isPersonalRecord);
  };

  useEffect(() => {
    findWorkoutRecord();
    return () => {
      setPersonalRecord(false);
    };
  }, [weight, editedWeight, personalRecord]);

  const handleExerciseSelected = (selectedExercise: string) => {
    setTitle(selectedExercise);
    setActiveTab("weight");
  };

  //POST REQUEST, ADDING WORKOUT
  const {
    mutate: addWorkout,
    isLoading,
    isError,
  } = useMutation(
    (data: {
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
      onSuccess: () => {
        findWorkoutRecord();
      },
      onError: (error) => {
        console.log(error);
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
      isPersonalRecord?: boolean;
    }) => {
      return axios.patch("/api/workouts/update", data);
    },
    {
      onSuccess: (response) => {
        onClose();
        updateWorkoutInState(response.data);
        toast.success("Workout updated");
        findWorkoutRecord();
        handleCallbackExercises({});
      },
      onError: (error) => {
        console.log("UPDATE EVENT ERROR: ", error);
      },
    }
  );

  //DELETE WORKOUT
  const { mutate: deleteWorkout, isLoading: isDeleteLoading } = useMutation(
    (data: {
      weight?: number;
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
        toast("Workout deleted");
        updateWorkoutInState(response.data);
        findWorkoutRecord();
        handleCallbackExercises({});
      },
      onError: (error) => {
        console.log("UPDATE EVENT ERROR: ", error);
      },
    }
  );

  const handleDeleteWorkout = () => {
    const updatedExerciseData = {
      workoutId: workoutId,
      date: new Date("1900-02-21"),
    };
    deleteWorkout(updatedExerciseData);
  };

  const handleWorkoutAddition = () => {
    const exerciseData = {
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
      findWorkoutRecord();
      updateWorkout(updatedExerciseData);
      handleCallbackExercises(exerciseData);
    } else {
      addWorkout(exerciseData);
      onClose();
      setActiveTab("exercises");
      setTitle("");
      setWeight(0);
      setReps(null);
      setSets(null);
      handleCallbackExercises(exerciseData);
    }
  };

  useEffect(() => {
    if (selectedExercise) {
      setActiveTab("weight");
    } else {
      setActiveTab("exercises");
    }
  }, [selectedExercise]);
  const { theme } = useTheme();

  return (
    <Modal isFullWidth={true} isImage={true} isOpen={isOpen} onClose={onClose}>
      <Tabs value={activeTab} defaultValue="exercises">
        <TabsList>
          <TabsTrigger
            onClick={() => setActiveTab("exercises")}
            value="exercises"
            className={theme === "light" ? "text-black" : "text-white"}
          >
            My Exercises
          </TabsTrigger>
          <TabsTrigger
            className={theme === "light" ? "text-black" : "text-white"}
            onClick={() => setActiveTab("weight")}
            value="weight"
          >
            Intensity
          </TabsTrigger>
        </TabsList>
        <button onClick={onClose} className="sm:hidden fixed right-3">
          <IoClose size={20} />
        </button>
        <TabsContent value="exercises">
          <Exercises handleCallbackExercises={handleExerciseSelected} />
        </TabsContent>
        <TabsContent
          className="flex flex-col w-fit mx-auto py-[70px] gap-2 justify-center"
          value="weight"
        >
          <h3 className="text-2xl mb-3 font-semibold">
            {!selectedExercise ? title : editedName}
          </h3>
          {(personalRecord === true) ? (
            <div className="flex flex-row gap-3 mb-3">
              <AiOutlineTrophy color="lightblue" size={46} />
              <span className="m-auto text-[14px] font-light">
                Person Record!
              </span>
            </div>
          )
            : null

          }
            
          
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
            <Button2
              disabled={isDeleteLoading}
              variant={"destructive"}
              onClick={handleDeleteWorkout}
            >
              Delete
            </Button2>
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
          <Button2 className="" onClick={onClose} variant={"secondary"}>
            Cancel
          </Button2>
          <Button2
            disabled={!selectedExercise ? !title : isUpdateLoading}
            onClick={handleWorkoutAddition}
          >
            {selectedExercise ? "Update" : "Add Workout"}
          </Button2>
        </div>
      </div>
    </Modal>
  );
};

export default WorkoutModal;
