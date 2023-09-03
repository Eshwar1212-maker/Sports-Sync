"use client";

import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import AddEventModal from "./AddEventModal";
import { Event } from "@prisma/client";
import axios from "axios";


function Calendar({userEvents}: {userEvents: any}) {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState("")
  const [events, setEvents] = useState<any>(userEvents);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateClick = (arg: any) => {
    setIsOpen(true)
    setDate(arg.dateStr)  
    setSelectedEvent(null)   
  };

  const updateEvents = (event: any) => {
    setEvents([...events, event])
  }
  
  const handleEventClick = (info: any) => {
    const newObj:any = Object.values(info)[1]
    setIsOpen(true);
    setSelectedDate(newObj._instance.range.end.toString())
    setSelectedEvent(info.event); 
  }

  const handleEventDrop = (info: any) => {
  
    const event = info.event;
    // axios.patch("/api/events/update", {
    //   notes: updateNotes,
    //   title: updateTitle,
    //   eventId: info.event._def.publicId
    // })
  };

  return (
    <div className="">
      <AddEventModal
       events={events}
       date={date}
       isOpen={isOpen}
       onClose={() => setIsOpen(false)}
       onSave={updateEvents}
       selectedEvent={selectedEvent}
       selectedDate={selectedDate}
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
        eventClick={handleEventClick}  
        dayCellClassNames="cursor-pointer"
        editable={true}
        eventDrop={handleEventDrop}
      /> 
    </div>
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
