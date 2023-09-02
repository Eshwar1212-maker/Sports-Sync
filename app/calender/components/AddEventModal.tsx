"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "@/app/components/Modal";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { BiSolidTrash } from "react-icons/bi";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";

interface EventsModaProps {
  isOpen?: boolean;
  onClose: () => void;
  date: string;
  onSave: any;
  selectedEvent: any;
  selectedDate: string;
}

function AddEventModal({
  isOpen,
  onClose,
  date,
  onSave,
  selectedEvent,
  selectedDate,
}: EventsModaProps) {
  const [eventTitle, setEventTitle] = useState("");
  const [eventNotes, setEventNotes] = useState("");
  const [updateTitle, setUpdateTitle] = useState(
    selectedEvent && selectedEvent.title
  );

  const [updateNotes, setUpdateNotes] = useState(
    selectedEvent?._def?.extendedProps?.notes || ""
  );
  const { toast: toaster } = useToast();

  useEffect(() => {
    setUpdateTitle(selectedEvent ? selectedEvent.title : "");
    setUpdateNotes(selectedEvent?._def?.extendedProps?.notes || "");
  }, [selectedEvent]);

  //ADD CALENDER EVENT MUTATION
  const {
    mutate: addEvent,
    isLoading,
    error,
  } = useMutation(
    (data: { title: string; notes: string; date: string }) => {
      return axios.post("/api/events", data);
    },
    {
      onSuccess: (response) => {
        onSave(response.data);
        onClose();
      },
      onError: (error) => {
        console.log("ADD EVENT ERROR: ", error);
      },
    }
  );

  //UPDATE CALENDER EVENT MUTATION
  const { mutate: updateEvent } = useMutation(
    (data: { title: string; notes: string; eventId: string, date?: string }) => {
      console.log(data);

      return axios.patch("/api/events/update", data);
    },
    {
      onSuccess: (response) => {
        onClose();
        onSave(response.data);
        toast("Event updated");
      },
      onError: (error) => {
        console.log("UPDATE EVENT ERROR: ", error);
      },
    }
  );
  const { mutate: deleteEv } = useMutation(
    (data: { title: string; notes: string; eventId: string, date?: string }) => {
      return axios.patch("/api/events/update", data);
    },
    {
      onSuccess: (response) => {
        onClose();
        onSave(response.data);
        toast("Event deleted");
      },
      onError: (error) => {
        console.log("UPDATE EVENT ERROR: ", error);
      },
    }
  );

  const handleDelete = () => {
    try {
      deleteEv({
        notes: updateNotes,
        title: updateTitle,
        eventId: selectedEvent?._def?.publicId,
        date: "1000-09-20",
      })
    } catch (error) {
      console.error("Error deleting event:", error);
      toast.error("Error deleting the event");
    }
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (selectedEvent) {
      updateEvent({
        notes: updateNotes,
        title: updateTitle,
        eventId: selectedEvent?._def?.publicId,
      });
      setUpdateNotes("");
      setUpdateTitle("");
    } else {
      addEvent({
        title: eventTitle,
        notes: eventNotes,
        date,
      });
    }

    setEventTitle("");
    setEventNotes("");
  };


  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form className="px-1" onSubmit={handleSubmit}>
        <input
          aria-label="Event name"
          className="text-[33px] bg-transparent outline-none border-none focus:ring-0 placeholder-gray-500 font-thin pl-4 sm:pl-0"
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
        <div className="py-4 pl-4 sm:pl-0">
          <h3 className="text-base font-semibold leading-7">Date</h3>
          {selectedEvent
            ? selectedDate.split(" ")[0] +
              ", " +
              selectedDate.split(" ")[1] +
              " " +
              selectedDate.split(" ")[2]
            : date.length > 15
            ? date.slice(0, date.length - 15)
            : date.split("-")[1] +
              "/" +
              date.split("-")[2] +
              "/" +
              date.split("-")[0]}
        </div>
        <div className="border-[1px] border-solid border-gray-900 w-full pl-4 sm:pl-0" />
        <div className="py-6  pl-10 sm:pl-0">
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
        {selectedEvent && (
          <button
            type="button"
            onClick={handleDelete}
            className="bottom-6 sm:bottom-4 fixed sm:py-2 pl-4 sm:pl-0"
          >
            <BiSolidTrash
              onClick={() => toaster({
                title: "event removed",
                description: ""
              })}
              size={24}
            />
          </button>
        )}
        <div className="fixed right-0 flex bottom-2 pr-5 gap-2 pb-2">
          <Button variant={"secondary"} type="button" onClick={onClose}>
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={!selectedEvent ? !eventTitle : !updateTitle}
          >
            {selectedEvent ? "Update" : "Save"}
          </Button>
        </div>
      </form>
    </Modal>
  );
}

export default AddEventModal;
