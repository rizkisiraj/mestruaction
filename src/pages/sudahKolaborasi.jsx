import Love from '../assets/love-icon.svg';
import { HiInformationCircle } from 'react-icons/hi'

import { useNavigate } from 'react-router';

const SudahKolaborasi = () => {
    const navigate = useNavigate()
    return (
        <div className="w-full min-h-screen flex justify-center items-center">
          <main className="relative w-[342px] shadow-card pt-[116px] px-[30px] pb-[30px]">
            <img className='absolute top-0 left-2/4 -translate-x-2/4 -translate-y-2/4 block mb-[30px]' src={Love} alt="love icon" />
            <h2 className='text-2xl font-bold text-center mb-4'>Terima Kasih!</h2>
            <p className='text-sm text-center font-semibold mb-[43px]'>telah mendaftar sebagai #TemanAksi</p>
            <div className='flex gap-[10px] px-4 py-2 text-[#1A56DB] bg-[#E1EFFE] rounded-[6px] mb-[14px]'>
                <span><HiInformationCircle /></span>
                <p className='text-[11px]'>Pendaftaranmu akan dikonfirmasi & tunggu email dari kami.</p>
            </div>
            <button onClick={() => navigate('../')} className='text-center block py-3 w-full text-sm font-semibold text-white bg-[#F64A4A] rounded-[5px]'>
                OKE DITUNGGU
            </button>
          </main>
        </div>
    )
}

export default SudahKolaborasi;