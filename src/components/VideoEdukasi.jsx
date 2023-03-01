// Import Swiper React
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import SampleVid from '../assets/video.webp'

import {BsFillCaretRightFill} from 'react-icons/bs'

function Video() {
    return (
        <div className=" w-full h-auto my-6 pl-6">
            <div className="flex justify-between font-semibold items-center pr-6">
                <h2 className="text-[16px] font-semibold">Video</h2>
                <a className="text-[12px] text-[#F64A4A]" href='#'>Lihat lebih</a>
            </div>
            <div className="h-[170px] w-full flex my-[10px]">
                <Swiper
                    spaceBetween={15}
                    slidesPerView={1.2}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div className='w-full h-full relative'>
                            <img src={SampleVid} alt="" className='w-full h-full object-cover rounded-lg' />
                            <div className="absolute flex inset-0 bg-gradient-to-b  to-[#9B1C1C] via-transparent from-transparent bg-cover rounded-xl items-end">
                                <BsFillCaretRightFill size={40} className= 'absolute inset-0 text-white top-14 mx-auto'/>
                                <h2 className='text-[14px] font-semibold text-white inset-0 px-3 mb-5'>Efektifitas Tampon Dalam Menggantikan Pembalut </h2>
                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className='w-full h-full relative'>
                            <img src={SampleVid} alt="" className='w-full h-full object-cover rounded-lg' />
                            <div className="absolute flex inset-0 bg-gradient-to-b  to-[#9B1C1C] via-transparent from-transparent bg-cover rounded-xl items-end">
                                <BsFillCaretRightFill size={40} className= 'absolute inset-0 text-white top-14 mx-auto'/>
                                <h2 className='text-[14px] font-semibold text-white inset-0 px-3 mb-5'>Efektifitas Tampon Dalam Menggantikan Pembalut </h2>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='w-full h-full relative'>
                            <img src={SampleVid} alt="" className='w-full h-full object-cover rounded-lg' />
                            <div className="absolute flex inset-0 bg-gradient-to-b  to-[#9B1C1C] via-transparent from-transparent bg-cover rounded-xl items-end">
                                <BsFillCaretRightFill size={40} className= 'absolute inset-0 text-white top-14 mx-auto'/>
                                <h2 className='text-[14px] font-semibold text-white inset-0 px-3 mb-5'>Efektifitas Tampon Dalam Menggantikan Pembalut </h2>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    )
}

export default Video;