import MenuItem from '../components/MenuItem.jsx';
import Event from '../components/UpcomingEvent.jsx';
import ArtikelTerbaru from '../components/ArtikelTerbaru.jsx';
import Kontribusi from '../components/Kontribusi.jsx';
import Logo from '../assets/logomenstru.webp';

import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { FaSearch } from 'react-icons/fa'

import { Link} from "react-router-dom";

function Home() {

    return (
        <div className="pt-10 bg-white">

            <div className="px-6">
                {/* search */}
                <div className=' h-10 w-full flex items-center space-x-[25px] mb-7'>
                    <img src={Logo} alt="" className=' w-[49px] h-[33px]' />
                    <form className='h-full w-full border-[2px] border-gray-400 rounded-md flex items-center space-x-[8px] px-3'>
                        <FaSearch size={15} style={{ color: 'gray' }} />
                        <input className='text-gray-400 font-semibold text-[12px] focus:outline-none'
                            type="text"
                            placeholder='Cari disini'
                            name=''>
                        </input>
                    </form>
                </div>

                {/* CardDonasi */}
                <div className="w-full h-[168px] bg-[#FE6A70] rounded-xl px-[18px] py-[21px] text-white relative">
                    <div className="absolute inset-0 bg-[url('./assets/cardDonasi.webp')] bg-cover rounded-xl"></div>
                    <div className='text-[18px] font-semibold'>
                        Bantu perempuan-perempuan
                        Indonesia dapatkan <span className='font-bold'>produk menstruasi yang layak</span>
                    </div>
                    <Link className='w-[134px] h-[40px] bg-white text-[#9B1C1C] font-bold text-[12px] rounded-md mt-2 absolute right-5 flex'
                        to = '/donasi/Rccw3Wzaqea64Nh4Uzqp/form-donasi'
                        > <span className='m-auto'>DONASI SEKARANG</span></Link>
                </div>
                <MenuItem />
            </div>

            <Event />

            <div className="px-6">
                <ArtikelTerbaru />
                <Kontribusi />

                {/* maps */}
                <div className='w-full pb-4 rounded-md'>
                    <h2 className='text-[16px] font-semibold mb-[16px]'>Sebaran #TemanAksi di Indonesia</h2>
                    <MapContainer className='w-full h-[250px] rounded-md' center={[-7.6878285, 110.4132472]} zoom={14} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[-7.6878285, 110.4132472]}>
                        <Popup>
                          SRIKANDI X UII
                        </Popup>
                    </Marker>
                    </MapContainer>

                </div>
            </div>
        </div>
    )
}
export default Home;