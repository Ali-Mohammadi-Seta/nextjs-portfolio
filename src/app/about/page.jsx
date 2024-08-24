"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll lg:flex items-center">
        <div
          name="text"
          className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 "
        >
          <div
            name="bio"
            className="flex flex-col gap-12 justify-center lg:pt-80"
          >
            <h1 className="font-bold text-2xl"> Meet Ali Mohammadi</h1>
            <p className="text-lg  pt-6">
              I'm a Frontend Developer and Web Designer with a Bachelor's Degree
              in Computer Science. My journey is driven by a love for learning
              and a commitment to mastering new skills. From personal projects
              to professional development, I’m dedicated to pushing the
              boundaries of what’s possible and always excited about what’s
              next.
            </p>
            <div className="flex justify-start gap-10 text-purple-600">
              <a
                href="https://www.linkedin.com/in/ali-mohammadi-seta"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin size={30} />
              </a>
              <a
                href="mailto:alimohammadiseta2@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HiOutlineMail size={30} />
              </a>
              <a
                href="https://www.instagram.com/alimohammadiseta"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram size={30} />
              </a>
              <a
                href="https://github.com/Ali-Mohammadi-Seta"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={30} />
              </a>
            </div>{" "}
          </div>

          <div
            name="skill"
            className="flex flex-col gap-12 justify-center pt-10"
          >
            <h1 className="font-bold text-2xl">Skills</h1>
            <div className="flex  gap-4 flex-wrap">
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaSctipt
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                HTML
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                CSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                ReactJs
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                NextJs
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TailWindCSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                axios
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                git
              </div>
            </div>
          </div>
        </div>
        <div
          name="img"
          className="hidden md:flex items-center pb-54 justify-center mx-auto object-center  w-[3000px]"
        >
          <img src="/Portfolio.gif" alt="/" height={1000} width={1000} className=""/>
          
  
        </div>
      </div>
      
    </motion.div>
  );
};

export default About;
