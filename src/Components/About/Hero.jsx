import React from "react";
import { ReactTyped } from "react-typed";


export default function Hero() {
  return (
    <div className="text-2xl font-bold">
      I am{" "}
      <ReactTyped
        strings={[
          "A learner.",
          "A student.",
          "A developer.",
          "A machine learning engineer.",
        ]}
        typeSpeed={90}
        backSpeed={50}
        startDelay={2000}
        endDelay = {1000}
        style={{fontSize:'1.5em', color:"BLack", display:"inline"}}
        repeat = {Infinity}
        loop
      />
    </div>
  );
}
