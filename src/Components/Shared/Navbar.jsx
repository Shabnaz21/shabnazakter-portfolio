import { NavLink } from "react-router-dom";

const Navbar = () => {

    const menu = <>
        <li><NavLink to='/'
            className={({ isActive }) =>
                isActive ? 'btn bg-[#5394CF] border-0 text-lg hover:bg-[#029D94] btn-md font-jost text-white'
                    : 'btn-neutral text-lg'
            }
        
        >Home</NavLink></li>
        <li><NavLink
            to ='/about'
            className={({ isActive }) =>
                isActive ? 'btn bg-[#5394CF] border-0 text-lg hover:bg-[#029D94] btn-md font-jost text-white'
                    : 'btn-neutral text-lg'
            }
        >About Me</NavLink></li>
        <li><NavLink
            to='/project'
            className={({ isActive }) =>
                isActive ? 'btn bg-[#5394CF] border-0 text-lg hover:bg-[#029D94] btn-md font-jost text-white'
                    : 'btn-neutral text-lg'
            }
        >Project</NavLink></li>
        <li><NavLink
            to='/contact'
            className={({ isActive }) =>
                isActive ? 'btn bg-[#5394CF] border-0 text-lg hover:bg-[#029D94] btn-md font-jost text-white'
                    : 'btn-neutral text-lg'
            }
        >Contact Me</NavLink></li>
        
    </>
    return (
        <section className="bg-neutral ">
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
                        <a className="btn bg-[#5394CF] border-0 text-md
                        hover:bg-[#029D94] font-jost  text-white">LET&apos;S TALK</a>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default Navbar;