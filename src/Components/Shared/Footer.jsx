import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
const Footer = () => {
    return (
        <section className="bg-neutral">
            <div className="container mx-auto">
                <footer className="footer items-center p-4  text-neutral-content">
                    <aside className="items-center grid-flow-col text-xl">
                        <p>© Shabnaz 2023 Copyright - All right reserved</p>
                    </aside>
                    <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                        <Link to='https://github.com/Shabnaz21'>
                            <FaGithub className="text-2xl" /> 
                        </Link>
                        <Link to='https://www.linkedin.com/in/shabnaz-akter'> <FaLinkedin className="text-2xl" />
                        </Link>
                        <Link to='https://twitter.com/shabnaz21'> <FaTwitter className="text-2xl" />
                        </Link>
                    </nav>
                </footer> 
            </div>
        </section>
    );
};

export default Footer;