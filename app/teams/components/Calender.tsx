"use client"

import React, { useState } from "react";
import { Calendar, momentLocalizer, View } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import events from "../data/events";

const localizer = momentLocalizer(moment);

const allViews: View[] = ["month", "week", "day"];

const Calender = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedEvents, setSelectedEvents] = useState([]);

  const handleShowMore = (events: any, date: any) => {
    setShowModal(true);
    setSelectedEvents(events);
  };
  console.log(events);
  

  return (
    <div style={{ height: 700 }}>
      <Calendar
        localizer={localizer}
        events={events}
        step={60}
        views={allViews}
        defaultDate={new Date(2015, 3, 1)}
        popup={false}
        onShowMore={handleShowMore}
      />
    </div>
  );
};

export default Calender
