import { FaGithub, FaLinkedin } from "react-icons/fa";

export const link = [
  {
    id: 1,
    name: "Linkedin",
    child: (
      <>
        <FaLinkedin size={30} />
      </>
    ),
    href: "https://www.linkedin.com/in/pedrodev-web/",
  },
  {
    id: 2,
    name: "GitHub",
    child: (
      <>
        <FaGithub size={30} />
      </>
    ),
    href: "https://github.com/Pedrogj",
  },
];
