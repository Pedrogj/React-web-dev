import { HiArrowNarrowRight } from "react-icons/hi";
import imgProfile from "../../images/profile.jpg";

export const Home = () => {
  return (
    <div name="home" className="h-screen w-full ">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold">
            I'm a Frontend Developer
          </h2>
          <p className="py-4 max-w-md">
            I have 3 years of experience building and desgsining software.
            Currently, I love to work on web aplication using technologies like
            ReactJs, Redux, NextJs, Firebase and GraphQL
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-indigo-500 cursor-pointer">
              Portfolio{" "}
              <span className="group-hover:rotate-90 duration-300 ml-2">
                <HiArrowNarrowRight size={20} />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            className="rounded-2xl mx-auto w-2/3 md:w-full"
            src={imgProfile}
            alt="img profile"
          />
        </div>
      </div>
    </div>
  );
};
