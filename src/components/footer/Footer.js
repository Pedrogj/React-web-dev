export const Footer = () => {
  const year = new Date();
  const currentYear = year.getFullYear();

  return (
    <div className="flex items-center justify-center h-20 bg-black text-white">
      <span className="text-lg">Pedrodev, {currentYear}</span>
    </div>
  );
};
