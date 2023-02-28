
import { MdArrowBackIos } from 'react-icons/md'
import { BsFillCaretRightFill } from 'react-icons/bs'
import { HiOutlineCalendar } from 'react-icons/hi'
import { RiUserHeartLine } from 'react-icons/ri'

import art from '../assets/art.png'

function Artikel() {
    return (
        <div className="py-10 bg-white">

            {/* back */}
            <div className=' h-10 w-full flex items-center space-x-[16px] mb-7 pr-6 pl-3'>
                <MdArrowBackIos size={30} />
            </div>

            <div className=' w-full px-6'>
                <div className='w-full h-[184px] rounded-xl relative'>
                    <img src={art} alt="" className='h-full w-full object-cover rounded-xl' />
                    <div className="absolute flex inset-0 bg-gradient-to-b  to-[#9B1C1C] via-black/10 from-transparent bg-cover rounded-xl items-end">
                        <BsFillCaretRightFill size={40} className='absolute inset-0 text-white top-12 mx-auto' />
                        <h2 className='text-[12px] font-semibold text-white inset-0 px-3 mb-8 text-center'>Cara Menjaga Kebersihan Selama Masa Menstruasi</h2>
                    </div>
                </div>

                <div className='flex flex-col space-y-2 mt-5'>
                    <h2 className='text-[14px] font-semibold'>Cara Menjaga Kebersihan Selama Masa Menstruasi</h2>
                    <div className='flex  text-[12px] font-medium text-[#898989] space-x-12'>
                        <div className='flex items-center space-x-2'>
                            <RiUserHeartLine size={18} />
                            <p  className="mt-0.5">Zahwa Almira</p>
                        </div>
                        <div className='flex items-center space-x-2 '>
                            <HiOutlineCalendar size={18} />
                            <p className="mt-0.5">20 Jan 2023</p>
                        </div>
                    </div>
                </div>

                <div className='text-[12px] font-medium text-justify mt-6 indent-5 leading-loose'>
                Menstruasi merupakan hal yang wajar terjadi pada seorang wanita setiap bulannya. Meski begitu, banyak wanita yang merasa tidak nyaman dan sulit untuk menjaga kebersihan selama masa menstruasi. Menjaga kebersihan selama menstruasi sangat penting untuk mencegah infeksi dan masalah kesehatan lainnya. Berikut adalah beberapa cara menjaga kebersihan selama masa menstruasi.

1. Mengganti pembalut secara teratur
Mengganti pembalut secara teratur sangat penting untuk menjaga kebersihan selama menstruasi. Ganti pembalut minimal 3-4 kali sehari atau setiap 4-6 jam sekali. Jangan biarkan pembalut terlalu lama dipakai karena dapat menyebabkan kelembapan dan meningkatkan risiko infeksi. Pilih pembalut yang sesuai dengan aliran menstruasi, dan pastikan pembalut dipasang dengan benar.

2. Gunakan produk higienis lainnya
Selain pembalut, Anda juga dapat menggunakan produk higienis lainnya seperti tampon atau menstrual cup. Tampon atau menstrual cup dapat lebih nyaman digunakan selama aktivitas fisik seperti berolahraga atau berenang. Namun, pastikan Anda membaca petunjuk penggunaan dengan seksama sebelum menggunakan produk ini.

3. Menjaga kebersihan area genital
Saat menstruasi, area genital menjadi lebih sensitif dan rentan terhadap infeksi. Oleh karena itu, menjaga kebersihan area genital menjadi sangat penting. Gunakan sabun khusus untuk area genital dan bilas dengan air bersih setiap kali Anda mengganti pembalut atau melakukan pergantian tampon atau menstrual cup. Hindari menggunakan pantyliner yang terlalu lama karena dapat meningkatkan risiko infeksi.

4. Hindari kebiasaan buruk
Hindari kebiasaan buruk seperti menggaruk area genital atau menggunakan pakaian dalam yang terlalu ketat. Kebiasaan buruk seperti ini dapat meningkatkan risiko infeksi. Selain itu, hindari pula berhubungan seksual selama menstruasi karena dapat meningkatkan risiko infeksi dan memperburuk kondisi.

Menjaga kebersihan tangan
Tangan yang bersih juga sangat penting untuk menjaga kebersihan selama menstruasi. Cuci tangan dengan sabun dan air bersih sebelum dan setelah mengganti pembalut, tampon, atau menstrual cup. Hindari menyentuh area genital sebelum mencuci tangan, dan hindari juga meminjamkan pembalut atau produk higienis lainnya pada orang lain.

Hindari makanan dan minuman yang tidak sehat
Makanan dan minuman yang tidak sehat dapat memperburuk kondisi selama menstruasi. Hindari makanan pedas, berlemak, dan berminyak serta minuman beralkohol dan kafein. Sebaliknya, konsumsilah makanan yang sehat dan kaya akan serat seperti buah-buahan, sayuran, dan biji-bijian.

Menjaga kebersihan selama menstruasi adalah hal yang sangat penting untuk mencegah infeksi dan masalah kesehatan lainnya. Ikuti tips di atas untuk menjaga kebersihan selama menstruasi




                </div>


            </div>

        </div>
    )
}

export default Artikel;