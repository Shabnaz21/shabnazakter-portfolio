import Typewriter from "typewriter-effect";
import { FaDownload } from "react-icons/fa6";
const Banner = () => {
    return (
        <section name="hero" className="py-8 z-10 font-serif">
            <div className="flex flex-col md:flex-row items-center max-w-6xl px-6 py-8 mx-auto">
                <div className="w-full md:w-1/2 py-8">
                    <div className="text-[#4A95C9] 
                    animate-typing text-7xl font-semibold font-montserrat leading-none tracking-tighter
                    ">
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("Hi there, I'm Shabnaz Akter")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("Welcomes You in My Portfolio,")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("I am Passionate Front-End Developer.")
                                    .start();
                            }}
                        />
                    </div>
                    <div className="mt-8 items-center">
                        <button className="btn btn-success">
                            < FaDownload  className="text-xl"/>
                            <p>  Download Resume</p>
                        </button>
                    </div>
                    
                </div>
                <div className="w-full md:w-1/2 py-8">
                    <img src="https://www.svgrepo.com/show/493509/person-who-invests.svg" className="g-image"/>
                </div>
            </div>
        </section>

    );
};

export default Banner;