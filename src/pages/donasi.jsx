import { useState } from 'react';
import { useParams } from 'react-router-dom';
import BackgroundDonasi from '../assets/background-donasi.webp';
import IconCreator from '../assets/icon-creator.svg';
import Tabs from '../components/Tabs';
import Donations from '../dumpData';

const convertToRupiah = (number) => {
  return 'Rp' + new Intl.NumberFormat("id-ID", {
    currency: "IDR"
  }).format(number);
}

const Donasi = () => {
  const [activeLink, setActiveLink] = useState('tentang');
  const { id } = useParams();
  console.log(id);

  const progressLength = (progressFund, targetFund) => {
    let length = (progressFund / targetFund) * 100;
    length = length.toFixed(2);
    console.log(length);
    return length;
  } 

  return (
    <>
    <img height={224} src={BackgroundDonasi} className="block w-full" alt="background donasi" />
    <main className='px-8 pt-5'>
      <section>
        <h1 className='text-sm font-bold mb-3'>{Donations[0].title}</h1>
        <div className='flex items-center gap-2 mb-5'>
          <span>
            <img src={IconCreator} alt="person icon" />
          </span>
          <p className='font-semibold text-xs text-red-500'>{Donations[0].creator}</p>
        </div>
          <p className='font-bold text-blue-500 text-xl'>{convertToRupiah(Donations[0].progressFund)}</p>
          <div className='flex justify-between mb-2'>
            <p className='text-xs'>terkumpul dari <strong>{convertToRupiah(Donations[0].targetFund)}</strong></p>
            <p className='text-xs font-semibold text-blue-500'>{Donations[0].donorsCount} Donatur</p>
          </div>
          <div className='mb-3 relative w-full h-2 bg-slate-300 rounded-lg overflow-hidden'>
            <div style={{width: `${progressLength(Donations[0].progressFund, Donations[0].targetFund)}%`}} className='absolute w-full top-0 left-0 bg-red-500 h-2 rounded-lg overflow-hidden'></div>
          </div>
          <button className='block text-center w-full bg-red-500 font-semibold rounded-[5px] py-3 text-white mb-10' aria-label='tombol donasi sekarang'>DONASIKAN SEKARANG</button>
        <p></p>
      </section>
      <Tabs activeLink={activeLink} />
    </main>
    </>
  )
}

export default Donasi;