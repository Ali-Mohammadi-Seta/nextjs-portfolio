"use client";

import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Contact = () => {
  

  return (
    <motion.div
      className="h-full flex  "
      initial={{ y: "-200vh" }}
      animate={{ y: "0" }}
      transition={{ duration: 1 }}
    >

<div name="auto text" className="hidden  md:flex justify-center items-center mx-auto w-1/2 ">
        <h1 className="ml-32">
          <TypeAnimation
            sequence={[
              "Say Hello! 🥰",
              1000,
          
            ]}
            wrapper="span"
            speed={500}
            style={{ fontSize: '3em', display: 'inline-block' }}
            repeat={Infinity}
           
          />
        </h1>
      </div>

      <div
        name="Contact"
        className=" h-[95vh]  flex justify-center items-center md:w-1/2  mx-auto  pt-28  "
      >
        <form
          method="POST"
          action="https://getform.io/f/awngkdxb"
          className="flex flex-col w-full max-w-[600px] xl:mr-96 "
        >
          <div className="pb-8  text-center ">
            <p className="text-4xl">
              Contact <span>Me</span>
            </p>
          </div>
          <input className=" p-2 " type="text" placeholder="Name" name="name" />
          <input
            className="my-4 p-2  "
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className=" p-2 "
            name="message"
            placeholder="Message"
            rows="10"
          ></textarea>
          <button className="btn w-52 px-4 py-3 my-8 mx-auto flex items-center">
            Send
          </button>
        </form>
      </div>
      
    </motion.div>
  );
};

export default Contact;
