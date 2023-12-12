import Education from "../Education/Education";
import Project from "../Project/project";
import AboutME from "./AboutME";
import Contact from "./Contact";
import Skill from "./Skill";
import Banner from "./banner";

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <AboutME></AboutME>
            {/* <Education></Education> */}
            <Skill></Skill>
            <Project></Project>
            <Contact></Contact>
        </>
    );
};

export default Home;