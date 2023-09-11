"use client"
import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { FC } from 'react'
import { DayCell } from "../../components/Calender";
interface TeamCalenderProps {
  
}
const TeamCalender: FC<TeamCalenderProps> = ({
  
}) => {
    const handleDateClick = (arg: any) => {
        // setIsOpen(true)
        // setDate(arg.dateStr)  
        // setSelectedEvent(null)   
      };
    

      
      const handleEventClick = (info: any) => {
        const newObj:any = Object.values(info)[1]
        // setIsOpen(true);
        // setSelectedDate(newObj._instance.range.end.toString())
        // setSelectedEvent(info.event); 
      }
  return (
    <div>
           <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        }}
        initialView="dayGridMonth"
        events={[]}
        dayCellContent={({ date, view }) => <DayCell date={date} />}
        dateClick={handleDateClick}
        eventColor="#00BFFF" 
        eventClick={handleEventClick}  
        dayCellClassNames="cursor-pointer"
        editable={true}
      /> 
    </div>
  )
}

export default TeamCalender