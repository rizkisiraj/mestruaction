// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import Event from '../assets/event.png'

function UpcomingEvent() {
    return (
        <div className=" w-full h-auto my-10">
            <h2 className="text-[16px] font-semibold px-6">Kegiatan Mendatang</h2>
            <div className="h-[250px] w-full flex py-[17px] pl-6">
                <Swiper
                    spaceBetween={15}
                    slidesPerView={1.2}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide className='bg-white rounded-lg border-gray-300 border-[0.5px]'>
                        <div className='w-full h-[126px]'>
                            <img src={Event} alt="" className='w-full h-full object-cover rounded-t-lg' />
                        </div>
                        <div className='flex px-5 space-x-6 mt-2.5'>
                            <div className='w-[30px] text-center text-[15px] font-bold text-[#E4141D]'>FEB 12</div>
                            <p className='text-[12px] font-semibold'>Sosialisasi  Pentingnya Nutrisi Yang
                                Cukup Pada Masa Menstruasi
                                Bersama <span className='text-[#E4141D]'>#TemanAksi</span>
                                <br />
                                <span className='font-medium text-[10px] text-[#6B7280]'>Desa Jaya Selalu</span>
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg-white rounded-lg border-gray-300 border-[0.5px]'>
                        <div className='w-full h-[126px]'>
                            <img src={Event} alt="" className='w-full h-full object-cover rounded-t-lg' />
                        </div>
                        <div className='flex px-5 space-x-6 mt-2.5'>
                            <div className='w-[30px] text-center text-[15px] font-bold text-[#E4141D]'>MAR 12</div>
                            <p className='text-[12px] font-semibold'>Pelatihan Pembuatan Pembalut Kain
                                Bersama <span className='text-[#E4141D]'>#TemanAksi</span>
                                <br />
                                <span className='font-medium text-[10px] text-[#6B7280]'>Desa Getep</span>
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg-white rounded-lg border-gray-300 border-[0.5px]'>
                        <div className='w-full h-[126px]'>
                            <img src={Event} alt="" className='w-full h-full object-cover rounded-t-lg' />
                        </div>
                        <div className='flex px-5 space-x-6 mt-2.5'>
                            <div className='w-[30px] text-center text-[15px] font-bold text-[#E4141D]'>FEB 12</div>
                            <p className='text-[12px] font-semibold'>Sosialisasi  Pentingnya Nutrisi Yang
                                Cukup Pada Masa Menstruasi
                                Bersama <span className='text-[#E4141D]'>#TemanAksi</span>
                                <br />
                                <span className='font-medium text-[10px] text-[#6B7280]'>Desa Jaya Selalu</span>
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default UpcomingEvent;