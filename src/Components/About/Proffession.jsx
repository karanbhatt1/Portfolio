import React from "react";
import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io5";
import Github from "../Github";
const Proffession = () => {
  return (
    <div className="w-auto flex flex-col flex-wrap justify-center">
      <div className="flex flex-col items-center justify-center">
        <p className="text-8xl font-extrabold text-orange-500 text-center">
          <span className="text-center">Hi!</span>
          <br />I am Karan Bhatt.
        </p>
        <br/>
        <Github />
        <br/>
        <p className="text-yellow-400 text-2xl font-serif text-justify p-4">
          Self Motivated, curious and passionate individual about tech. I am
          student persuing my Bachelors in computer science and engineering from
          Graphic Era Hill University. I Know Java, Python, JavaScript. I am
          open and curious about learning new technologies and contribute my
          best service to anyone whom i deseve.
        </p>
      </div>
      <h1 className="mediaquery bg-yellow-900 text-white text-5xl m-4 p-4 text-center rounded-full w-max">
        I am a Developer
      </h1>
      <section className="self-center flex flex-row gap-5">
        <a href="https://github//users/karanbhatt1/">
          <IoLogoGithub className="text-white text-5xl" />{" "}
        </a>
        <a href="">
          <IoLogoLinkedin className="text-white text-5xl" />{" "}
        </a>
        <a href="">
          <IoLogoInstagram className="text-white text-5xl" />{" "}
        </a>
      </section>
    </div>
  );
};

export default Proffession;
