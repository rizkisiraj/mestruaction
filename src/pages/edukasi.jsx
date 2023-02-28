import Video from '../components/VideoEdukasi.jsx'
import Artikel from '../components/ArtikelTerbaik.jsx'

import { FaSearch } from 'react-icons/fa'
import {MdArrowBackIos} from 'react-icons/md'

function Edukasi(){
    return(
        <div className="py-10 bg-white">
            
            {/* search */}
            <div className=' h-10 w-full flex items-center space-x-[16px] mb-7 pr-6 pl-3'>
                <MdArrowBackIos size={35} />
                <div className='h-full w-full border-[2px] border-gray-400 rounded-md flex items-center space-x-[8px] px-3'>
                    <FaSearch size={15} style={{ color: 'gray' }} />
                    <span className='text-gray-400 font-semibold text-[12px]'>Cari disini</span>
                </div>
            </div>

            <Video />
            <Artikel />

        </div>
    )
}
export default Edukasi;