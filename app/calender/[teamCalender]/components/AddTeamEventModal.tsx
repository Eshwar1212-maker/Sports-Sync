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
import { Team, User } from "@prisma/client";
import { HiEllipsisVertical } from "react-icons/hi2";
import { cn } from "@/lib/utils";
import { DropdownMenuRadioGroupDemo } from "../ui/DropDownMenu";

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
  team: Team;
  currentUser: User;
}

function AddTeamEventModal({
  isOpen,
  onClose,
  date,
  onSave,
  selectedEvent,
  selectedDate,
  events,
  team,
  currentUser,
}: EventsModaProps) {
  const [eventTitle, setEventTitle] = useState("");
  const [eventNotes, setEventNotes] = useState("");
  const [updateTitle, setUpdateTitle] = useState(
    selectedEvent && selectedEvent.title
  );
  const [specificEventNotes, setSpecificEventNotes] = useState<any>([]);
  const [preFilledTitle, setPreFilledTitle] = useState();
  const [addPrefilledValue, setAddPrefilledValue] = useState(true);

  useEffect(() => {
    if (eventTitle.length > 2) {
      const newEvents = events
        .filter((event: any) => {
          if (
            event.date.toString().includes("2023") &&
            event.notes.length > 10
          ) {
            return event.title.includes(eventTitle);
          }
        })
        .sort((a: any, b: any) => b.notes.length - a.notes.length);

      setPreFilledTitle(newEvents[0]?.title);
      setSpecificEventNotes(newEvents);
    }
  }, [eventTitle]);

  const [updateNotes, setUpdateNotes] = useState(
    selectedEvent?._def?.extendedProps?.notes || ""
  );
  const { toast: toaster } = useToast();

  const { theme } = useTheme();

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
    (data: {
      title: string;
      notes: string;
      date: string;
      teamId: string;
      poster: string;
    }) => {
      return axios.post("/api/teams/teamEvents", data);
    },
    {
      onSuccess: (response) => {
        onSave(response.data);
        onClose();
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
      teamId: string;
    }) => {
      return axios.patch("/api/teams/teamEvents/update", data);
    },
    {
      onSuccess: (response) => {
        onClose();
        onSave(response.data);
        toast("Event updated");
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
      teamId: string;
      date?: string;
    }) => {
      return axios.patch("/api/teams/teamEvents/update", data);
    },
    {
      onSuccess: (response) => {
        onClose();
        onSave(response.data);
        toast("Event deleted");
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
        teamId: team?.id,
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
        teamId: team?.id,
      });
      setUpdateNotes("");
      setUpdateTitle("");
    } else {
      addEvent({
        title: eventTitle,
        notes: eventNotes,
        date,
        teamId: team?.id,
        poster: currentUser?.name!,
      });
    }

    setEventTitle("");
    setEventNotes("");
  };

  

  return (
    <Modal showClose={false} isOpen={isOpen} onClose={onClose}>
      <form className="" onSubmit={handleSubmit}>
        <div className="">
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
        {/* <button aria-label="Options" className="" type="button">
           <DropdownMenuRadioGroupDemo />
        </button> */}
        </div>

        <div className={cn("pl-4 sm:pl-0", selectedEvent ? "pt-4" : "py-3")}>
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
{  selectedEvent && <div className="pl-4 sm:pl-0 py-2">
          <h3 className="text-base font-semibold leading-7">Posted by</h3>
          <p className="">{selectedEvent?._def?.extendedProps?.poster}</p>
        </div>}
        <div className="border-[1px] border-solid border-gray-900 w-full pl-6 sm:pl-0" />
        <div className="py-6  pl-3 sm:pl-0">
          <textarea
            className={clsx(
              "bg-transparent outline-none border-none focus:ring-0 placeholder-gray-500 w-full border-[1px] border-s border-black h-[400px]",
              eventTitle.length > 20 &&
                specificEventNotes &&
                "text-gray-400 text-xl"
            )}
            placeholder="Add notes over here..."
            style={
              eventTitle.length > 4 &&
              specificEventNotes.length > 0 &&
              addPrefilledValue
                ? bon.style
                : {}
            }
            value={
              selectedEvent
                ? updateNotes
                : eventNotes +
                  (addPrefilledValue &&
                  eventTitle.length > 4 &&
                  specificEventNotes.length > 0
                    ? specificEventNotes[0]?.notes!
                    : "")
            }
            onChange={(e) =>
              selectedEvent
                ? setUpdateNotes(e.target.value)
                : setEventNotes(e.target.value)
            }
          />
          {eventTitle.length > 4 &&
            specificEventNotes.length > 0 &&
            addPrefilledValue && (
              <div
                style={bon.style}
                className={clsx(
                  "flex flex-row gap-1 w-fit rounded-lg my-auto pl-2",
                  theme === "light" && "bg-gray-100"
                )}
              >
                <div className="">
                  <p
                    className={clsx(
                      "text-[18px] my-3",
                      theme === "light" && "text-gray-600"
                    )}
                  >
                    Work with previous {preFilledTitle}?{" "}
                  </p>
                </div>
                <div
                  className={clsx("flex gap-2 p-2", theme === "light" && "")}
                >
                  <button
                    type="button"
                    aria-label="Checkmark for notes"
                    onClick={() => {
                      setEventNotes(
                        (prevNotes) => prevNotes + specificEventNotes[0]?.notes!
                      );
                      setAddPrefilledValue(false);
                    }}
                  >
                    <AiOutlineCheck size={24} />
                  </button>
                  <button
                    onClick={() => setAddPrefilledValue(false)}
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

export default AddTeamEventModal;
