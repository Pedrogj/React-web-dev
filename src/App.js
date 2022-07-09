import { Experience } from "./components/experience/Experience";
import { Footer } from "./components/footer/Footer";
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
      <Experience />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
