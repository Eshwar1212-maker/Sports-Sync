"use client";

import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import AddEventModal from "./AddEventModal";


function Calendar({userEvents}: {userEvents: string | undefined}) {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState("")
  const [events, setEvents] = useState<any>([]);

  const handleDateClick = (arg: any) => {
    setIsOpen(true)
    setDate(arg.dateStr)    
  };

  console.log(userEvents);
  

  return (
    <>
      <AddEventModal
       date={date}
       isOpen={isOpen}
       onClose={() => setIsOpen(false)}
       />
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        }}
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
