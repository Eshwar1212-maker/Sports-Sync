"use client";

import React, { useState } from "react";
import { BiMessageSquareAdd } from "react-icons/bi";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./calender.css";
import AddEventModal from "./AddEventModal";

const events = [{ title: "Event 1", date: "2023-08-01" }];

function Calendar() {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState("")
  const [events, setEvents] = useState([
    {
      title: 'Skill Workout',
      date: '2023-07-02',
    },
    {
      title: 'Leg Workout',
      date: '2023-07-10',
    },
    {
      title: 'Upper Body Workout',
      date: '2023-07-09',
    },
    {
      title: 'Pickup Games',
      date: '2023-07-18',
    },
    {
      title: 'Shooting Workout',
      date: '2023-07-16',
    },
    {
      title: 'Skill Workout',
      date: '2023-07-15',
    },
    {
      title: 'Leg Workout',
      date: '2023-07-03',
    },
    {
      title: 'Upper Body Workout',
      date: '2023-07-04',
    },
    {
      title: 'Pickup Games',
      date: '2023-07-9',
    },
    {
      title: 'Shooting Workout',
      date: '2023-07-11',
    },
  ]);
  

  const handleDateClick = (arg: any) => {
    setIsOpen(true)
    setDate(arg.dateStr)
  };
  const handleSave = (event: any) => {
    setEvents(prevEvents => [...prevEvents, event]);
  };
  return (
    <>
      <AddEventModal
       date={date}
       isOpen={isOpen}
       onClose={() => setIsOpen(false)}
       onSave={handleSave}

       />
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dayCellContent={({ date, view }) => <DayCell date={date} />}
        dateClick={handleDateClick}
        eventColor="#00BFFF" 
        dayCellClassNames="cursor-pointer"
      />
    </>
  );
}

export default Calendar;


const DayCell = ({ date }: any) => {
  return (
    <div className="relative flex flex-col items-start justify-start h-full">
      <div className="z-0">{date.getDate()}</div>
    </div>
  );
};
