import Banner from "./Banner";
import Education from "./Education";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";


const Home = () => {
    return (
        <div>
            <Banner/>
            <Education/>
            <Skills/>
            <Projects/>
        </div>
    );
};

export default Home;