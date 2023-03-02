import { MdArrowBackIos } from 'react-icons/md'
import { useNavigate } from 'react-router'

import img1 from '../assets/kontribusi1.webp'
import img2 from '../assets/kontribusi2.webp'
import img3 from '../assets/kontribusi3.webp'


function Kontribusi() {
    const navigate = useNavigate()
    return (
        <div className="py-10 bg-white">
            {/* back */}
            <div className=' h-10 w-full flex items-center space-x-[5px] mb-7 pr-6 pl-3'>
                <MdArrowBackIos size={30} onClick={() => navigate('../')}/>
                <p className='text-[16px] font-semibold text-black/70'>Kontribusi #TemanAksi</p>
            </div>

            <div className='w-full h-auto px-6 space-y-4'>
                <div className=' min-h-[235px] w-full border-[#FE6A705E] border-[1px] bg-[#FFF9FA] rounded-lg p-3'>
                    <div className='w-full h-[133px] rounded-md'>
                        <img src={img1} alt="" className='w-full h-full object-cover rounded-md' />
                    </div>
                    <h2 className=' font-medium text-sm mt-3'><span className='text-[#E4141D]'>#TemanAksi</span> Mendistribusikan Produk Menstruasi ke Alor, NTT.</h2>
                    <p className=' font-medium text-[12px] text-[#898989] mt-2'>18 Jan 2023</p>
                </div>

                <div className=' min-h-[235px] w-full border-[#FE6A705E] border-[1px] bg-[#FFF9FA] rounded-lg p-3'>
                    <div className='w-full h-[133px] rounded-md'>
                        <img src={img2} alt="" className='w-full h-full object-cover rounded-md' />
                    </div>
                    <h2 className=' font-medium text-sm mt-3'><span className='text-[#E4141D]'>#TemanAksi</span> #TemanAksi
                        mengkampanyekan pentingnya menjaga kebersihan saat masa menstruasi</h2>
                    <p className=' font-medium text-[12px] text-[#898989] mt-2'>20 Jan 2023</p>
                </div>

                <div className=' min-h-[235px] w-full border-[#FE6A705E] border-[1px] bg-[#FFF9FA] rounded-lg p-3'>
                    <div className='w-full h-[133px] rounded-md'>
                        <img src={img3} alt="" className='w-full h-full object-cover rounded-md' />
                    </div>
                    <h2 className=' font-medium text-sm mt-3'><span className='text-[#E4141D]'>#TemanAksi</span>#TemanAksi mengkampanyekan pentingnya menjaga kebersihan saat masa menstruasi</h2>
                    <p className=' font-medium text-[12px] text-[#898989] mt-2'>18 Jan 2023</p>
                </div>

            </div>

        </div>
    )
}
export default Kontribusi;
