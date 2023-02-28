import img1 from '../assets/kontribusi1.png'
import img2 from '../assets/kontribusi2.png'

function Kontribusi() {
    return (
        <div className='w-full h-auto my-12'>
            <div className="flex justify-between font-semibold items-center mb-5">
                <h2 className="text-[16px]">Kontribusi #TemanAksi</h2>
                <a className="text-[12px] text-[#F64A4A]" href='/home/kontribusi/'>Lihat lebih</a>
            </div>

            <div className="w-full h-[264px] flex justify-between">
                <div className="w-[162px] h-full bg-white rounded-lg border-[1px] border-gray-300">
                    <img src={img1} alt="" className='h-[139px] w-full rounded-t-lg' />
                    <div className="px-1 text-[10px] font-semibold mt-2">
                        <h2>
                            <span className='text-[#E4141D]'> #TemanAksi</span>
                            <br />
                            mendistribusikan Produk Menstruasi ke Alor, NTT.
                        </h2>
                    </div>
                </div>

                <div className="w-[162px] h-full bg-white rounded-lg border-[1px] border-gray-300">
                    <img src={img2} alt="" className='h-[139px] w-full rounded-t-lg' />
                    <div className="px-1 text-[10px] font-semibold mt-2">
                        <h2>
                            <span className='text-[#E4141D]'> #TemanAksi</span>
                            <br />
                            Mengkampanyekan Pentingnya Menjaga Kebersihan Saat Masa Menstruasi
                        </h2>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Kontribusi;