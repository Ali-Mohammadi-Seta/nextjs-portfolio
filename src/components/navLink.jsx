"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathName = usePathname();
  


  return (
    <Link 
      className={`rounded p-1 ${pathName === link.url ? "bg-yellow-900 text-white transition-colors duration-300 ease-in-out" : ""}`} 
      href={link.url} 
      key={link.title}
    >
      {link.title}
    </Link>
  );
};

export default NavLink