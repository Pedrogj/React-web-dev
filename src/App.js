import { About } from "./components/about/About";
import { Experience } from "./components/experience/Experience";
import { Home } from "./components/home/Home";
import { Navbar } from "./components/navbar/Navbar";
import { Portfolio } from "./components/portfolio/Portfolio";
import { SocialLinks } from "./components/socilaLinks/SocialLinks";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <SocialLinks />
      <About />
      <Portfolio />
      <Experience />
    </>
  );
}

export default App;
