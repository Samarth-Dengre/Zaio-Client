import React from "react";
import Form from "../components/Form/Form";
import { useNavigate } from "react-router-dom";
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
    navigate("/schedule", { state: { data: data.hours, date: Date.now() } });
  };

  return (
    <>
      <Form submitFormHandler={submitFormHandler} />
    </>
  );
}

export default Enroll;
