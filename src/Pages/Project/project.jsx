import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';


const Project = () => {
    return (
        <section name='project' className='mt-20 mb-20'> 
            <div className="container mx-auto">
                <div className='flex place-content-center'>
                    <h1 className="pl-2 text-3xl mb-10 font-bold border-l-8
                             border-blue-400 md:text-5xl font-jost text-white">
                        Showcasing MY Project&apos;s
                    </h1>
                </div>

                {/* Projects */}
                <div className='mb-2'>
                    <Swiper
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >

                        <SwiperSlide>                      
                                <div className='m-4'>
                                    <img src="https://images2.imgbox.com/e0/06/OcjMXlqq_o.png" alt="showcase01" />
                                <div className='absolute lg:text-3xl text-xl text-black font-jost 
                                    
                                    border-l-4 border-primary   text-left pl-4
                                 lg:-mt-28 md:-mt-[480px]  -mt-14 ml-2 md:ml-8'>
                                        <p>Share plate </p>
                                    <p className='lg:text-2xl text-lg hidden md:block'> Connecting Communities Through Food Platform </p>
                                        <div className='flex gap-5 '>
                                        <Link to='https://share-plate-1d8b2.web.app/' > <p className='lg:text-2xl text-lg underline'>Live Link</p></Link> |
                                        <Link to='https://github.com/Shabnaz21/Community-Food-Sharing-Platform-Frontend'>
                                            <p className='lg:text-2xl text-lg underline'>Code Link</p></Link>
                                      </div>
                                    </div>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide>
                                <div className='m-4'>
                                    <img src="https://images2.imgbox.com/03/e9/riFrql0p_o.png" alt="showcase02" />
                                <div className='absolute  text-black font-jost lg:text-3xl text-xl border-l-4 border-primary   text-left pl-4
                                    lg:-mt-28 md:-mt-[480px]  -mt-14 ml-2 md:ml-8'>
                                    <p>ZenFitEscapes </p>
                                    <p className='lg:text-2xl text-lg hidden md:block'>Fitness Retreats Website </p>
                                        <div className='flex gap-5 '>
                                        <Link to='https://yoga-and-fitness-retreat-e3434.web.app/' > <p className='lg:text-2xl text-lg underline'>Live Link</p></Link> |
                                        <Link to='https://github.com/Shabnaz21/Yoga-and-Fitness-Retreats-Project'>
                                            <p className='lg:text-2xl text-lg underline'>Code Link</p></Link>
                                        </div>
                                    </div>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide>
                                <div className='m-4'>
                                    <img src="https://images2.imgbox.com/05/77/kJkZ6GYx_o.png" alt="showcase03" />
                                <div className='absolute text-black font-jost lg:text-3xl text-xl border-l-4 border-primary   text-left pl-4
                                    lg:-mt-28 md:-mt-24 -mt-14 ml-2 md:ml-8'>
                                    <p>Sport Capsule </p>
                                    <p className='lg:text-2xl text-lg hidden md:block'>Fashion E-commerce Website</p>
                                    <div className='flex gap-5 '>
                                        <Link to='https://sport-capsule.web.app/' > <p className='lg:text-2xl text-lg underline'>Live Link</p></Link> |
                                        <Link to='https://github.com/Shabnaz21/Sport-Capsule-FrontEnd'>
                                            <p className='lg:text-2xl text-lg underline'>Code Link</p></Link>
                                    </div>
                                </div>
                                </div>
                     
                        </SwiperSlide>
                        <SwiperSlide>
                                <div className='m-4'>
                                    <img src="https://images2.imgbox.com/72/ad/zZg12k21_o.png" alt="showcase04" />
                                <div className='absolute text-black font-jost lg:text-3xl text-xl border-l-4 border-primary   text-left pl-4
                                    lg:-mt-28 md:-mt-24 -mt-14 ml-2 md:ml-8 '>
                                        <p> NewVilla</p>
                                    <p className='lg:text-2xl text-lg hidden md:block'> Online Real estate selling Platform</p>
                                        <div className='flex gap-5 '>
                                        <Link to='https://newvilla-c8d31.firebaseapp.com/'> <p className='lg:text-2xl text-lg underline'>Live Link -1</p></Link> |
                                        <Link to='https://newvilla.surge.sh'> <p className='lg:text-2xl text-lg underline'>Live Link -2</p></Link> |
                                            <Link to='https://github.com/Shabnaz21/Real-estate-Platform-Client-Side'>
                                            <p className='lg:text-2xl text-lg underline'>Code Link</p></Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                        
                    </Swiper>
                </div>

            </div>

        </section>
    );
};

export default Project;