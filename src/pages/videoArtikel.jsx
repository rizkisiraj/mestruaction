
import { MdArrowBackIos } from 'react-icons/md'
import { BsFillCaretRightFill } from 'react-icons/bs'
import { HiOutlineCalendar } from 'react-icons/hi'
import { RiUserHeartLine } from 'react-icons/ri'

import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getContentVideo } from '../utils/firebase'

const convertTimestampToIndonesianDate = (date) => {
    return date.toDate().toDateString('id-ID').split(' ').slice(1).join(' ');;
  }

function VideoArtikel() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = async () => {
          const dataTemp = await getContentVideo(id);
          setData(dataTemp);
        }
    
        getData();
    },[id])

    return (
        <div className="py-10 bg-white">

            {/* back */}
            <div className=' h-10 w-full flex items-center space-x-[16px] mb-7 pr-6 pl-3'
                 onClick={() => navigate('../edukasi/')}>
                <MdArrowBackIos size={30}  className=" cursor-pointer"/>
            </div>

            <div className=' w-full px-6'>
                <div className='w-full h-[184px] rounded-xl relative'>
                    <iframe className='h-full w-full object-cover rounded-xl' src={`https://www.youtube.com/embed/${data.Video}`} >
                    </iframe>

                </div>

                <div className='flex flex-col space-y-2 mt-5'>
                    <h2 className='text-[14px] font-semibold'>{data.Title}</h2>
                    <div className='flex  text-[12px] font-medium text-[#898989] space-x-12'>
                        <div className='flex items-center space-x-2'>
                            <RiUserHeartLine size={18} />
                            <p className="mt-0.5">{data.Author}</p>
                        </div>
                        <div className='flex items-center space-x-2 '>
                            <HiOutlineCalendar size={18} />
                            <p className="mt-0.5">{data.Created_at && convertTimestampToIndonesianDate(data.Created_at)}</p>
                        </div>
                    </div>
                </div>

                <div className='text-[12px] font-medium text-justify mt-6 indent-5 leading-loose'>
                    {data.Content}
                </div>
            </div>
        </div>
    )
}

export default VideoArtikel;