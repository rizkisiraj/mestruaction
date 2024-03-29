import Kontribusi from '../components/Kontribusi.jsx'

import { MdArrowBackIos } from 'react-icons/md'

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router';


function Kolaborasi() {
    const navigate = useNavigate()
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hz5rcvd', 'template_hz72ewa', form.current, 'o7Y8zgv7ySiCgASwH')
            .then((result) => {
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        navigate('../sudah-kolaborasi')
    };

    return (
        <div className="py-10 bg-white">
            {/* back */}
            <div className=' h-10 w-full flex items-center space-x-[16px] mb-7 pr-6 pl-3'
                onClick={() => navigate('../')}>
                <MdArrowBackIos size={30} className="cursor-pointer" />
            </div>



            <div className='px-6 w-full'>

                <div className='w-full h-[180px] rounded-md'>
                <MapContainer className='w-full h-full rounded-md' center={[-7.6878285, 110.4132472]} zoom={14} scrollWheelZoom={false}>
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

                <div className=' mt-8'>
                    <h2 className='font-semibold text-[16px] text-center mb-2'>Selangkah Lebih Dekat dengan
                        <br /> #TemanAksi!
                    </h2>
                    <p className='text-[10px] font-normal text-justify'>
                        Teman Aksi adalah komunitas lokal yang membantu pendistribusian produk menstruasi pada
                        platform MenstruAction. Teman Aksi juga membantu memberikan edukasi tentang kesehatan reproduksi dan menstruasi kepada perempuan-perempuan
                        di wilayah mereka tinggal. Adanya dukungan dari komunitas lokal, diharapkan dapat meningkatkan aksesibilitas produk dan
                        informasi mengenai menstruasi, sehingga dapat membantu mengurangi kemiskinan menstruasi
                        di Indonesia.
                    </p>
                </div>

                <div className=' mt-7 block'>
                    <h2 className=' text-base font-semibold'>Tertarik menjadi bagian dari #TemanAksi!? Hubungi Kami!</h2>
                    <form className='block w-full space-y-4 text-sm font-normal mt-3'
                        ref={form} onSubmit={sendEmail}>
                        <input className='border-[1px] py-2.5 px-2.5 rounded-lg w-full border-[#D1D5DB] bg-[#F9FAFB] focus:bg-[#eff1f5]  focus:outline-[#5c99ed]'
                            type="text"
                            placeholder='Nama'
                            name='user_name'
                             required />

                        <input className='border-[1px] py-2.5 px-2.5 rounded-lg w-full border-[#D1D5DB] bg-[#F9FAFB] focus:bg-[#eff1f5]  focus:outline-[#5c99ed]'
                            type="email" 
                            name="user_email" id=""
                            placeholder='Email' required />

                        <input className='border-[1px] py-2.5 px-2.5 rounded-lg w-full border-[#D1D5DB] bg-[#F9FAFB] focus:bg-[#eff1f5]  focus:outline-[#5c99ed]'
                            type="tel" 
                            name="user_phone"
                            pattern="[0-9]{8,15}" id=""
                            title="Number only, 8-15 characters"
                            placeholder='No. Telp' required />

                        <textarea className='border-[1px] py-2.5 px-2.5 rounded-lg w-full border-[#D1D5DB] bg-[#F9FAFB] focus:bg-[#eff1f5]  focus:outline-[#5c99ed]'
                            name="message" id=""
                            placeholder='Bentuk kolaborasi yang diinginkan'
                            rows="3" required>
                        </textarea>

                        <div className='flex justify-end'>
                            <button type='submit' className=' text-sm font-semibold bg-[#F64A4A] text-white h-[42px] w-[134px] rounded-md'>DAFTAR</button>
                        </div>
                    </form>
                </div>

                <Kontribusi />

            </div>



        </div>
    )
}

export default Kolaborasi;