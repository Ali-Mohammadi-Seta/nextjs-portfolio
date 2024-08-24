"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const Portfolio = () => {
  const items = [
    {
      id: 1,
      color: "from-red-300 to-blue-300",
      title: "Food Ordering Website",
      desc: "A sleek and modern food ordering site built with React and Tailwind. It features responsive design and handy filter buttons, making it super easy for users to find and order their favorite meals.",
      img: "/Food.png",
      link: "https://alifood-react.vercel.app/",
      code:"https://github.com/Ali-Mohammadi-Seta/TailwindCSS-ReactJS_Food"
    },
    {
      id: 2,
      color: "from-blue-300 to-violet-300",
      title: "React Crypto",
      desc: "Track your favorite cryptocurrencies on this responsive React app, styled with Tailwind. It’s equipped with a functional search bar and fetches data from the CoinGecko API to keep you up-to-date with the latest market trends.",
      img: "/Crypto.png",
      link: "https://alicrypto-react.vercel.app/",
      code:"https://github.com/Ali-Mohammadi-Seta/TailwindCSS-ReactJS_Crypto"
    },
    {
      id: 3,
      color: "from-violet-300 to-purple-300",
      title: "Weather App",
      desc: "This weather app, powered by React, Tailwind, and Redux, connects to the OpenWeather API to give you real-time updates. The app also changes its theme and background based on the current weather and time of day—perfect for staying in sync with Mother Nature!",
      img: "/Weather.png",
      link: "https://weather-reduxali.vercel.app/",
      code:"https://github.com/Ali-Mohammadi-Seta/Weather_App"
    },
    {
      id: 4,
      color: "from-purple-300 to-red-300",
      title: "Clothing Store Ecommerce",
      desc: "A stylish online store for clothing, built with React and Tailwind. It features fully functional cart and product pages via React Router, data from the FakeStore API, and a handy theme switcher for browsing in style.",
      img: "/Ecommerce.png",
      link: "https://clothingecommerce-ali.vercel.app/",
      code:"https://github.com/Ali-Mohammadi-Seta/Ecommerce"
    },
  ];

  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center  text-8xl text-center">
          My Work
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex ">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color} `}
                key={item.id}
              >
                <div className="flex flex-col gap-16 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl ">{item.title}</h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-96 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="/" fill />
                  </div>
                  <p className="w-80 md:w-96 lg:w-[500px] xl:w-[600px] lg:text-lg">{item.desc}</p>
                  <div className=" flex justify-between w-80 md:w-96 lg:w-[500px] xl:w-[600px] items-center">
                  <a href={item.link} target="_blank">
                    <button className="btn">See Demo</button>
                  </a>
                  <a href={item.code} target="_blank">
                    <button className="btn">See Code</button>
                  </a></div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className=" h-screen items-center flex flex-col justify-center mx-auto">
        <h className='md:text-5xl pb-10'>Do You Need To Contact Me?</h>
        <Link href='/contact'><button className="btn">Contact Me!</button></Link>
      </div>
    </motion.div>
  );
};

export default Portfolio;
