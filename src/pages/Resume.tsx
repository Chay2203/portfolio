import React from "react";
import { ClipboardListIcon } from "@heroicons/react/solid";

const Resume = () => {
  return (
    <div
      id="Resume"
      className="lg:w-1/2 mt-64 mb-4 text-justify mx-12 lg:mr-60 lg:ml-auto"
    >
      <div>
        <div className="table">
          <ClipboardListIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            Resume
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
      </div>
      <div className="text-[#a2aabc] text-lg mt-5">
        <div className="flex flex-row">
          <div className="w-1/4">
            <code className="text-yellow_vs">Education</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Scaler School of Technology</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              B.Sc + M.Sc in Computer Science
            </code>
            <br />
            <code className="text-xs text-brown_vs">
              • 2023 - 2027
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1/4">
          <code className="text-yellow_vs">Skills</code>
          </div>
          <div className="w-3/4">
            <code className="text-sm">
              <br />• Proficient in React for building dynamic user interfaces.
              <br />• Strong understanding of HTML, CSS, and JavaScript.
              <br />• Experience with state management libraries such as Redux.
              <br />• Familiar with modern front-end build pipelines and tools.
              <br />• Knowledge of RESTful APIs and asynchronous programming.
              <br />• Skilled in responsive web design using frameworks like Bootstrap or Tailwind CSS.
              <br />• Ability to write clean, maintainable, and efficient code.
              <br />• Good understanding of version control with Git.
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
