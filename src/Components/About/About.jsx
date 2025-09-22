import React, { useState } from "react";
import Github from "../Github";
import Proffession from "./Proffession";
import { FaArrowRight } from "react-icons/fa6";
import { motion, scale, AnimatePresence } from "motion/react";
import { animate } from "motion";
import LiquidEther from "../Backgrounds/LiquidEther";
import "../../Styles/about.css";
export default function About() {
  return (
    <>
      <div className="about bg-black  backdrop-opacity-60 rounded-lg border-white/35 border-2 flex flex-col flex-wrap items-center justify-center">
        <div className="effect bg-black w-screen overflow-hidden h-full">
          {/* <LiquidEther
            colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
            mouseForce={20}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          /> */}
        </div>
        <div className="flex flex-wrap p-2 items-center">
          <Proffession />
        </div>
        
        <div className="ml-auto mt-auto mr-auto self-start h-20 flex  flex-row items-center justify-center gap-1">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{
              scale: 0.95,
              x: [0, 1100, 1100, 0],
              y: [0, 0, 0, 0],
              transition: { duration: 1 },
            }}
            className="h-10 flex flex-row gap-2 rounded-md bg-green-400 border-green-950 border-4 border-solid"
          >
            <span className="self-center text-2xl  p-2">Explore Me</span>
            <span className="w-1 bg-green-900 m-0 p-0"></span>
            <span className="self-center text-2xl  p-2">
              <FaArrowRight className="font-ex text-2xl" />
            </span>
          </motion.button>
        </div>
        </div>
    </>
  );
}
