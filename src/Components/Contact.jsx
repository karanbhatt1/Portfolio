import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import "../Styles/contact.css"
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendViaEmail() {
    const messageb = `Hello hope you find this mail in your good time.\n${message}`;
    const encodedSubject = encodeURIComponent(name);
    const encodedMessage = encodeURIComponent(messageb);
    const mailtoLink = `mailto:karanbhatt@gmail.com?subject=${encodedSubject}&body=${encodedMessage}`;
    window.location.href = mailtoLink;
  }

  function openEmail() {
    window.location.href = `mailto:karanbhatt@gmail.com`;
  }
  function openGithub() {
    window.open(`https://github.com/karanbhatt1`, "_blank");
  }
  function openLinkdin() {
    window.open(`https://www.linkedin.com/in/karan-bhatt-8542aa260`, "_blank");
  }
  function sendViaWhatsapp() {
    let con = 8267894456;
    if (message === "" || name === "" || email === "") {
      let durl = `https://wa.me/${con}`;
      window.open(durl, "_blank");
      return;
    }
    const messageBody = `Name: ${name}\nEmail:${email}\n${message}`;
    const encodedMessage = encodeURIComponent(messageBody);
    if (message === "" || name === "" || email === "") {
      openEmail();
      return;
    }
    let url = `https://wa.me/${con}?text=${encodedMessage}`;
    window.open(url, "_blank").focus();
  }
  return (
    <div id="contact" className="p-3 cttc w-8/12  bg-amber-300/60 rounded-md self-start">
      <form className="flex flex-col gap-3 justify-center">
        <label
          htmlFor="name"
          className="text-center text-Black font-extrabold m-0 p-0 text-2xl"
        >
          Name
        </label>
        <input
          className="text-black p-2 border-black border-solid border-2 rounded-md"
          id="name"
          type="text"
          placeholder="FeedBack"
          name="title_name"
          value={name}
          onChange={(e) => {
            const currval = e.target.value;
            setName(currval);
            console.log(currval);
          }}
        />
        <label htmlFor="email" className="text-center text-xl font-extrabold">
          Email
        </label>
        <input
          type="email"
          placeholder="abc@gmail.com"
          name="email"
          id="email"
          value={email}
          className="p-2 border-black border-solid border-2 rounded-md"
          onChange={(e) => {
            console.log(e.target.value);
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="message" className="text-center text-xl font-extrabold">
          Message
        </label>
        <textarea
          className="p-2 text-wrap text-xl text-justify border-black border-solid border-2 rounded-md"
          placeholder="Write your Message"
          name="message"
          id="message"
          value={message}
          onChange={(e) => {
            const currmeassage = e.target.value;
            setMessage(currmeassage);
          }}
        ></textarea>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            type="button"
            className="flex flex-row gap-2 items-center justify-center outline-none p-2 cursor-pointer bg-blue-700 rounded-xl  text-white"
            onClick={sendViaEmail}
          >
            <CiMail className="inline font-extrabold text-3xl" />
            Send via Mail
          </button>
          <button
            type="button"
            className="font-serif cursor-pointer flex flex-row justify-center items-center gap-2 outline-none text-xl p-2 bg-green-700  hover:bg-green-500 rounded-xl text-center text-black"
            onClick={sendViaWhatsapp}
          >
            <FaWhatsapp className="text-center inline" />
            Send via WhatsApp
          </button>
        </div>
        <h3 className="text-xl font-extrabold text-center m-0 p-0">
          Connect Via
        </h3>
        <div className=" flex flex-row gap-3 m-auto">
          <button type="button" onClick={openEmail}>
            <CiMail className="font-extrabold text-5xl " />
          </button>
          <button type="button" onClick={openLinkdin}>
            <FaLinkedin className="text-black text-5xl" />
          </button>
          <button type="button" onClick={openGithub}>
            <IoLogoGithub className="text-black text-5xl" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
