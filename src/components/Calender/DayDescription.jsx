import React from "react";
import { OndemandVideo, ArticleSharp, Terminal } from "@mui/icons-material";

// This component is used to display the modules of a day in the modal
function DayDescription(props) {
  const { event } = props;
  return (
    <>
      {event.extendedProps.modules.map((module, index) => {
        return (
          <div
            key={index}
            className={`flex flex-col p-3
          ${index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"}
          `}
          >
            <div className="flex flex-row justify-between w-full">
              <p
                className="hover:underline cursor-pointer hover:text-blue-900
              "
              >
                {module.title} (
                {module.type === "video" ? (
                  <OndemandVideo />
                ) : module.type === "coursemcq" ? (
                  <ArticleSharp />
                ) : (
                  <Terminal />
                )}
                )
              </p>
              <p className="text-gray-500">({module.duration} min)</p>
            </div>
            <p>
              <strong>Description: </strong>
              {module.description}
            </p>
          </div>
        );
      })}
    </>
  );
}

export default DayDescription;
