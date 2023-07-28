"use client";

import { User } from "@prisma/client";
import axios from "axios";
import { AiOutlineEdit } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Image from "next/image";
import Modal from "@/app/components/Modal";
import Input from "@/app/components/inputs/Input";

interface SettingsModal {
  isOpen?: boolean;
  onClose: () => void;
  date: string;
  onSave: (event: {title: string, notes: string, date: string}) => void;

}

const AddEventModal: React.FC<SettingsModal> = ({ isOpen, onClose, date, onSave }) => {
  const [eventTitle, setEventTitle] = useState("");
  const [eventNotes, setEventNotes] = useState("");

  const handleSave = () => {
    onSave({ title: eventTitle, notes: eventNotes, date });
    setEventTitle("");
    setEventNotes("");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <input
        className="text-[29px] bg-transparent outline-none border-none focus:ring-0 placeholder-gray-500"
        placeholder="Untitled"
        value={eventTitle}
        onChange={(e) => setEventTitle(e.target.value)}
      />
      <div className="py-4">
        <h3 className="text-base font-semibold leading-7">
          Date
        </h3>
        <p className="text-sm">{date}</p>
      </div>

      <div className="py-10">
        <textarea
          className="bg-transparent outline-none border-none focus:ring-0 placeholder-gray-500"
          placeholder="Add notes over here..."
          value={eventNotes}
          onChange={(e) => setEventNotes(e.target.value)}
        />
      </div>
      <div className="flex gap-3 justify-end">
        <button onClick={onClose}>
          Cancel
        </button>
        <button onClick={handleSave} type="button">
          Save
        </button>
      </div>

    </Modal>
  );
};

export default AddEventModal;