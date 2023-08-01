"use client";
import axios from "axios";
import {useState } from "react";
import Modal from "@/app/components/Modal";
import { useMutation } from "@tanstack/react-query";

interface EventsModaProps {
  isOpen?: boolean;
  onClose: () => void;
  date: string;
  onSave: (event: { title: string; notes: string; date: string }) => void;
}

function AddEventModal ({
  isOpen,
  onClose,
  date,
  onSave,
}: EventsModaProps){


  
  
  const [eventTitle, setEventTitle] = useState("");
  const [eventNotes, setEventNotes] = useState("");


  const {
    mutate: handleSave,
    isLoading,
    error,
  } = useMutation(
    (data: { title: string; notes: string; date: string}) => {
      return axios.post("/api/teamEvents", data);
    },
    {
      onSuccess: () => {},
      onError: (error) => {
        console.log(error);
      },
    }
  );

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    handleSave({
      title: eventTitle,
      notes: eventNotes,
      date,
    });
    setEventTitle("");
    setEventNotes("");
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <input
          className="text-[33px] bg-transparent outline-none border-none focus:ring-0 placeholder-gray-500 font-thin"
          placeholder="Untitled"
          value={eventTitle}
          onChange={(e) => setEventTitle(e.target.value)}
        />

        <div className="py-4">
          <h3 className="text-base font-semibold leading-7">Date</h3>
          <p className="text-sm">{date}</p>
        </div>
        <div className="border-[1px] border-solid border-gray-900 w-full" />
        <div className="py-6">
          <textarea
            className="bg-transparent outline-none border-none focus:ring-0 placeholder-gray-500 w-full border-[1px] border-s border-black h-[400px] text-md"
            placeholder="Add notes over here..."
            value={eventNotes}
            onChange={(e) => setEventNotes(e.target.value)}
          />
        </div>
        <div className="flex gap-3 justify-end">
          <button onClick={onClose}>Cancel</button>
          <button type="submit">Save</button>
        </div>
      </form>
    </Modal>
  );
};


export default AddEventModal