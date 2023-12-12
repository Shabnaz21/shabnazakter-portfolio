const Skill = () => {
    return (
        <section name= 'skill'>
            <div className="container mx-auto bg-neutral mt-28"> 
                <div className="">
                    <div className="flex lg:px-10 py-24 px-5 gap-x-10 xl:flex-row 
                    flex-col items-center">
                        
                        <div
                            className="
                            flex flex-col md:items-start md:text-left mb-16
                            lg:mb-20 md:mb-0  text-center">
                            
                            <h1 className="pl-2 text-3xl  font-bold border-l-8
                             border-blue-400 md:text-5xl font-jost mb-6 text-white">
                                Let’s Explore Programming Skills
                            </h1>
                            {/* <p className="text-lg max-w-lg">Check out my portfolio to see my experience with a
                                variety of programming languages and technologies</p> */}
                           
                        </div>
                        <div className="lg:max-w-2xl  lg:w-full md:mt-10 w-5/6">
                            <div className=" lg:flex gap-x-10 ">
                                <div className="space-y-4">
                                    {/* cards-1 */}
                                    <div className="card  bg-base-100 hover:border-2 
                                hover:border-primary shadow-xl rounded-lg w-72  block p-4">
                                        <div className="flex items-center gap-2">
                                            <img className="w-10 h-10"
                                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png" alt="" />
                                            <div className="w-full h-4 bg-gray-400 rounded-full">
                                                <div className="w-11/12 h-full text-center text-xs
                                             text-white bg-violet-500 rounded-full"> 95%
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* cards-2 */}
                                    <div className="card  bg-base-100 hover:border-2 
                                hover:border-primary shadow-xl rounded-lg w-72  block p-4">
                                        <div className="flex items-center gap-2">
                                            <img className="w-10 h-10"
                                                src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3256505/file-type-css-icon-md.png" alt="" />
                                            <div className="w-full h-4 bg-gray-400 rounded-full">
                                                <div className="w-10/12 h-full text-center text-xs
                                             text-white bg-violet-500 rounded-full"> 85%
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* cards-3 */}
                                    <div className="card  bg-base-100 hover:border-2 
                                hover:border-primary shadow-xl rounded-lg w-72  block p-4">
                                        <div className="flex items-center gap-2">
                                            <img className="w-14 h-10"
                                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png" alt="" />

                                            <div className="w-full h-4 bg-gray-400 rounded-full">
                                                <div className="w-10/12 h-full text-center text-xs
                                             text-white bg-violet-500 rounded-full">88%
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    {/* cards-4 */}
                                    <div className="card  bg-base-100 hover:border-2 
                                hover:border-primary shadow-xl rounded-lg w-72  block p-4">
                                        <div className="flex items-center gap-2">
                                            <img className="w-10 h-10"
                                                src="https://2ality.com/2011/10/logo-js/js.jpg" alt="" />
                                            <div className="w-full h-4 bg-gray-400 rounded-full">
                                                <div className="w-10/12 h-full text-center text-xs
                                             text-white bg-violet-500 rounded-full">70%
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* cards-5 */}
                                    <div className="card  bg-base-100 hover:border-2 
                                hover:border-primary shadow-xl rounded-lg w-72  block p-4">
                                        <div className="flex items-center gap-2">
                                            <img className="w-12 h-10"
                                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png" alt="" />
                                            <div className="w-full h-4 bg-gray-400 rounded-full">
                                                <div className="w-9/12 h-full text-center text-xs
                                             text-white bg-violet-500 rounded-full"> 75%
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* cards-6 */}
                                    <div className="card  bg-base-100 hover:border-2 
                                hover:border-primary shadow-xl rounded-lg w-72  block p-4">
                                        <div className="flex items-center gap-2">
                                            <img className="w-10 h-10"
                                                src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png" alt="" />
                                            <div className="w-full h-4 bg-gray-400 rounded-full">
                                                <div className="w-1/2 h-full text-center text-xs
                                             text-white bg-violet-500 rounded-full">50%
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
    );
};

export default Skill;