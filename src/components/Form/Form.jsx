import React, { useState } from "react";

function Inputs({ submitFormHandler }) {
  const [formData, setFormData] = useState({
    course: "",
    hours: "",
  });
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen ">
      <h1 className="text-4xl text-center text-white font-semibold">
        Enrollment Form
      </h1>
      <form
        className="flex flex-col w-96 mx-auto mt-5 p-10 bg-gray-100 rounded-lg shadow-lg"
        onSubmit={(e) => {
          e.preventDefault();
          submitFormHandler(formData);
        }}
      >
        <div className="flex flex-col">
          <label htmlFor="course" className="text-sm font-semibold mb-2">
            Course
          </label>
          <select
            name="course"
            id="course"
            className="border border-gray-300 p-2 rounded-lg focus:outline-nonefocus:border-gray-500"
            onChange={(e) =>
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              })
            }
            defaultValue=""
          >
            <option value="" className="text-gray-700 font-mono ">
              Select
            </option>
            <option value="java" className="text-gray-700 font-mono ">
              java
            </option>
          </select>
        </div>
        <label
          htmlFor="hours"
          className="text-gray-700 text-sm font-semibold mb-2 mt-4"
        >
          Hours willing to commit
        </label>
        <select
          name="hours"
          id="hours"
          className="border border-gray-300 p-2 rounded-lg focus:outline-nonefocus:border-gray-500"
          onChange={(e) =>
            setFormData({
              ...formData,
              [e.target.name]: e.target.value,
            })
          }
          defaultValue=""
        >
          <option value="">Select</option>
          <option value="2">2</option>
          <option value="4">4</option>
          <option value="6">6</option>
        </select>
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4"
          type="submit"
        >
          Enroll
        </button>
      </form>
    </div>
  );
}

export default Inputs;
