import React from "react";
import Form from "../components/Form/Form";
import { useNavigate } from "react-router-dom";

// This is the Enroll page component which is used to display the
// form for the user to enroll for a course
function Enroll() {
  const navigate = useNavigate();
  const submitFormHandler = async (data) => {
    if (data.hours !== "2" && data.hours !== "4" && data.hours !== "6") {
      alert("Please select a valid number of hours");
      return;
    } else if (data.course !== "java") {
      alert("Please select a valid course");
      return;
    }
    
    //  This is used to navigate to the schedule page and pass the data to it
    navigate("/schedule", {
      state: { data: data.hours, date: Date.now() + 86400000 },
    });
  };

  return (
    <>
      <Form submitFormHandler={submitFormHandler} />
    </>
  );
}

export default Enroll;
