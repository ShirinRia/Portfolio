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
           <div className="mx-4 md:mx-8 lg:mx-auto">
           <About/>
            <Education/>
            <Skills/>
            <Projects/>
            <Contact/>
           </div>
        </div>
    );
};

export default Home;