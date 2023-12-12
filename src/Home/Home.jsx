import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact/Contact";
import Education from "./Education";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";


const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Education/>
            <Skills/>
            <Projects/>
            <Contact/>
        </div>
    );
};

export default Home;