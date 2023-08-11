import Modal from "@/app/components/Modal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FC } from "react";
import Exercises from "./Exercises";
import Button from "@/app/components/Button";

interface WorkoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WorkoutModal: FC<WorkoutModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isFullWidth={true} isOpen={isOpen} onClose={onClose}>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="gap-20">
          <TabsTrigger className="text-md" value="exercises">Your Exercises</TabsTrigger>
          <TabsTrigger className="text-md" value="weight">Weight</TabsTrigger>
          <TabsTrigger className="text-md" value="sets">Sets</TabsTrigger>
          <TabsTrigger className="text-md" value="reps">Reps</TabsTrigger>
        </TabsList>
        <TabsContent value="exercises">
            <Exercises />
        </TabsContent>
        <TabsContent value="weight">
            Weight
        </TabsContent>
        <TabsContent value="sets">
            Sets
        </TabsContent>
        <TabsContent value="reps">
            Reps
        </TabsContent>
      </Tabs>
      <div className="bottom-8 fixed flex gap-2 right-8">
        <Button secondary>
            New Exercises +
        </Button>
        <Button>
            Add Workout
        </Button>
      </div>
    </Modal>
  );
};

export default WorkoutModal;
