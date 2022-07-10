import { link } from "../../data/dataLinkSocial";

export const Footer = () => {
  const year = new Date();
  const currentYear = year.getFullYear();

  const requireLinks = link.map(({ id, child, href }) => (
    <a key={id} target="_blank" rel="noreferrer" href={href} className="p-2">
      {child}
    </a>
  ));

  return (
    <div className="flex items-center justify-center h-20 text-white bg-black">
      {requireLinks}
      <span className="text-lg">Pedrodev, {currentYear}</span>
    </div>
  );
};
