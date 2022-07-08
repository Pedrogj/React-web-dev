export const Footer = () => {
  const year = new Date();
  const currentYear = year.getFullYear();

  return (
    <div className="flex items-center justify-center h-20 bg-neutral-100">
      <span className="text-lg font-bold">Pedrodev, {currentYear}</span>
    </div>
  );
};
