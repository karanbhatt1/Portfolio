import React, { useState } from "react";
import Github from "../Github";
import Proffession from "./Proffession";
import { FaArrowRight } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";
import { motion, scale, AnimatePresence } from "motion/react";
import { animate, delay } from "motion";
import LiquidEther from "../Backgrounds/LiquidEther";
import "../../Styles/about.css";
export default function About() {

  const downloadR = () => {
    const link = document.createElement("a");
    link.href = "./KaranBhattResume.pdf"; // from public folder
    link.download = "Karan_Bhatt_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

const previewR = () => {
    window.open("./KaranBhattResume.pdf", "_blank");
  };

  return (
    <>
      <div
        id="about"
        style={{ marginBottom: "2rem", position: "static", top: "50%" }}
        className="container con bg-black  scroll-mt-24 mt-10 backdrop-opacity-60 rounded-lg border-white/35 border-2 flex flex-col flex-wrap items-center justify-center"
      >
        <div className="flex flex-wrap p-2 items-center">
          <Proffession />
        </div>

        <div className="ml-auto mt-auto mr-auto self-start h-20 flex  flex-row items-center justify-center gap-3">
          <motion.button
            initial={{
              opacity: 0.5,
              scale: 0.5,
            }}
            animate={{
              opacity: 0.5,
              scale: 1,
            }}
            transition={{ delay: 0.5, duration: 1 }}
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            whileTap={{
              scale: 0.95,
              transition: { duration: 0.2 },
            }}
            onClick={previewR}
            style={{ height: "4rem", width: "auto" }}
            className="flex flex-row gap-2 rounded-md bg-green-400 border-green-950 border-4 border-solid"
          >
            <span className="self-center text-2xl  p-2">Hire Me</span>
            <span className="w-1 bg-green-900 m-0 p-0"></span>
            <span className="self-center text-2xl  p-2">
              <FaArrowRight className="font-ex text-2xl" />
            </span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
            initial={{ opacity: 0.5, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            onClick={downloadR}
            style={{ height: "4rem" }}
            className="hover:bg-blue-400 p-2 flex flex-row gap-2 text-2xl items-center rounded-md bg-blue-500 text-white border-blue-950 border-4"
          >
            Download Resume
            <span className="self-center text-2xl  p-1">
              <IoMdDownload />
            </span>
          </motion.button>
        </div>
      </div>
    </>
  );
}
