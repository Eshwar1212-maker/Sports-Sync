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

type exercise = {
  title: string;
  reps?: number | null;
  sets?: number | null;
  exercise?: string;
  weight?: number | null;
  id?: string
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
  workoutId: string
  updateWorkoutInState: any
  workoutRecord: any
  showConfetti: any
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
  showConfetti
}) => {
  const [title, setTitle] = useState<string>("");
  const [weight, setWeight] = useState<any>(0);
  const [sets, setSets] = useState<number | null>(0);
  const [reps, setReps] = useState<number | null>(0);
  const [addExercise, setAddExercise] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>();
  const [personalRecord, setPersonalRecord] = useState(false)
  const [showingConfetti, setShowingConfetti] = useState<boolean>(false);




  const findWorkoutRecord = () => {
    const titleRecord = workoutRecord.filter((workout: Workout) => workout.title === title);
    const isPersonalRecord = titleRecord.every((workout: Workout) => {
      console.log(weight, workout?.weight);
      return weight < (1 + workout?.weight!)
    });
    console.log( "IS PERSONAL RECORD: ", isPersonalRecord);
    setPersonalRecord(!isPersonalRecord);
}

useEffect(() => {
    findWorkoutRecord()
    console.log("PERSONAL RECORD: ", personalRecord);
}, [personalRecord, weight]);

  
  

  const handleExerciseSelected = (selectedExercise: string) => {
    setTitle(selectedExercise);
    setActiveTab("weight");
  };

  //ADD WORKOUT
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
    }) => {
      return axios.post("/api/workouts", data);
    },
    {
      onSuccess: () => {
        findWorkoutRecord()
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
  //UPDATE WORKOUT
  const { mutate: updateWorkout } = useMutation(
    (data: { weight: number; sets: number; reps: number, workoutId: string }) => {
      return axios.patch("/api/workouts/update", data);
    },
    {
      onSuccess: (response) => {
        onClose();
        updateWorkoutInState(response.data); 
        toast.success("Workout updated");
        findWorkoutRecord()
      },
      onError: (error) => {
        console.log("UPDATE EVENT ERROR: ", error);
      },
    }
  );

  const handleWorkoutAddition = () => {
    const exerciseData = {
      title,
      weight,
      sets,
      reps,
      date,
    };
    const updatedExerciseData = {
      weight: editedWeight,
      sets: editedSets,
      reps: editedReps,
      workoutId: workoutId
    };
    if (selectedExercise) {
      updateWorkout(updatedExerciseData);
    } else {
      addWorkout(exerciseData);
      handleCallbackExercises(exerciseData);
      onClose();
      setActiveTab("exercises");
      setTitle("");
      setWeight(null);
      setReps(null);
      setSets(null);
    }
  };

  useEffect(() => {
    if (selectedExercise) {
      setActiveTab("weight");
    } else {
      setActiveTab("exercises");
    }
  }, [selectedExercise]);

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
          {(personalRecord && title) &&
              <div className="flex flex-row gap-3 mb-3">
                <AiOutlineTrophy color="lightblue" size={46} /> 
                <span className="m-auto text-[14px] font-light">Person Record!</span>
               </div>  
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
      <div className="bottom-4 fixed flex gap-2 right-8">
        <Button onClick={() => setAddExercise(!addExercise)} secondary>
          New Exercises <IoIosAdd size={22} />
        </Button>
        <Button
          disabled={!title && !selectedExercise}
          onClick={handleWorkoutAddition}
        >
          {selectedExercise ? "Update" : "Add Workout"}
        </Button>
      </div>
    </Modal>
  );
};

export default WorkoutModal;
