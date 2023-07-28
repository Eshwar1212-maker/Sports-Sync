"use client"

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"; 
import "./calender.css"

const events = [
  { title: 'Event 1', date: '2023-08-01' },

]

function Calendar() {
  const handleDateClick = (arg: any) => {
    alert('date clicked ' + arg.dateStr)

  }

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      events={events}
      dateClick={handleDateClick}
    />
  )
}

export default Calendar
