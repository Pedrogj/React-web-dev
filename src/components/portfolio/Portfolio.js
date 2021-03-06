import { project } from "../../data/dataPortfolio";

export const Portfolio = () => {
  const projects = project.map(({ alt, code, demo, id, img, name }) => (
    <div key={id} className="rounded-lg shadow-md shadow-gray-600">
      <img src={img} alt={alt} className="rounded-t-lg" />
      <p className="px-4 py-3 font-bold">{name}</p>
      <div className="flex items-center justify-center">
        <a
          href={demo}
          target="_blank"
          rel="noreferrer"
          className="w-1/2 px-6 py-3 m-4 text-center text-white duration-200 bg-indigo-500 rounded-md cursor-pointer hover:scale-105"
        >
          Demo
        </a>
        <a
          href={code}
          target="_blank"
          rel="noreferrer"
          className="w-1/2 px-6 py-3 m-4 text-center text-white duration-200 bg-indigo-500 rounded-md cursor-pointer hover:scale-105"
        >
          Code
        </a>
      </div>
    </div>
  ));

  return (
    <div name="portfolio" className="w-full py-20 bg-neutral-100">
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto">
        <div className="pb-8">
          <p className="inline text-4xl font-bold border-b-4 border-gray-700">
            Portfolio
          </p>

          <div className="grid gap-8 px-2 mt-10 sm:grid-cols-2 md:grid-cols-3">
            {projects}
          </div>
        </div>
      </div>
    </div>
  );
};
