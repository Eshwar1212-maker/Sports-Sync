import Button from "@/app/components/Button";
import Modal from "@/app/components/Modal";
import Input from "@/app/components/inputs/Input";
import { Tab } from "@headlessui/react";
import { FC } from "react";
import WorkoutTab from "./WorkoutTab";
interface AddWorkoutModalProps {
  isOpen?: boolean;
  onClose: () => void;
}
const AddWorkoutModal: FC<AddWorkoutModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="h-[600px]">
        <h1 className="text-center text-xl">Add Workout</h1>
        <div className="">
          <div>
            <WorkoutTab />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddWorkoutModal;

