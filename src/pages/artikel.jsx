
import { MdArrowBackIos } from 'react-icons/md'
import { BsFillCaretRightFill } from 'react-icons/bs'
import { HiOutlineCalendar } from 'react-icons/hi'
import { RiUserHeartLine } from 'react-icons/ri'

import art from '../assets/art.png'

function Artikel() {
    return (
        <div className="py-10 bg-white">

            {/* back */}
            <div className=' h-10 w-full flex items-center space-x-[16px] mb-7 pr-6 pl-3'>
                <MdArrowBackIos size={30} />
            </div>

            <div className=' h-screen w-full px-6'>
                <div className='w-full h-[184px] rounded-xl relative'>
                    <img src={art} alt="" className='h-full w-full object-cover rounded-xl' />
                    <div className="absolute flex inset-0 bg-gradient-to-b  to-[#9B1C1C] via-black/10 from-transparent bg-cover rounded-xl items-end">
                        <BsFillCaretRightFill size={40} className='absolute inset-0 text-white top-12 mx-auto' />
                        <h2 className='text-[12px] font-semibold text-white inset-0 px-3 mb-8 text-center'>Cara Menjaga Kebersihan Selama Masa Menstruasi</h2>
                    </div>
                </div>

                <div className='flex flex-col space-y-2 mt-5'>
                    <h2 className='text-[14px] font-semibold'>Cara Menjaga Kebersihan Selama Masa Menstruasi</h2>
                    <div className='flex  text-[12px] font-medium text-[#898989] space-x-12'>
                        <div className='flex items-center space-x-2'>
                            <RiUserHeartLine size={18} />
                            <p  className="mt-0.5">Zahwa Almira</p>
                        </div>
                        <div className='flex items-center space-x-2 '>
                            <HiOutlineCalendar size={18} />
                            <p className="mt-0.5">20 Jan 2023</p>
                        </div>
                    </div>
                </div>

                <div className='text-[12px] font-medium text-justify mt-6 indent-5 leading-loose'>
                    Menstruasi adalah kondisi normal yang dialami wanita setiap bulannya. Keluarnya darah saat menstruasi 
                    terkadang membuat kamu sedikit tidak nyaman, karena harus memakai pembalut sepanjang hari. Namun, 
                    ketidaknyamanan ini sebenarnya bisa diminimalkan jika kamu menjaga kebersihan daerah intim.
                </div>


            </div>

        </div>
    )
}

export default Artikel;