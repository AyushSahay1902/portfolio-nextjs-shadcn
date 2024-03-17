"use client";
import React from 'react';
import './styles.css';
import { PinContainer } from "./ui/3D-pin";

const ContactMe = () => {
  return (
    
    <div className="w-full flex justify-center items-center h-screen p-20">
      <div className="w-3/5 mr-4">
      <h1 className="text-4xl font-bold mb-2 tracking-tight">Get In Touch!</h1>
        <form className="gradient-background shadow-md rounded p-5 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Your Message"
              rows="5"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <div className="h-[40rem] w-2/5 flex items-center justify-center ">
      <PinContainer
        title="/AyushSahay"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Patna, Bihar
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Garada!
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" >Open Map!</div>
        </div>
      </PinContainer>
    </div>
    </div>
  );
};

export default ContactMe;
