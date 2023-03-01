import MenuItem from '../components/MenuItem.jsx';
import Event from '../components/UpcomingEvent.jsx';
import ArtikelTerbaru from '../components/ArtikelTerbaru.jsx';
import Kontribusi from '../components/Kontribusi.jsx';

import Logo from '../assets/logomenstru.svg';
import map from '../assets/map.webp';

import { FaSearch } from 'react-icons/fa'

function Home() {
    return (
        <div className="pt-10 bg-white">

            <div className="px-6">
                {/* search */}
                <div className=' h-10 w-full flex items-center space-x-[25px] mb-7'>
                    <img src={Logo} alt="" className=' w-[49px] h-[33px]' />
                    <div className='h-full w-full border-[2px] border-gray-400 rounded-md flex items-center space-x-[8px] px-3'>
                        <FaSearch size={15} style={{ color: 'gray' }} />
                        <span className='text-gray-400 font-semibold text-[12px]'>Cari disini</span>
                    </div>
                </div>

                {/* CardDonasi */}
                <div className="w-full h-[168px] bg-[#FE6A70] rounded-xl px-[18px] py-[21px] text-white relative">
                    <div className="absolute inset-0 bg-[url('./assets/cardDonasi.webp')] bg-cover rounded-xl"></div>
                    <div className='text-[18px] font-semibold'>
                        Bantu perempuan-perempuan
                        Indonesia dapatkan <span className='font-bold'>produk menstruasi yang layak</span>
                    </div>
                    <button className='w-[134px] h-[40px] bg-white text-[#9B1C1C] font-bold text-[12px] rounded-md mt-2 absolute right-5'>DONASI SEKARANG</button>
                </div>
                <MenuItem />
            </div>

            <Event />

            <div className="px-6">
                <ArtikelTerbaru />
                <Kontribusi />

                {/* maps */}
                <div className='w-full h-[250px]'>
                    <h2 className='text-[16px] font-semibold mb-[16px]'>Sebaran #TemanAksi di Indonesia</h2>
                    <div className='w-full h-[177px] rounded-md'>
                        <img src={map} alt="" className='h-full w-full object-cover' />
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Home;