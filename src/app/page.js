"use client";
import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0" }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col lg:flex-row h-full   sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div
          name="image"
          className=" lg:h-full  lg:w-1/2 relative items-center justify-center grid-cols-2 xl:grid-cols-3 hidden lg:grid md:pr-10"
        >
          <Image
            src="/javascript.png"
            alt="/"
            width={100}
            height={100}
            className="opacity-0 animate-fade-in animation-delay-5000  xl:pt-60"
          />
          <Image
            src="/react.png"
            alt="/"
            width={100}
            height={100}
            className="opacity-0 animate-fade-in animation-delay-6000  xl:pt-60"
          />
          <Image
            src="/next.svg"
            alt="/"
            width={100}
            height={100}
            className="opacity-0 animate-fade-in animation-delay-7000  xl:pt-60 "
          />
          <Image
            src="/tailwind.png"
            alt="/"
            width={100}
            height={100}
            className="opacity-0 animate-fade-in animation-delay-8000 xl:pb-60 "
          />
          <Image
            src="/redux.png"
            alt="/"
            width={100}
            height={100}
            className="opacity-0 animate-fade-in animation-delay-9000  xl:pb-60 "
          />
          <Image
            src="/git.png"
            alt="/"
            width={100}
            height={100}
            className="opacity-0 animate-fade-in animation-delay-10000  xl:pb-60 "
          />
        </div>
        <div
          name="text"
          className="md:ml-10 text-center flex h-screen lg:h-full lg:w-1/2 flex-col justify-center items-center md:gap-7  "
        >
          <h className="text-4xl md:text-6xl font-bold  text-start mb-5 mx-2 md:pr-8">
          Hi,  I'm Ali Mohammadi
          </h>
          <p className="md:text-xl text-left mx-2">
            I hold a Bachelor's Degree in Computer Science and specialize as a
            Frontend Developer and Web Designer. With a passion for continuous
            learning, I’m always honing my skills and exploring new
            technologies. I've worked on several personal projects and am always
            eager to dive into new challenges.
          </p>

          <div className="w-full flex  gap-4 pt-10 pb-2">
            <Link href="/portfolio">
              <button className="btn bg-black text-white rounded-lg  p-4 mr-20">
                View My Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="btn bg-white text-black hover:bg-gray-500 rounded-lg p-4">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:hidden w-screen overflow-hidden  pb-10">
  <div className="horizontal-auto-scroll flex gap-4 items-center">
    <Image src="/javascript.png" alt="/" width={80} height={80} />
    <Image src="/react.png" alt="/" width={80} height={80} />
    <Image src="/next.svg" alt="/" width={80} height={80} />
    <Image src="/tailwind.png" alt="/" width={80} height={80} />
    <Image src="/redux.png" alt="/" width={80} height={80} />
    <Image src="/git.png" alt="/" width={80} height={80} />
  </div>
</div>


      
    </motion.div>
  );
};

export default Homepage;
