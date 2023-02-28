import Kontribusi from '../components/Kontribusi.jsx'

import { MdArrowBackIos } from 'react-icons/md'

import map from '../assets/map.png'


function Kolaborasi() {
    return (
        <div className="py-10 bg-white">
            {/* back */}
            <div className=' h-10 w-full flex items-center space-x-[16px] mb-7 pr-6 pl-3'>
                <MdArrowBackIos size={30} />
            </div>



            <div className='px-6 w-full'>

                <div className='w-full h-[180px] rounded-md'>
                    <img src={map} alt="" className='h-full w-full object-cover rounded-lg' />
                </div>

                <div className=' mt-9'>
                    <h2 className='font-semibold text-[16px] text-center mb-2'>Selangkah Lebih Dekat dengan
                        <br /> #TemanAksi!
                    </h2>
                    <p className='text-[10px] font-normal text-justify'>
                        Teman Aksi adalah komunitas lokal yang membantu pendistribusian produk menstruasi pada
                        platform MenstruAction. Tidak hanya membantu dalam hal mendistribusikan produk menstruasi
                        kepada perempuan-perempuan yang membutuhkan di wilayah tempat tinggal mereka, mereka juga
                        membantu memberikan edukasi tentang kesehatan reproduksi dan menstruasi kepada perempuan-perempuan
                        di wilayah tersebut. Dengan adanya dukungan dari komunitas lokal, diharapkan aksesibilitas produk dan
                        informasi mengenai menstruasi dapat meningkat, sehingga dapat membantu mengurangi kemiskinan menstruasi
                        di Indonesia.
                    </p>
                </div>

                <div className=' mt-7 block'>
                    <h2 className=' text-base font-semibold'>Tertarik menjadi bagian dari #TemanAksi!? Hubungi Kami!</h2>
                    <form className='block w-full space-y-4 text-sm font-normal mt-3'
                        action="">
                        <input className='border-[1px] py-2.5 px-2.5 rounded-lg w-full border-[#D1D5DB] bg-[#F9FAFB] active:border-green-400'
                            type="text"
                            placeholder='Nama' />

                        <input className='border-[1px] py-2.5 px-2.5 rounded-lg w-full border-[#D1D5DB] bg-[#F9FAFB]'
                            type="email" name="" id=""
                            placeholder='Email' />

                        <input className='border-[1px] py-2.5 px-2.5 rounded-lg w-full border-[#D1D5DB] bg-[#F9FAFB]'
                            type="email" name="" id=""
                            placeholder='No. Telp' />

                        <textarea className='border-[1px] py-2.5 px-2.5 rounded-lg w-full border-[#D1D5DB] bg-[#F9FAFB]'
                            name="" id=""
                            placeholder='Bentuk kolaborasi yang diinginkan'
                            rows="3">
                        </textarea>

                        <div className='flex justify-end'>
                            <button className=' text-sm font-semibold bg-[#F64A4A] text-white h-[42px] w-[134px] rounded-md'>DAFTAR</button>
                        </div>
                    </form>
                </div>

                <Kontribusi/>

            </div>



        </div>
    )
}

export default Kolaborasi;