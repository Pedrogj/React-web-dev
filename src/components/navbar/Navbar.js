import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { links } from "../navbar/dataLinks";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(!toggle);
  };

  const requireToggle = toggle ? <FaTimes size={30} /> : <FaBars size={30} />;

  // Links Desktop
  const requireLinksDesktop = links.map(({ id, link }) => (
    <li
      key={id}
      className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200"
    >
      {link}
    </li>
  ));

  // Links Mobile
  const requireLinksMobile = links.map(({ id, link }) => (
    <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
      {link}
    </li>
  ));

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <h1 className="text-2xl ml-2">Pedrodev</h1>
      </div>
      <ul className="hidden md:flex">{requireLinksDesktop}</ul>
      {/*----- mobile ----*/}
      <div
        className="cursor-pointer pr-4 z-10 md:hidden"
        onClick={() => onToggle()}
      >
        {requireToggle}
      </div>
      {toggle && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-300">
          {requireLinksMobile}
        </ul>
      )}
    </div>
  );
};
