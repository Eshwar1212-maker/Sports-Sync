"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "@/app/components/Modal";
import { useMutation } from "@tanstack/react-query";
import Button from "@/app/components/Button";

interface EventsModaProps {
  isOpen?: boolean;
  onClose: () => void;
  date: string;
  onSave: any;
  selectedEvent: any;
}

function AddEventModal({
  isOpen,
  onClose,
  date,
  onSave,
  selectedEvent,
}: EventsModaProps) {
  const [eventTitle, setEventTitle] = useState("");
  const [eventNotes, setEventNotes] = useState("");
  const [updateTitle, setUpdateTitle] = useState(
    selectedEvent && selectedEvent.title
  );

  const [updateNotes, setUpdateNotes] = useState(selectedEvent?._def?.extendedProps?.notes || ""); 

  useEffect(() => {
    setUpdateTitle(selectedEvent ? selectedEvent.title : "");
    setUpdateNotes(selectedEvent?._def?.extendedProps?.notes || "");

  }, [selectedEvent]);
   console.log("SELECTED EVENT: " , selectedEvent);

  const {
    mutate: addEvent,
    isLoading,
    error,
  } = useMutation(
    (data: { title: string; notes: string; date: string }) => {
      return axios.post("/api/teamEvents", data);
    },
    {
      onSuccess: (response) => {
        onSave(response.data);
        onClose();
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    addEvent({
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
          value={selectedEvent ? updateTitle : eventTitle}
          onChange={
            selectedEvent
              ? (e) => {
                  setUpdateTitle(e.target.value);
                }
              : (e) => setEventTitle(e.target.value)
          }
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
            value={selectedEvent ? updateNotes : eventNotes}
            onChange={(e) =>
              selectedEvent
                ? setUpdateNotes(e.target.value)
                : setEventNotes(e.target.value)
            }
          />
        </div>
        <div className="flex gap-3 justify-end">
          <button onClick={onClose}>Cancel</button>
          <Button type="submit" disabled={selectedEvent ? !updateTitle : !eventTitle}>
            Save
          </Button>
        </div>
      </form>
    </Modal>
  );
}

export default AddEventModal;
