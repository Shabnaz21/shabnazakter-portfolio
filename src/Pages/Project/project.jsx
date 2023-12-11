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
        <section>
            <div className="container mx-auto">
                <div className="mx-auto mb-[60px] max-w-[920px] text-center">
                    <p className="text-lg">|| Awesome Portfolio</p>
                    <h2 className="mb-4 text-2xl px-3 mt-2 font-bold text-white font-jost md:text-[40px]">
                       Showcasing MY Project&apos;s
                    </h2>
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
                            <Link to='/project-1' >
                                <div className='m-4'>
                                    <img src="https://images2.imgbox.com/e0/06/OcjMXlqq_o.png" alt="showcase01" />
                                    <p className='absolute text-3xl text-black font-jost  border-l-4 border-primary   text-left pl-4
                                    -mt-24 ml-8'>
                                        Share plate <br />
                                        <span className='text-2xl'> Connecting Communities Through Food Platform </span></p>
                                </div>
                            </Link>

                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to='/project-2' >
                                <div className='m-4'>
                                    <img src="https://images2.imgbox.com/03/e9/riFrql0p_o.png" alt="showcase02" />
                                    <p className='absolute text-3xl text-black font-jost  border-l-4 border-primary   text-left pl-4
                                    -mt-24 ml-8'>
                                    ZenFitEscapes <br />
                                        <span className='text-2xl'>Fitness Retreats Website </span> </p>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to='/project-3' >
                                <div className='m-4'>
                                    <img src="https://images2.imgbox.com/05/77/kJkZ6GYx_o.png" alt="showcase03" />
                                    <p className='absolute text-3xl text-black font-jost  border-l-4 border-primary   text-left pl-4
                                    -mt-24 ml-8'>
                                     Sport Capsule <br />
                                        <span className='text-2xl'>Fashion E-commerce Website</span> </p>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to='/project-4' >
                                <div className='m-4'>
                                    <img src="https://images2.imgbox.com/72/ad/zZg12k21_o.png" alt="showcase04" />
                                    <p className='absolute text-3xl text-black font-jost  border-l-4 border-primary   text-left pl-4
                                    -mt-24 ml-8'>
                                        NewVilla <br />
                                        <span className='text-2xl'> Online Real estate selling Platform</span> </p>
                                </div>
                            </Link>
                            </SwiperSlide>

                        
                    </Swiper>
                </div>

            </div>

        </section>
    );
};

export default Project;