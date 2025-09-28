import React, { useState } from "react";

import {skills_data} from "../index";
import "../../Styles/skills.css"
function SkillCard() {
  const [view, setView] = useState("grid");
  return (
    <div className="skl bg-gray-900 text-white rounded-2xl shadow-lg p-6 w-full max-w-4xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">My Skills</h2>
        <button
          className="px-4 py-1 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
          onClick={() => setView(view === "grid" ? "list" : "grid")}
        >
          Toggle View
        </button>
      </div>

      <div
        className={`grid gap-6 ${
          view === "grid" ? "grid-cols-2 md:grid-cols-3" : "grid-cols-1"
        }`}
      >
        {skills_data.map((skill, idx) => (
          <div
            key={idx}
            className="bg-gray-800 p-4 rounded-xl shadow-md flex flex-col items-center justify-center"
          >
            {skill.icon}
            <h3 className="mt-3 text-lg font-semibold">{skill.name}</h3>
            <div className="w-full bg-gray-700 h-2 rounded-full mt-3">
              <div
                className="bg-indigo-500 h-2 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <p className="mt-2 text-sm text-gray-400">{skill.level}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillCard;
