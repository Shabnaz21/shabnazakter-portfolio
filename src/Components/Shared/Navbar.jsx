import { Link } from 'react-scroll';
const Navbar = () => {
    const handleSetActive = (to) => {
        console.log(to);
    };

    const menu = <>
        <li><Link 
            to='hero'
            activeClass="active"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={handleSetActive}

            className={({ isActive }) =>
                isActive ? 'btn bg-[#5394CF] border-0 text-lg hover:bg-[#029D94] btn-md font-jost text-white'
                    : 'btn-neutral text-lg'
            }
        
        >Home</Link></li>
        <li><Link
            to='about'
            activeClass="active"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={handleSetActive}


            className={({ isActive }) =>
                isActive ? 'btn bg-[#5394CF] border-0 text-lg hover:bg-[#029D94] btn-md font-jost text-white'
                    : 'btn-neutral text-lg'
            }
        >About Me</Link></li>
        <li><Link
            to='skill'
            activeClass="active"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={handleSetActive}


            className={({ isActive }) =>
                isActive ? 'btn bg-[#5394CF] border-0 text-lg hover:bg-[#029D94] btn-md font-jost text-white'
                    : 'btn-neutral text-lg'
            }
        >Skill</Link></li>
        <li><Link
            to='project'
            activeClass="active"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={handleSetActive}

            className={({ isActive }) =>
                isActive ? 'btn bg-[#5394CF] border-0 text-lg hover:bg-[#029D94] btn-md font-jost text-white'
                    : 'btn-neutral text-lg'
            }
        >Showcase</Link></li>
        <li><Link
            to='contact'
            activeClass="active"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={handleSetActive}

            className={({ isActive }) =>
                isActive ? 'btn bg-[#5394CF] border-0 text-lg hover:bg-[#029D94] btn-md font-jost text-white'
                    : 'btn-neutral text-lg'
            }
        >Contact Me</Link></li>
        
    </>
    return (
        <section>
            <div className="container mx-auto p-5">
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm text-xl font-jost dropdown-content gap-y-2
                            mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {menu}
                            </ul>
                        </div>
                        <a className="font-jost text-3xl tracking-widest text-white">Shabnaz</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-2 gap-x-6 font-jost uppercase text-lg">
                           {menu}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <p onClick={() => window.location = 'mailto:shabnaz608@gmail.com'}
                            className="btn bg-[#5394CF] border-0 text-md
                        hover:bg-[#029D94] font-jost  text-white">LET&apos;S TALK</p>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default Navbar;