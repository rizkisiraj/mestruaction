
import { MdArrowBackIos } from 'react-icons/md'
import { BsFillCaretRightFill } from 'react-icons/bs'
import { HiOutlineCalendar } from 'react-icons/hi'
import { RiUserHeartLine } from 'react-icons/ri'
import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getContentArtikel } from '../utils/firebase'

const convertTimestampToIndonesianDate = (date) => {
    return date.toDate().toDateString('id-ID').split(' ').slice(1).join(' ');;
  }

function Artikel() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = async () => {
          const dataTemp = await getContentArtikel(id);
          setData(dataTemp);
        }
    
        getData();
    },[id])

    return (
        <div className="py-10 bg-white">

            {/* back */}
            <div className=' h-10 w-full flex items-center space-x-[16px] mb-7 pr-6 pl-3'
                 onClick={() => navigate('../edukasi/')}>
                <MdArrowBackIos size={30} />
            </div>

            <div className=' w-full px-6'>
                <div className='w-full h-[184px] rounded-xl relative'>
                    <img src={data.gambar} alt="" className='h-full w-full object-cover rounded-xl' />
                    <div className="absolute flex inset-0 bg-gradient-to-b  to-[#9B1C1C] via-black/10 from-transparent bg-cover rounded-xl items-end">
                        {/* <Link to="https://www.youtube.com/watch?v=gG8Y2-JtSD8" target="_blank">
                            <BsFillCaretRightFill size={40} className='absolute inset-0 text-white top-14 mx-auto' />
                        </Link> */}
                        <h2 className='text-[12px] font-semibold text-white inset-0 px-3 mb-8 mx-auto'>{data.title}</h2>
                    </div>
                </div>

                <div className='flex flex-col space-y-2 mt-5'>
                    <h2 className='text-[14px] font-semibold'>{data.title}</h2>
                    <div className='flex  text-[12px] font-medium text-[#898989] space-x-12'>
                        <div className='flex items-center space-x-2'>
                            <RiUserHeartLine size={18} />
                            <p className="mt-0.5">{data.author}</p>
                        </div>
                        <div className='flex items-center space-x-2 '>
                            <HiOutlineCalendar size={18} />
                            <p className="mt-0.5">{data.created_at && convertTimestampToIndonesianDate(data.created_at)}</p>
                        </div>
                    </div>
                </div>

                <div className='text-[12px] font-medium text-justify mt-6 indent-5 leading-loose'>
                    {data.content}
                </div>
            </div>
        </div>
    )
}

export default Artikel;