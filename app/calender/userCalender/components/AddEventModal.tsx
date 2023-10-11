"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "@/app/components/Modal";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { BiSolidTrash } from "react-icons/bi";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { Indie_Flower, Tulpen_One } from "next/font/google";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { useTheme } from "next-themes";
import usePreviousNotes from "@/app/hooks/usePreviousNotes";
import { EventDropDown } from "./EventDropDown";
import { Event } from "@prisma/client";

const bon = Indie_Flower({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: "400",
});

interface EventsModaProps {
  isOpen?: boolean;
  onClose: () => void;
  date: string;
  onSave: any;
  selectedEvent: any;
  selectedDate: string;
  events: any;
}

function AddEventModal({
  isOpen,
  onClose,
  date,
  onSave,
  selectedEvent,
  selectedDate,
  events,
}: EventsModaProps) {
  const [eventTitle, setEventTitle] = useState("");
  const [eventNotes, setEventNotes] = useState("");
  const [updateTitle, setUpdateTitle] = useState(selectedEvent && selectedEvent.title);
  const {specificEventNotes, preFilledTitle, addPrefilledValue, setAddPrefilledValue} = usePreviousNotes(eventTitle, events, setEventTitle)
  const [isTeamEvent, setIsTeamEvent] = useState(false)




  
  
  const [updateNotes, setUpdateNotes] = useState(
    selectedEvent?._def?.extendedProps?.notes || ""
  );
  const { toast: toaster } = useToast();
   

  useEffect(() => {
    const currentEvent = events.filter((event: Event) => {
     return event.id === selectedEvent?._def?.publicId
  
    })
    
    if(currentEvent[0]?.teamId){
      setIsTeamEvent(true)
    }else{
      setIsTeamEvent(false)
    }
    
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
        setAddPrefilledValue(true);

      },
      onError: (error) => {
      },
    }
  );

  //UPDATE CALENDER EVENT MUTATION
  const { mutate: updateEvent } = useMutation(
    (data: {
      title: string;
      notes: string;
      eventId: string;
      date?: string;
    }) => {
      return axios.patch("/api/events/update", data);
    },
    {
      onSuccess: (response) => {
        onClose();
        onSave(response.data);
        toast.success("Event updated");
      },
      onError: (error) => {
      },
    }
  );
  const { mutate: deleteEv } = useMutation(
    (data: {
      title: string;
      notes: string;
      eventId: string;
      date?: string;
    }) => {
      return axios.patch("/api/events/update", data);
    },
    {
      onSuccess: (response) => {
        onClose();
        onSave(response.data);
        toast.success("Event deleted");
      },
      onError: (error) => {
      },
    }
  );

  const handleDelete = () => {
    try {
      deleteEv({
        notes: "",
        title: "",
        eventId: selectedEvent?._def?.publicId,
        date: "1000-09-20",
      });
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
    <Modal isMessage={false} isImage={true} isFullWidth={true} isOpen={isOpen} onClose={onClose}>
      <form className="px-1" onSubmit={handleSubmit}>
        <div className="flex justify-between">
        <input
          aria-label="Event name"
          className="text-[33px] bg-transparent outline-none border-none focus:ring-0 placeholder-gray-500 font-thin pl-4 sm:pl-0 w-full"
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
        {/* {selectedEvent && <EventDropDown title={updateTitle}/>} */}
        </div>

        <div className="pt-4 pb-2 sm:pl-0">
          <p>
          {selectedEvent ? selectedDate.split(" ")[0] + ", " + selectedDate.split(" ")[1] + " " + selectedDate.split(" ")[2]
            : 
          date.length > 15 ? date.slice(0, date.length - 15) : date.split("-")[1] + "/" + date.split("-")[2] + "/" + date.split("-")[0]
          }
          </p>
         {isTeamEvent && <p className="font-light text-[13px]">This is a team event part of one of your workspaces</p>}
        </div>
        <div className="border-[1px] border-solid border-gray-600 w-[100%]" />
        <div className="pt-2 pb-1 sm:pl-0">
          <textarea
            className={clsx(
              "bg-transparent outline-none border-none focus:ring-0 placeholder-gray-500 w-full border-[1px] border-s border-black h-[400px]",
              (eventTitle?.length > 20 && specificEventNotes) && "text-gray-400 text-xl"
            )}
            placeholder="Add notes over here..."
            style={
              eventTitle?.length > 4 && specificEventNotes.length > 0 && addPrefilledValue
                ? bon.style
                : {}
            }
            value={selectedEvent ? updateNotes : eventNotes + (addPrefilledValue && eventTitle?.length > 4 && specificEventNotes.length > 0 ? specificEventNotes[0]?.notes! : "")}

            onChange={(e) =>
              selectedEvent
                ? setUpdateNotes(e.target.value)
                : setEventNotes(e.target.value)
            }
          />
          {eventTitle?.length > 4 && specificEventNotes.length > 0 && addPrefilledValue && (
            <div
              style={bon.style}
              className="flex flex-row gap-1 w-fit rounded-lg my-auto pl-2 bg-gray-100 dark:bg-inherit"
            >
              <div className="">
                <p className={clsx("text-[18px] my-3 text-gray-600 dark:text-white")}>
                  Work with previous {preFilledTitle}?{" "}
                </p>
              </div>
              <div className="flex gap-2 p-2light">
                <button
                  type="button"
                  aria-label="Checkmark for notes"
                  onClick={() => {
                    setEventNotes(
                      (prevNotes) => prevNotes + specificEventNotes[0]?.notes!
                    );
                    setAddPrefilledValue(false);
                    setEventTitle(preFilledTitle!)
                    
                  }}
                >
                  <AiOutlineCheck size={24} />
                </button>
                <button
                  onClick={() => {
                    setAddPrefilledValue(false)
                  }}
                  aria-label="Dismiss prev notes"
                  type="button"
                >
                  <AiOutlineClose size={24} />
                </button>
              </div>
            </div>
          )}
        </div>
        {selectedEvent && (
          <button
            type="button"
            onClick={handleDelete}
            className="bottom-6 sm:bottom-4 fixed sm:py-2 pl-4 sm:pl-0"
          >
            <BiSolidTrash
              onClick={() =>
                toaster({
                  title: "event removed",
                  description: "",
                })
              }
              size={24}
            />
          </button>
        )}
        <div className="fixed right-0 flex bottom-2 pr-5 gap-2 pb-2">
          <Button className="rounded-md" variant={"secondary"} type="button" onClick={onClose}>
            Cancel
          </Button>
          <Button
            className="rounded-md"
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
