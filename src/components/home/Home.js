import { HiArrowNarrowRight } from "react-icons/hi";
import imgProfile from "../../images/profile.jpg";
import { Link } from "react-scroll";

export const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-neutral-100">
      <div className="flex flex-col items-center justify-center h-full max-w-screen-lg px-4 mx-auto md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl font-bold sm:text-7xl">
            I'm a Frontend Developer
          </h2>
          <p className="max-w-md py-4 font-bold">
            I have 3 years of experience building and desgsining software.
            Currently, I love to work on web aplication using technologies like
            ReactJs, Redux, NextJs, Firebase and GraphQL and many more.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              className="flex items-center px-6 py-3 my-2 text-white bg-indigo-500 rounded-md cursor-pointer group w-fit"
            >
              Portfolio{" "}
              <span className="ml-2 duration-300 group-hover:rotate-90">
                <HiArrowNarrowRight size={20} />
              </span>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center h-full">
          <img
            className="w-2/3 mx-auto rounded-2xl md:w-full "
            src={imgProfile}
            alt="img profile"
          />
        </div>
      </div>
    </div>
  );
};
