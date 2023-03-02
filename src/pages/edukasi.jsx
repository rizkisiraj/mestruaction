import Video from '../components/VideoEdukasi.jsx'
import Artikel from '../components/ArtikelTerbaik.jsx'

import { FaSearch } from 'react-icons/fa'
import {MdArrowBackIos} from 'react-icons/md'

import { useNavigate } from 'react-router'

function Edukasi(){
    const navigate = useNavigate()
    return(
        <div className="py-10 bg-white">
            
            {/* search */}
            <div className=' h-10 w-full flex items-center space-x-[16px] mb-7 pr-6 pl-3'>
                <MdArrowBackIos size={35} onClick={() => navigate('../')}/>
                <form className='h-full w-full border-[2px] border-gray-400 rounded-md flex items-center space-x-[8px] px-3'>
                        <FaSearch size={15} style={{ color: 'gray' }} />
                        <input className='text-gray-400 font-semibold text-[12px] focus:outline-none'
                            type="text"
                            placeholder='Cari disini'
                            name=''>
                        </input>
                </form>
            </div>

            <Video />
            <Artikel />

        </div>
    )
}
export default Edukasi;