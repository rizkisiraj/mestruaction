import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Donations from "../dumpData";
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai"
import { MdKeyboardArrowDown } from 'react-icons/md'
import Modal from "../components/Modal";
import { useNavigate, useParams } from "react-router-dom";
import { addDonor, getDonation } from "../utils/firebase";

const convertToRupiah = (number) => {
  return 'Rp' + new Intl.NumberFormat("id-ID", {
    currency: "IDR"
  }).format(number);
}

const convertToRupiahWithoutRp = (number) => {
  if(number === 0) {
    return '0';
  }

  return new Intl.NumberFormat("id-ID", {
    currency: "IDR"
  }).format(number);
}

const HARGA_KONSTAN = {
  pembalut: 20000,
  obat: 10000,
  menstrualCup: 100000,
}

const FormDonasi = () => {
  const { id } = useParams();
  const { register, setValue, watch, handleSubmit, resetField, setError, formState: { errors } } = useForm();
  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const navigate = useNavigate();
  const [donation, setDonation] = useState({});

  useEffect(() => {
    const getDataDonation = async () => {
      const donationDump = await getDonation(id);
      setDonation(donationDump);
    }

    getDataDonation();
  },[id])

  const onSubmit = async (data, e) => {
    if((!data.banyakObat & !data.banyakPembalut & !data.banyakMenstrual)) {
      alert('Jumlah donasi minimal 1 item');
      return;
    }
    
    const totalDonasi = data.banyakObat * HARGA_KONSTAN.obat + data.banyakMenstrual * HARGA_KONSTAN.menstrualCup + data.banyakPembalut * HARGA_KONSTAN.pembalut;
    
    const donorObj = {
      name: data.namaDonatur ? data.namaDonatur : 'Anonymous',
      email: data.emailDonatur ? data.emailDonatur : '',
      totalDonation: totalDonasi,
      pembalut: data.banyakPembalut,
      obat: data.banyakObat,
      menstrualCup: data.banyakMenstrual,
      metodePembayaran: data.metodePembayaran,
    }

    if(id) {
      await addDonor(id, donorObj, donation.progressFund+totalDonasi);
      navigate('/sudah-donasi');
    }


  };

  const handleReduce = (fieldName) => {
    if(parseInt(watch(fieldName)) === 0) {
      return;
    }
    setValue(fieldName, parseInt(watch(fieldName))-1)
  }

  const handleAdd = (fieldName) => {
    if(parseInt(watch(fieldName)) === 100) {
      return;
    }
    setValue(fieldName, parseInt(watch(fieldName))+1)
  }

  const preventMinus = (e) => {
    if (e.code === 'Minus') {
        e.preventDefault();
    }
};

  const returnTotalSumbangan = (field1, field2, field3) => {
    const totalHargaPembalut = parseInt(watch(field1,0)) * HARGA_KONSTAN.pembalut;
    const totalHargaObat = parseInt(watch(field2,0)) * HARGA_KONSTAN.obat;
    const totalHargaMenstrualCup = parseInt(watch(field3,0)) * HARGA_KONSTAN.menstrualCup;

    return (totalHargaPembalut + totalHargaObat + totalHargaMenstrualCup);
  }

  const returnTotalSumbanganDanDonasiMenstruaction = () => {
    return returnTotalSumbangan('banyakPembalut','banyakObat','banyakMenstrual') + parseInt(watch('totalDonasiMenstruaction',0));
  }

  return (
    <>
    <main className="pt-14 pl-6 pr-5 pb-5">
      <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="font-semibold text-lg text-center mb-12">{donation.title}</h1>
      <h2 className="font-semibold text-lg text-[#000000B2] mb-[22px]">Pilih yang akan kamu donasikan</h2>
      <section>
        <div className="flex items-center justify-between mb-4">
            <div className="flex-1 bg-[#F5F4F5] px-6 py-4 mr-[31px] rounded-[5px]">
              <p className="font-medium text-xs">Pembalut</p>
            </div>
            <div className="flex items-center">
              <button type="button" onClick={() => handleReduce('banyakPembalut')} className="pl-1 w-[29px] h-[29px] text-[#E4141D] text-xl block"><AiOutlineMinus /></button>
              <input min={0} onKeyDown={preventMinus} defaultValue={0} {...register('banyakPembalut', {
                required: true,
                pattern: /^(\+?\d+|-?0+)$/,
                min: 0,
                valueAsNumber: true,
              })} type="number" name="banyakPembalut" className="block mx-[6px] border border-[#FFA3B1] text-center w-[54px] h-[43px] rounded-[5px]"  />
              <button type="button" onClick={() => handleAdd('banyakPembalut')} className="pl-1 w-[29px] h-[29px] text-[#346CD7] text-xl block"><BsPlusLg /></button>
            </div>
        </div>
        <div className="flex items-center justify-between mb-4">
            <div className="flex-1 bg-[#F5F4F5] px-6 py-4 mr-[31px] rounded-[5px]">
              <p className="font-medium text-xs">Obat-obatan</p>
            </div>
            <div className="flex items-center">
              <button type="button" onClick={() => handleReduce('banyakObat')} className="pl-1 w-[29px] h-[29px] text-[#E4141D] text-xl block"><AiOutlineMinus /></button>
              <input min={0} onKeyDown={preventMinus} defaultValue={0} {...register('banyakObat', {
                required: true,
                pattern: /^(\+?\d+|-?0+)$/,
                min: 0,
                valueAsNumber: true,
              })} type="number" name="banyakObat" className="block mx-[6px] border border-[#FFA3B1] text-center w-[54px] h-[43px] rounded-[5px]"  />
              <button type="button" onClick={() => handleAdd('banyakObat')} className="pl-1 w-[29px] h-[29px] text-[#346CD7] text-xl block"><BsPlusLg /></button>
            </div>
        </div>
        <div className="flex items-center justify-between mb-4">
            <div className="flex-1 bg-[#F5F4F5] px-6 py-4 mr-[31px] rounded-[5px]">
              <p className="font-medium text-xs">Menstrual Cup</p>
            </div>
            <div className="flex items-center">
              <button type="button" onClick={() => handleReduce('banyakMenstrual')} className="pl-1 w-[29px] h-[29px] text-[#E4141D] text-xl block"><AiOutlineMinus /></button>
              <input min={0} onKeyDown={preventMinus} {...register('banyakMenstrual', {
                required: true,
                pattern: /^(\+?\d+|-?0+)$/,
                min: 0,
                valueAsNumber: true,
              })} type="number" defaultValue={0} name="banyakMenstrual" className="block mx-[6px] border border-[#FFA3B1] text-center w-[54px] h-[43px] rounded-[5px]"  />
              <button type="button" onClick={() => handleAdd('banyakMenstrual')} className="pl-1 w-[29px] h-[29px] text-[#346CD7] text-xl block"><BsPlusLg /></button>
            </div>
        </div>
      </section>
      <section>
        <h2 className="font-semibold text-[#000000B2] mb-[14px]">Total</h2>
        <div className="w-full relative text-2xl font-semibold rounded-[5px] overflow-hidden mb-8">
          <span className="absolute left-3 top-[14px]">Rp</span>
          <input value={convertToRupiahWithoutRp(returnTotalSumbangan('banyakPembalut', 'banyakObat', 'banyakMenstrual'))} className="focus:outline-none block pr-3 pl-5 py-[14px] text-right bg-[#FFEBEE] w-full" readOnly type="text" name="totalDonasi" />
        </div>
        <h2 className="text-[#000000B2] font-semibold">Tip MenstruAction <span className="text-[#346CD7]">(Opsional)</span></h2>
        <p className="my-3 font-medium text-xs text-[#898989] mb-3">MenstruAction tidak membebankan biaya platform apapun. Donasi opsional ini digunakan untuk operasionalisasi organisasi agar dapat terus berjalan dan membantu 
lebih banyak orang.</p>
        <div className="w-full relative text-2xl font-semibold rounded-[5px] overflow-hidden mb-8">
          <span className="absolute left-3 top-[14px]">Rp</span>
          <input min={0} onKeyDown={preventMinus} defaultValue={0} {...register('totalDonasiMenstruaction', {valueAsNumber: true,})} className="block pr-3 pl-5 py-[14px] text-right bg-[#FFEBEE] w-full" type="number" name="totalDonasiMenstruaction" />
        </div>
      </section>
      <section>
        <div className="w-full relative font-semibold rounded-[8px] overflow-hidden text-sm bg-[#F9FAFB] border border-[#D1D5DB] mb-[14px]">
          <span className="absolute right-3 top-[14px]"><MdKeyboardArrowDown /></span>
          <input onClick={() => setIsOpen(true)} {...register('metodePembayaran',{required: true})} placeholder="Metode Pembayaran" readOnly className="focus:outline-none block p-3 bg-[#F9FAFB] overflow-hidden w-full cursor-pointer text-sm font-medium" type="text" name="metodePembayaran" />
        </div>
        <input {...register('namaDonatur',{ required: isChecked ? false : true })} disabled={isChecked} placeholder="Nama" type="text" name="namaDonatur" className="text-sm mb-[14px] block w-full p-3 rounded-[8px] bg-[#F9FAFB] border border-[#D1D5DB]" />
        <input {...register('emailDonatur',{ required: isChecked ? false : true })} disabled={isChecked} placeholder="Email" type="text" name="emailDonatur" className="text-sm block w-full p-3 rounded-[8px] bg-[#F9FAFB] border border-[#D1D5DB]" />
        <div className="flex items-center gap-1 mt-[19px] mb-[30px]">
          <input className="inline-block" type="checkbox" id="rahasiakan" name="rahasiakan" checked={isChecked} onChange={() => {
            setChecked(!isChecked)
            resetField('namaDonatur');
            resetField('emailDonatur');
            }} />
          <label className="text-[11px] block" for="rahasiakan">Sembunyikan nama saya (donasi anonim)</label>
        </div>
      </section>
      <section className="mb-7">
        <h2 className="font-semibold mb-[14px]">Tuliskan Harapanmu</h2>
        <textarea {...register('harapan')} name="harapan" id="harapan" rows="4" placeholder="Tuliskan harapanmu..." className="w-full rounded-[8px] text-sm placeholder:text-[#6B7280] p-3 bg-[#F9FAFB] border border-[#D1D5DB]"></textarea>
      </section>
      <section className="pb-[11px] border-b-2 border-[#FFDFE3] mb-[44px]">
        <h2 className="font-semibold mb-[14px]">Rincian Donasi</h2>
        <div className="flex text-xs font-medium mb-[9px]">
          <p className="flex-1">Pembalut</p>
          <p>{`${watch('banyakPembalut',0)}x`}</p>
          <p className="flex-1 text-right">{convertToRupiah(parseInt(watch('banyakPembalut',0)) * HARGA_KONSTAN.pembalut)}</p>
        </div>
        <div className="flex text-xs font-medium mb-[9px]">
          <p className="flex-1">Obat-obatan</p>
          <p>{`${watch('banyakObat',0)}x`}</p>
          <p className="flex-1 text-right">{convertToRupiah(parseInt(watch('banyakObat',0)) * HARGA_KONSTAN.obat)}</p>
        </div>
        <div className="flex text-xs font-medium mb-[9px]">
          <p className="flex-1">Menstrual Cup</p>
          <p>{`${watch('banyakMenstrual',0)}x`}</p>
          <p className="flex-1 text-right">{convertToRupiah(parseInt(watch('banyakMenstrual',0)) * HARGA_KONSTAN.menstrualCup)}</p>
        </div>
        <div className="flex text-xs font-medium mb-[9px]">
          <p className="flex-1">Tip Menstruaction</p>
          <p className="flex-1 text-right">{convertToRupiah(watch('totalDonasiMenstruaction',0))}</p>
        </div>
        <div className="flex text-xs font-medium">
          <p className="flex-1">Metode Pembayaran</p>
          <p className="flex-1 text-right">{watch('metodePembayaran')}</p>
        </div>
      </section>
      <section className="flex justify-between">
        <div>
          <h2 className="font-medium text-[11px] text-[#898989]">Total Donasi</h2>
          <p className="font-semibold text-xl">{convertToRupiah(returnTotalSumbanganDanDonasiMenstruaction())}</p>
        </div>
        <button type="submit" className="block min-w-[116px] text-sm text-white bg-[#F05252] py-[13px] rounded-[5px]">
        DONASI
        </button>
      </section>
      </form>
    </main>
    <Modal isOpen={isOpen} watch={watch} setValues={setValue} setIsOpen={setIsOpen} />
    </>
  )
}

export default FormDonasi;