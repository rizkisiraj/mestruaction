import {BsArchiveFill} from 'react-icons/bs'
import {FaUserFriends} from 'react-icons/fa'
import {FaHandPaper} from 'react-icons/fa'
import {HiClipboard} from 'react-icons/hi'

import { Link, useNavigate } from "react-router-dom";

function Menu(){
    
    const navigate = useNavigate()

    return(
        <div className="h-[77px] w-full text-[11px] font-medium flex space-x-3 my-6 mx-auto">
            <div className="block w-[77px] text-center">
                <Link to='/donasi/36SE08AW4A9pP03wgWaQ/' className="h-[50px] w-[50px] rounded-full bg-[#E8EFFF] mx-auto flex mb-2">
                    <BsArchiveFill size={20} className=' m-auto' style={{ color: '#103374' }} />
                </Link>
                <span className=''>Beri Donasi</span>
            </div>

            <div className="block w-[77px] text-center">
                <button className="h-[50px] w-[50px] rounded-full bg-[#E9FFFC] mx-auto flex mb-2"
                    onClick={() => navigate('kolaborasi/')}>
                    <FaUserFriends size={25} className=' m-auto' style={{ color: '#259F46' }} />
                </button>
                <span className=''>Kolaborasi</span>
            </div>

            <div className="block w-[77px] text-center">
                <button className="h-[50px] w-[50px] rounded-full bg-[#FFEADF] mx-auto flex mb-2">
                    <FaHandPaper size={20} className=' m-auto' style={{ color: '#F64A4A' }} />
                </button>
                <span className=''>Ajukan Donasi</span>
            </div>

            <div className="block w-[77px] text-center">
                <button className="h-[50px] w-[50px] rounded-full bg-[#FFDFE3] mx-auto flex mb-2"
                    onClick={() => navigate('edukasi/')}>
                    <HiClipboard size={25} className=' m-auto' style={{ color: '#E4141D' }} />
                </button>
                <span className=''>Edukasi</span>
            </div>
        </div>
    )
}
export default Menu