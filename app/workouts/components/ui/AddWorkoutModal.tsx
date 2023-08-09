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
      <div className="h-[600px] lg:h-[700px]">
        <h1 className="text-center text-xl font-semibold">Add Workout</h1>
        <div className="">
          <div>
            <WorkoutTab onClose={() => onClose}/>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddWorkoutModal;

