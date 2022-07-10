import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { links } from "../../data/dataLinks";
import { Link } from "react-scroll";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(!toggle);
  };

  const requireToggle = toggle ? <FaTimes size={30} /> : <FaBars size={30} />;

  // Links Desktop
  const requireLinksDesktop = links.map(({ id, link, to }) => (
    <li
      key={id}
      className="px-4 font-medium text-gray-300 capitalize duration-200 cursor-pointer hover:scale-105"
    >
      <Link to={to} smooth duration={500} spy={true} exact="true" offset={-80}>
        {link}
      </Link>
    </li>
  ));

  // Links Mobile
  const requireLinksMobile = links.map(({ id, link, to }) => (
    <li key={id} className="px-4 py-6 text-4xl capitalize cursor-pointer">
      <Link
        onClick={() => onToggle()}
        to={to}
        smooth
        duration={500}
        spy={true}
        exact="true"
        offset={-80}
      >
        {link}
      </Link>
    </li>
  ));

  return (
    <>
      <div className="fixed z-10 flex items-center justify-between w-full h-20 px-4 text-white bg-black">
        <div>
          <h1 className="ml-2 text-2xl">Pedrodev</h1>
        </div>
        <ul className="hidden md:flex">{requireLinksDesktop}</ul>
        {/*----- mobile ----*/}
        <div
          className="z-10 pr-4 cursor-pointer md:hidden"
          onClick={() => onToggle()}
        >
          {requireToggle}
        </div>
        {toggle && (
          <ul className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen text-gray-300 bg-gradient-to-b from-black to-gray-800">
            {requireLinksMobile}
          </ul>
        )}
      </div>
      <div className="h-20"></div>
    </>
  );
};
