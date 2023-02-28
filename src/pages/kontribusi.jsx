import { MdArrowBackIos } from 'react-icons/md'

import img1 from '../assets/kontribusi1.png'


function Kontribusi() {
    return (
        <div className="py-10 bg-white">
            {/* back */}
            <div className=' h-10 w-full flex items-center space-x-[5px] mb-7 pr-6 pl-3'>
                <MdArrowBackIos size={30} />
                <p className='text-[16px] font-semibold text-black/70'>Kontribusi #TemanAksi</p>
            </div>

            <div className='w-full h-auto px-6 space-y-4'>
                <div className=' min-h-[235px] w-full border-[#FE6A705E] border-[1px] bg-[#FFF9FA] rounded-lg p-3'>
                    <div className='w-full h-[133px] rounded-md'>
                        <img src={img1}alt="" className='w-full h-full object-cover rounded-md' />
                    </div>
                    <h2 className=' font-medium text-sm mt-3'><span className='text-[#E4141D]'>#TemanAksi</span> Mendistribusikan Produk Menstruasi ke Alor, NTT.</h2>
                    <p className=' font-medium text-[12px] text-[#898989] mt-2'>18 Jan 2023</p>
                </div>

                <div className=' min-h-[235px] w-full border-[#FE6A705E] border-[1px] bg-[#FFF9FA] rounded-lg p-3'>
                    <div className='w-full h-[133px] rounded-md'>
                        <img src={img1}alt="" className='w-full h-full object-cover rounded-md' />
                    </div>
                    <h2 className=' font-medium text-sm mt-3'><span className='text-[#E4141D]'>#TemanAksi</span> Mendistribusikan Produk Menstruasi ke Alor, NTT.</h2>
                    <p className=' font-medium text-[12px] text-[#898989] mt-2'>18 Jan 2023</p>
                </div>

                <div className=' min-h-[235px] w-full border-[#FE6A705E] border-[1px] bg-[#FFF9FA] rounded-lg p-3'>
                    <div className='w-full h-[133px] rounded-md'>
                        <img src={img1}alt="" className='w-full h-full object-cover rounded-md' />
                    </div>
                    <h2 className=' font-medium text-sm mt-3'><span className='text-[#E4141D]'>#TemanAksi</span> Mendistribusikan Produk Menstruasi ke Alor, NTT.</h2>
                    <p className=' font-medium text-[12px] text-[#898989] mt-2'>18 Jan 2023</p>
                </div>

            </div>

        </div>
    )
}
export default Kontribusi;
