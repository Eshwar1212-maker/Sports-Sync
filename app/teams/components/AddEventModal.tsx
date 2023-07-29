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
    axios.post("/api/teamEvents", {eventTitle, eventNotes})
    setEventTitle("");
    setEventNotes("");
     

  };



  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form>


      <input
        className="text-[33px] bg-transparent outline-none border-none focus:ring-0 placeholder-gray-500 font-thin"
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
      <div className="border-[1px] border-solid border-gray-900 w-full"/>
      <div className="py-6">
        <textarea
          className="bg-transparent outline-none border-none focus:ring-0 placeholder-gray-500 w-full border-[1px] border-s border-black h-[400px] text-md"
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
      </form>
    </Modal>
  );
};

export default AddEventModal;