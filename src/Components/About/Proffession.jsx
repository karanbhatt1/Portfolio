import React, { useState} from "react";
import { useEffect } from "react";
import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io5";
import Github from "../Github";
import '../../Styles/proffession.css'
import Hero from "./Hero";
const Proffession = () => {
  // useEffect(()=>{
  //   setAnimate(!animate)
  // },[setAnimate]);
  return (
    <div className='w-auto flex flex-col flex-wrap justify-center'>
      <div className="flex flex-col items-center justify-center">
        <p className={`prof text-8xl font-extrabold text-orange-500 text-center`}>
          <span className="text-center prof">Hi!</span>
          <br />I am Karan Bhatt.
        </p>
        <br/>
        <Github />
        <br/>
        <p className="prof text-yellow-400 text-2xl font-serif text-justify p-4">
          Self Motivated, curious and passionate individual about tech. I am
          student persuing my Bachelors in computer science and engineering from
          Graphic Era Hill University. I Know Java, Python, JavaScript. I am
          open and curious about learning new technologies and contribute my
          best service to anyone whom i deseve.
        </p>
      </div>
      <h1 className="mediaquery anime bg-yellow-900 text-white text-5xl m-4 p-4 text-center rounded-full w-max">
        <Hero/>
      </h1>
      <section className="prof self-center flex flex-row gap-5">
        <a href="https://github.com/karanbhatt1" target="_blank">
          <IoLogoGithub className="text-white text-5xl" />{" "}
        </a>
        <a href="https://www.linkedin.com/in/karan-bhatt-8542aa260" target="_blank">
          <IoLogoLinkedin className="text-white text-5xl" />{" "}
        </a>
        <a href="https://www.instagram.com/mang_al8271/" target="_blank">
          <IoLogoInstagram className="text-white text-5xl" />{" "}
        </a>
      </section>
    </div>
  );
};

export default Proffession;
