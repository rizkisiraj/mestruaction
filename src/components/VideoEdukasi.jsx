// Import Swiper React
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from 'react';

import { getVideo } from '../utils/firebase';

import SampleVid from '../assets/video.webp'
import { BsFillCaretRightFill } from 'react-icons/bs'

const convertSnapshotToArray = (snapshot) => {
    const arrayDump = [];

    snapshot.forEach(snap => {
        arrayDump.push({
            id: snap.id,
            ...snap.data()
        });
    })

    return arrayDump;
}

function Video() {

    const navigate = useNavigate();
    const [video, setVideo] = useState([])

    useEffect(() => {
        const getData = async () => {
            let artikelsDump = await getVideo();

            artikelsDump = convertSnapshotToArray(artikelsDump);
            setVideo(artikelsDump);
        }

        getData();
    }, [])

    return (
        <div className=" w-full h-auto my-6 pl-6">
            <div className="flex justify-between font-semibold items-center pr-6">
                <h2 className="text-[16px] font-semibold">Video</h2>
            </div>
            <div className="h-[170px] w-full flex my-[10px]">
                <Swiper
                    spaceBetween={15}
                    slidesPerView={1.2}
                >
                    {video.map(item =>
                        <SwiperSlide>
                            <div className='w-full h-full relative'>
                                <img src={item.Gambar} alt="" className='w-full h-full object-cover rounded-lg' />
                                <Link className="absolute flex inset-0 bg-gradient-to-b  to-[#9B1C1C] via-black/20 from-black/5 bg-cover rounded-xl items-end"
                                    to={`artikelVideo/${item.id}`} >
                                    <BsFillCaretRightFill size={40} className='absolute inset-0 text-white top-14 mx-auto' />
                                    <h2 className='text-[14px] font-semibold text-white inset-0 px-3 mb-5'>{item.Title}</h2>
                                </Link>
                            </div>
                        </SwiperSlide>
                    )}

                </Swiper>
            </div>
        </div>
    )
}

export default Video;