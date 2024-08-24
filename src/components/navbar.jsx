"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import NavLink from "./navLink";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Homepage" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      when: "beforeChildren",
      transition: { staggerChildren: 0.3 },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
      
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      <div name="Logo" className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link href="/">
          <div className=" text-sm rounded-md p-1 flex gap-3 bg-black font-semibold">
            <h className=" bg-black text-white">Ali</h>
            <div>
            <h className=''>Mohammadi</h>
            </div>
          </div>
        </Link>
      </div>
      
      <div name="whole menu" className="md:hidden">
        <div name="button">
          <button className="z-50 relative" onClick={() => setOpen(!open)}>
           {open ? <IoMdClose size={30}/> : <FiMenu size={30} /> } 
          </button>
          {open && (
            <motion.div 
              variants={listVariants} 
              initial="closed" 
              animate="opened"
              name="menu"
              className="absolute top-0 left-0 h-screen w-screen bg-yellow-900 flex flex-col items-center justify-center gap-8 text-4xl z-40"
            >
              {links.map((link) => (
                <motion.div 
                  key={link.title} 
                  variants={listItemVariants}
                  onClick={() => setOpen(false)}
                >
                  <NavLink link={link} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
