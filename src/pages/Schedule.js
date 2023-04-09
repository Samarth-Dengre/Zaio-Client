import React, { useEffect, useState } from "react";
import Calender from "../components/Calender/Calender";
import useHttp from "../utils/useHttp";
import { useLocation } from "react-router-dom";
import { refactorEvents } from "../utils/refactorEvents";
import Loader from "../components/UI/Loader";

// This is the Schedule page component which is used to display the
// schedule of the user after he/she has enrolled for a course
function Schedule() {
  const { data, loading, get } = useHttp();
  const [events, setEvents] = useState([]);
  const location = useLocation();

  //   This useEffect is used to get the schedule of the user
  useEffect(() => {
    const hrs = location.state.data;
    const url = `http://localhost:5000/schedule?hrs=${hrs}`;
    get({ url });
  }, [location.state.data]);

  //   This useEffect is used to refactor the data and set the events
  useEffect(() => {
    if (data) {
      const temp = refactorEvents(data, location.state.date);
      setEvents(temp);
    }
  }, [data, location.state.date]);

  return loading ? (
    <Loader />
  ) : (
    events.length > 0 && (
      <div className="w-[80vw] m-auto bg-white rounded-lg overflow-hidden p-4 mt-6 mb-4">
        <Calender events={events} />
      </div>
    )
  );
}

export default Schedule;
