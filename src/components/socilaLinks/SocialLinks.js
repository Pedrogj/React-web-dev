import { link } from "../../data/dataLinkSocial";

export const SocialLinks = () => {
  const requireLinks = link.map(({ id, child, href, name }) => (
    <a
      key={id}
      target="_blank"
      rel="noreferrer"
      href={href}
      className="flex justify-between text-white items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-indigo-500"
    >
      {name} {child}
    </a>
  ));

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      {requireLinks}
    </div>
  );
};
