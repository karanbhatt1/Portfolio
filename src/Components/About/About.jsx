import React from "react";
import Github from "../Github";
import Proffession from "./Proffession";

export default function About() {
  return (
    <div className="z-0">

     
      <div className="flex flex-row p-4 items-center justify-center bg-sky-900 h-max z-10">
      <Proffession/>
      <Github/>
      </div>
      
    </div>
  );
}
