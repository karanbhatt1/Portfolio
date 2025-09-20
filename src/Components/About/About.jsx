import React from "react";
import Github from "../Github";
import Proffession from "./Proffession";
import { FaArrowRight } from "react-icons/fa6";
import { motion, scale } from "motion/react";
import { animate } from "motion";

export default function About() {
  return (
    <div className="flex flex-col p-4 items-center justify-center bg-sky-900 h-max z-10">
      <div className="flex flex-1 gap-3 p-2 items-center justify-center bg-sky-900 h-max z-10">
        <Proffession />
        <Github />
      </div>
      <div className="h-20 flex flex-row items-center justify-center self-start gap-1">
        <button className="h-10 rounded-md bg-green-600 p-2 font-sans">
          Lets Start
        </button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="h-10 w-10 rounded-md bg-green-400 p-2 font-sans"
        >
          {" "}
          <sapn>
            <FaArrowRight className="font-sans text-xl" />{" "}
          </sapn>{" "}
        </motion.button>
      </div>
    </div>
  );
}
