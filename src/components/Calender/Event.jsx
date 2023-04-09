import React from "react";

// This component renders the event in the calender
function Event({ arg }) {
  return (
    <div className="flex flex-col justify-center items-center p-auto m-auto  text-center border border-gray-700 bg-gray-100 p-1 rounded-lg shadow-lg w-32 mb-2 hover:bg-gray-200  hover:shadow-xl cursor-pointer overflow-hidden">
      <strong className="w-full display-block">{arg.event.title}</strong>
      <p className="w-full break-words truncate">
        Duration: {arg.event.extendedProps.duration} minutes
      </p>
      <p className=" w-full break-words truncate">
        Modules: {arg.event.extendedProps.modules.length}
      </p>
    </div>
  );
}

export default Event;
