"use client";
import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { FC } from "react";
import { DayCell } from "../../userCalender/components/Calender";
import AddTeamEventModal from "./AddTeamEventModal";
import { User } from "@prisma/client";
import { FullTeamEventType } from "@/app/types";

interface TeamCalenderProps {
  team: FullTeamEventType
  currentUser: User
}

const TeamCalender: FC<TeamCalenderProps> = ({team, currentUser}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [events, setEvents] = useState<Event[]>(team?.events);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [date, setDate] = useState("");  
  
  const updateEvents = (event: any) => {
    setEvents([...events, event]);
  };

  const handleDateClick = (arg: any) => {
    //console.log(arg);
    setIsOpen(true)
    setDate(arg.dateStr)
    setSelectedEvent(null)
  };

  const handleEventClick = (info: any) => {
    //console.log(info);
    const newObj:any = Object.values(info)[1]
    setIsOpen(true);
    setSelectedDate(newObj._instance.range.end.toString())
    setSelectedEvent(info.event);
  };

  
  return (
    <div>
      <AddTeamEventModal
        team={team}
        events={events}
        date={date}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSave={updateEvents}
        selectedEvent={selectedEvent}
        selectedDate={selectedDate}
        currentUser={currentUser}
      />
      <div>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
          }}
          initialView="dayGridMonth"
          events={events}
          dayCellContent={({ date, view }) => <DayCell date={date} />}
          dateClick={handleDateClick}
          eventClick={handleEventClick}
          dayCellClassNames="cursor-pointer"
          editable={true}
        />
      </div>
    </div>
  );
};

export default TeamCalender;
