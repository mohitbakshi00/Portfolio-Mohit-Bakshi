import About from "./components/AboutMe";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Experience />
      <Projects/>
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
