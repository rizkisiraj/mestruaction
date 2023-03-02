
import { MdArrowBackIos } from 'react-icons/md'
import { BsFillCaretRightFill } from 'react-icons/bs'
import { HiOutlineCalendar } from 'react-icons/hi'
import { RiUserHeartLine } from 'react-icons/ri'
import { Link, useNavigate } from "react-router-dom";

import art from '../assets/art.webp'

function Artikel() {
    const navigate = useNavigate()
    return (
        <div className="py-10 bg-white">

            {/* back */}
            <div className=' h-10 w-full flex items-center space-x-[16px] mb-7 pr-6 pl-3'
                 onClick={() => navigate('../edukasi/')}>
                <MdArrowBackIos size={30} />
            </div>

            <div className=' w-full px-6'>
                <div className='w-full h-[184px] rounded-xl relative'>
                    <img src={art} alt="" className='h-full w-full object-cover rounded-xl' />
                    <div className="absolute flex inset-0 bg-gradient-to-b  to-[#9B1C1C] via-black/10 from-transparent bg-cover rounded-xl items-end">
                        <Link to="https://www.youtube.com/watch?v=gG8Y2-JtSD8" target="_blank">
                            <BsFillCaretRightFill size={40} className='absolute inset-0 text-white top-14 mx-auto' />
                        </Link>
                        <h2 className='text-[12px] font-semibold text-white inset-0 px-3 mb-8 mx-auto'>Yuk, Pahami Manajemen Kebersihan Menstruasi!</h2>
                    </div>
                </div>

                <div className='flex flex-col space-y-2 mt-5'>
                    <h2 className='text-[14px] font-semibold'>Yuk, Pahami Manajemen Kebersihan Menstruasi!</h2>
                    <div className='flex  text-[12px] font-medium text-[#898989] space-x-12'>
                        <div className='flex items-center space-x-2'>
                            <RiUserHeartLine size={18} />
                            <p className="mt-0.5">Zahwa Almira</p>
                        </div>
                        <div className='flex items-center space-x-2 '>
                            <HiOutlineCalendar size={18} />
                            <p className="mt-0.5">20 Jan 2023</p>
                        </div>
                    </div>
                </div>

                <div className='text-[12px] font-medium text-justify mt-6 indent-5 leading-loose'>
                Menstruasi adalah sebuah proses fisiologis alami yang dialami oleh setiap wanita pada masa reproduktifnya. Meskipun merupakan suatu hal yang wajar, menstruasi seringkali dianggap sebagai topik yang tabu dan seringkali tidak dibicarakan secara terbuka. Sebagai wanita, penting bagi kita untuk memahami tentang manajemen kebersihan menstruasi yang benar, agar kita dapat menjaga kesehatan dan kebersihan diri sendiri.

Manajemen kebersihan menstruasi melibatkan serangkaian praktik yang bertujuan untuk menjaga kesehatan dan kebersihan selama masa menstruasi. Berikut adalah beberapa praktik yang dapat membantu dalam manajemen kebersihan menstruasi:
<br />
1. Gunakan pembalut atau tampon yang sesuai
Pembalut atau tampon harus dipilih sesuai dengan jenis menstruasi yang dialami. Jika menstruasi sedang ringan, disarankan untuk menggunakan pembalut atau tampon yang lebih tipis. Namun, jika menstruasi sedang berat, sebaiknya menggunakan pembalut atau tampon yang lebih tebal.
<br />
2. Ganti pembalut atau tampon secara teratur
Pembalut atau tampon harus diganti setiap 3-4 jam sekali, atau lebih sering jika menstruasi sedang berat. Penggunaan pembalut atau tampon yang terlalu lama dapat meningkatkan risiko infeksi dan bau tak sedap.
<br />
3. Gunakan pakaian dalam yang bersih
Pakaian dalam harus selalu bersih dan diganti secara teratur, terutama saat menstruasi sedang berlangsung. Pilihlah pakaian dalam yang terbuat dari bahan yang nyaman dan dapat menyerap keringat dengan baik.
<br />
4. Jaga kebersihan area genital
Area genital harus selalu dibersihkan secara teratur, terutama saat menstruasi sedang berlangsung. Gunakan air hangat dan sabun yang lembut untuk membersihkan area genital, dan pastikan untuk mengeringkan area tersebut dengan baik.
<br />
5. Hindari penggunaan produk kebersihan vagina yang tidak perlu
Penggunaan produk kebersihan vagina yang tidak perlu, seperti semprotan dan pantyliner yang beraroma, dapat menyebabkan iritasi dan infeksi pada area genital. Hindari penggunaan produk tersebut, kecuali direkomendasikan oleh dokter.
<br />
6. Jangan melakukan hubungann seksuall selamaa menstruasi
Selama menstruasi, risiko infeksi pada area genital lebih tinggi daripada saat menstruasi tidak sedang berlangsung. Oleh karena itu, sebaiknya hindari melakukan hubungan seksual selama masa menstruasi.
<br />
Dalam menjalankan manajemen kebersihan menstruasi, sangat penting untuk memilih pembalut atau tampon yang sesuai, mengganti pembalut atau tampon secara teratur, menjaga kebersihan area genital, dan menghindari penggunaan produk kebersihan vagina yang tidak perlu. Dengan memahami praktik-praktik ini, kita dapat menjaga kesehatan dan kebersihan selama masa menstruasi dan membuka diri untuk berbicara tentang topik yang penting ini secara terbuka.
                </div>


            </div>

        </div>
    )
}

export default Artikel;