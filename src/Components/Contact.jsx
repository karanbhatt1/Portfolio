import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
const Contact = () => {
  return (
    <div className="absolute top-96 p-3 bg-amber-300/60 rounded-md">
      <form action="post" className="flex flex-col gap-3 justify-center">
        <label
          htmlFor="name"
          className="text-center text-Black font-extrabold m-0 p-0 text-2xl"
        >
          Name
        </label>
        <input
          className="text-white p-2 border-black border-solid border-2 rounded-md"
          id="name"
          type="text"
          placeholder="FeedBack"
        />
        <label htmlFor="email" className="text-center text-xl font-extrabold">
          Email
        </label>
        <input
          type="text"
          placeholder="abc@gmail.com"
          name=""
          key=""
          id="email"
          className="p-2 border-black border-solid border-2 rounded-md"
        />
        <label htmlFor="message" className="text-center text-xl font-extrabold">
          Message
        </label>
        <textarea
          className="p-2 text-wrap text-xl text-justify border-black border-solid border-2 rounded-md"
          placeholder="Write your Message"
          name=""
          id=""
        ></textarea>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            class="outline-none p-2 cursor-pointer bg-black text-xl rounded-xl  text-blue-600"
          >
            Send in Mail
          </button>
          <button
            type="button"
            className="cursor-pointer flex flex-row justify-center items-center gap-2 outline-none text-xl p-2 bg-black rounded-xl text-center text-green-500"
          >
            <FaWhatsapp className="text-center inline" />
            Send in WhatsApp
          </button>
        </div>
        <h3 className="text-xl font-extrabold text-center m-0 p-0">
          Connect Using
        </h3>
        <div className="flex flex-row gap-3 m-auto">
          <button>
            <CiMail className="font-extrabold text-5xl " />
          </button>
          <button>
            <FaLinkedin className="text-black text-5xl" />
          </button>
          <button>
            <IoLogoGithub className="text-black text-5xl" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
