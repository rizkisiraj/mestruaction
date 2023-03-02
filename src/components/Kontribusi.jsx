import img1 from '../assets/kontribusi1.webp'
import img2 from '../assets/kontribusi2.webp'
import { Link } from "react-router-dom";

function Kontribusi() {
    return (
        <div className='w-full h-auto my-12'>
            <div className="flex justify-between font-semibold items-center mb-5">
                <h2 className="text-[16px]">Kontribusi #TemanAksi</h2>
                <Link className="text-[12px] text-[#F64A4A]" to='kontribusi/'>Lihat lebih</Link>
            </div>

            <div className="w-full h-[250px] flex justify-between">
                <div className="w-[162px] h-full bg-white rounded-lg border-[1px] border-gray-300">
                    <img src={img1} alt="" className='h-[139px] w-full rounded-t-lg' />
                    <div className="px-1 text-[11px] font-semibold mt-2">
                        <h2>
                            <span className='text-[#E4141D]'> #TemanAksi</span>
                            <br />
                            Pendistribusian Produk Menstruasi ke Panti Asuhan Kasih Mutiara
                        </h2>
                    </div>
                </div>

                <div className="w-[162px] h-full bg-white rounded-lg border-[1px] border-gray-300">
                    <img src={img2} alt="" className='h-[139px] w-full rounded-t-lg' />
                    <div className="px-1 text-[11px] font-semibold mt-2">
                        <h2>
                            <span className='text-[#E4141D]'> #TemanAksi</span>
                            <br />
                            Penyuluhan Pentingnya Menjaga Kebersihan Saat Masa Menstruasi di SMPN Mekarsari
                        </h2>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Kontribusi;