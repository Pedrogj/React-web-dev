import { link } from "./dataLinkSocial";

export const SocialLinks = () => {
  const requireLinks = link.map(({ id, child, href }) => (
    <li
      key={id}
      className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-indigo-500"
    >
      <a
        href={href}
        className="flex items-center justify-between w-full text-white"
        target="_blank"
        rel="noreferrer"
      >
        {child}
      </a>
    </li>
  ));

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>{requireLinks}</ul>
    </div>
  );
};
