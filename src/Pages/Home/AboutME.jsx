import { BsPersonWorkspace } from "react-icons/bs";
import { GiGraduateCap } from "react-icons/gi";

const AboutME = () => {
    return (
        <>
            <section name="about"  className="flex items-center py-10 bg-base-200 xl:h-screen font-poppins dark:bg-gray-800 ">
                <div className="justify-center flex-1 max-w-7xl py-4 mx-auto lg:py-6 md:px-6">
                    <div className="flex flex-wrap items-center ">
                        <div className="w-full px-4 mb-10 lg:w-2/5 lg:mb-0">
                            <img src="https://images2.imgbox.com/c8/e0/7CaHKOdh_o.png" alt="" />
                        </div>
                        <div className="w-full px-4 mb-10 lg:w-3/5 lg:mb-0 ">
                            <h1 className="pl-2 text-5xl font-bold border-l-8
                             border-blue-400 md:text-5xl text-white">
                             About Me
                            </h1>
                            <p className="mt-6 mb-10 text-base leading-7 text-gray-400">
                                As a Front-End Developer with expertise in Back-End development, I want to contribute to a dynamic team. I can build attractive and user-friendly websites with my strong HTML, CSS, and JavaScript foundation. My commitment to staying current with industry trends and technologies ensures innovative solutions. I am driven by the desire to enhance user experiences through seamless website functionality. My goal to develop my skills as a
                                Front-End Developer and expand my knowledge in Back-End development as I pursue a rewarding career.
                            </p>
                            <div className='flex place-content-center'>
                                <div role="tablist" className="tabs tabs-bordered max-w-[920px] container mx-auto ">
                                    <input type="radio" name="my_tabs_1" role="tab" className="tab text-lg font-jost" aria-label="Education" />
                                    <div role="tabpanel" className="tab-content p-10">
                                        <div className="space-y-8 relative before:absolute 
                            before:inset-0 before:ml-5 before:-translate-x-px
                            md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                                            <div className="relative flex items-center 
                                justify-between md:justify-normal md:odd:
                                flex-row-reverse group is-active">
                                                <div className=" items-center justify-center w-10 h-10 rounded-full border
                             border-white  bg-[#5394CF] text-slate-500
                              group-[.is-active]:text-emerald-50 shadow shrink-0 hidden md:flex
                              md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                                    <GiGraduateCap className='text-3xl'></GiGraduateCap>
                                                </div>
                                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]
                             p-4 rounded border border-slate-200 shadow">
                                                    <div className="flex items-center justify-between space-x-2 mb-1">
                                                        <p className="font-bold">Bachelor of Pharmacy </p>
                                                        <p className="font-semibold text-center">2016-2020</p>
                                                    </div>
                                                    <div >
                                                        Gono Bishwabidyalay
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="relative flex items-center justify-between 
                        md:justify-normal md:odd:flex-row-reverse group is-active">

                                                <div className="flex items-center justify-center w-10 h-10 rounded-full border
                             border-white  bg-[#5394CF] text-slate-500
                              group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1
                              md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                                    <GiGraduateCap className='text-3xl'></GiGraduateCap>
                                                </div>
                                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]  
                                                p-4 rounded border border-slate-200 shadow">
                                                    <div className="flex items-center justify-between space-x-2 mb-1">
                                                        <p className="font-bold ">H.S.C (Science)</p>
                                                        <p className="font-semibold text-center">2014-2015</p>
                                                    </div>
                                                    <div >
                                                        BEPZA Public School & College, Savar
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="relative flex items-center justify-between 
                        md:justify-normal md:odd:flex-row-reverse group is-active">
                                                <div className="flex items-center justify-center w-10 h-10 rounded-full border
                             border-white  bg-[#5394CF] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                                    <GiGraduateCap className='text-3xl'></GiGraduateCap>
                                                </div>
                                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] text-white p-4 
                            rounded border border-slate-200 shadow">
                                                    <div className="flex items-center justify-between space-x-2 mb-1">
                                                        <p className="font-bold text-center">S.S.C (Science)</p>
                                                        <p className="font-semibold text-center">2012-2013</p>
                                                    </div>
                                                    <div className="">
                                                        BEPZA Public School & College, Savar
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* experience */}
                                    <input type="radio" name="my_tabs_1" role="tab" className="tab text-lg font-jost"
                                        aria-label="Experience" checked />
                                    <div role="tabpanel" className="tab-content p-10">
                                        <div className="space-y-8 relative before:absolute 
                            before:inset-0 before:ml-5 before:-translate-x-px
                            md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                                            <div className="relative flex items-center 
                                justify-between md:justify-normal md:odd:
                                flex-row-reverse group is-active">
                                                <div className=" hidden md:flex items-center justify-center w-10 h-10 rounded-full border
                             border-white  bg-[#5394CF] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                                    <BsPersonWorkspace className='text-2xl'></BsPersonWorkspace>
                                                </div>
                                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]
                             p-4 rounded ">
                                                    <div className="flex items-center justify-between space-x-2 mb-1">
                                                        <p className="font-bold text-xl">Search Engine Optimizer</p>
                                                    </div>
                                                    <div >
                                                        3+ Years Experience
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="relative flex items-center justify-between 
                        md:justify-normal md:odd:flex-row-reverse group is-active">

                                                <div className="flex items-center justify-center w-10 h-10 rounded-full border
                             border-white  bg-[#5394CF] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                                    <BsPersonWorkspace className='text-2xl'></BsPersonWorkspace>
                                                </div>
                                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]
                             p-4 rounded ">
                                                    <div className="flex items-center justify-between space-x-2 mb-1">
                                                        <p className="font-bold text-xl">Freelance Content Writer</p>
                                                    </div>
                                                    <div >
                                                        2+ Years Experience
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="relative flex items-center justify-between 
                        md:justify-normal md:odd:flex-row-reverse group is-active">
                                                <div className="flex items-center justify-center w-10 h-10 rounded-full border
                             border-white  bg-[#5394CF] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                                    <BsPersonWorkspace className='text-2xl'></BsPersonWorkspace>
                                                </div>
                                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]
                             p-4 rounded ">
                                                    <div className="flex items-center justify-between space-x-2 mb-1">
                                                        <p className="font-bold text-xl">Wordpress Website Design</p>
                                                    </div>
                                                    <div >
                                                        2+ Years Experience
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutME;