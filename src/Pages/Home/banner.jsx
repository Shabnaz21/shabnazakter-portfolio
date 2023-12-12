import Typewriter from "typewriter-effect";
import { FaDownload } from "react-icons/fa6";
import { saveAs } from 'file-saver';

const Banner = () => {
    const handleDownload = () => {
        const pdfUrl = 'https://shabnazresume.tiiny.site/';

        saveAs(pdfUrl, 'ShabnazResume.pdf');
    };


    return (
        <section name="hero" className="py-8 z-10 ">
            <div className="flex flex-col 
            md:flex-row items-center container gap-20 px-6 py-8 mx-auto">
                <div className="w-full md:w-1/2 py-8">
                    <div className="text-[#4A95C9] 
                    animate-typing text-5xl
                    lg:text-7xl font-semibold font-montserrat 
                    leading-none tracking-tighter mb-5
                    ">
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("Hi there, I'm Shabnaz Akter")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("Welcome You in My Portfolio,")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("I am Passionate Front-End Developer.")
                                    .start();
                            }}
                        />
                    </div>
                    <div className="mt-8 items-center">
                        <button className="btn btn-success" onClick={handleDownload}>
                            <FaDownload className="text-xl" />
                            <p>Download Resume</p>
                        </button>
                    </div>
                </div>
                <div className="lg:w-3/5 hidden py-8 lg:flex lg:place-content-center">
                    <img src="https://images2.imgbox.com/ae/f5/MP1VB5w4_o.png"
                        className="z-10 lg:w-3/5  hidden h-full bg-[#5394CF] 
                            rounded-bl-[300px] rounded-br-[300px] rounded -bottom-6 right-6 lg:block">

                    </img>
                </div>
            </div>
        </section>

    );
};

export default Banner;