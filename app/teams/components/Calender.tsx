"use client"

import React, { useState } from 'react';
import {BiMessageSquareAdd} from 'react-icons/bi'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"; 
import "./calender.css"
import Modal from '@/app/components/Modal';

const events = [
  { title: 'Event 1', date: '2023-08-01' },
]

function Calendar() {
  const handleDateClick = (arg: any) => {
    alert('date clicked ' + arg.dateStr)
  }

  return (
    <>
    <Modal
    isOpen={true}
    >

    </Modal>
        <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      events={events}
      dayCellContent={({ date, view }) => <DayCell date={date} />}
      dateClick={handleDateClick}
      dayCellClassNames="cursor-pointer"
    />
    </>

  )
}

export default Calendar;

const DayCell = ({ date }: any) => {
  return (
    <div 
      className='relative flex flex-col items-start justify-start h-full' 
    >
    
      <div className='z-0'>
        {date.getDate()}
      </div>
    </div>
  );
};
