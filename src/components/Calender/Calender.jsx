import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import Modal from "../Modal/Modal";
import DayDescription from "./DayDescription";
import Event from "./Event";

// This component renders the calender
function Calender({ events }) {
  const [showModal, setShowModal] = useState(false);
  const [event, setEvent] = useState({});

  return (
    <>
      {showModal && (
        <Modal onClick={() => setShowModal(false)}>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold">{event.title}</h1>
            <p className="text-lg">{event.extendedProps.desc}</p>
            <p className="text-lg">
              Total Duration: {event.extendedProps.duration} min
            </p>
            <div className="text-lg overflow-y-scroll scroll-x-hidden overflow-x-hidden w-full h-96 scrollbar">
              <DayDescription event={event} />
            </div>
          </div>
        </Modal>
      )}
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        eventClick={(info) => {
          setEvent(info.event);
          setShowModal(true);
        }}
        contentHeight={580}
        events={events}
        eventContent={(arg) => {
          return <Event arg={arg} />;
        }}
      />
    </>
  );
}

export default Calender;
