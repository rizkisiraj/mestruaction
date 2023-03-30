import { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import AjukanDonasiHeader from "../components/AjukanDonasiHeader";
import FormAjukanDonasi from "../components/FormAjukanDonasi";

const initialDonasi = {
  targetBantuan: '',
  lokasi: '',
  permasalahan: '',
  namaLengkap: '',
  emailPribadi: '',
  nomorPonsel: '',
  pekerjaanSaatIni: '',
  namaInstansi: '',
}

const AjukanDonasi = () => {
    const [isNextPage, setNextPage] = useState(false);
    const [fieldAjukanDonasi, setFieldAjukanDonasi] = useState(initialDonasi);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();

      if( !fieldAjukanDonasi.targetBantuan || !fieldAjukanDonasi.lokasi || !fieldAjukanDonasi.permasalahan ) {
        setNextPage(false);
        return;
      } else if ( !fieldAjukanDonasi.namaLengkap || !fieldAjukanDonasi.emailPribadi || !fieldAjukanDonasi.nomorPonsel || !fieldAjukanDonasi.pekerjaanSaatIni || !fieldAjukanDonasi.namaInstansi ) {
        return;
      }

      window.location.href = `mailto:21523224@students.uii.ac.id?subject=Pengajuan Donasi Menstruaction&body=Salam Admin Menstruaction,Saya ${fieldAjukanDonasi.namaLengkap} selaku ${fieldAjukanDonasi.pekerjaanSaatIni} dari ${fieldAjukanDonasi.namaInstansi}, ingin mengajukan donasi dengan detail sebagai berikut : %0D%0A
      Target Bantuan : ${fieldAjukanDonasi.targetBantuan} %0D%0A
      Lokasi : ${fieldAjukanDonasi.lokasi} %0D%0A
      Permasalahan : ${fieldAjukanDonasi.permasalahan} %0D%0A
      Besar harapan saya agar Anda menerima pengajuan bantuan dari saya ini. Untuk detail selanjutnya Anda bisa menghubungi ${!fieldAjukanDonasi.nomorPonsel} %0D%0A
      Terima Kasih
      `;
    }

    return (
        <section className="w-full py-8">
          <button onClick={() => navigate('../')} aria-label="back button" className="ml-4 cursor-pointer">
            <MdArrowBackIos size={35}/>
          </button>
          <aside className="w-full bg-[#f5f5f5] h-auto overflow-x-hidden">
           <AjukanDonasiHeader isNextPage={isNextPage} />
          </aside>
          <section className="px-6 pt-5 min-h-[80vh] flex flex-col">
            {
              !isNextPage && 
              <div className="mb-6">
              <h1 className="text-lg font-bold">Hai, #TemanAksi!</h1>
              <p className="font-semibold">Kamu mau ajukan bantuan untuk...</p>
              </div>
            }
            <form onSubmit={handleSubmit} className="flex-1 relative">
              <FormAjukanDonasi fieldDonasi={fieldAjukanDonasi} setNextPage={setNextPage} isNextPage={isNextPage} setFieldAjukanDonasi={setFieldAjukanDonasi} />
            </form>
          </section>
        </section>
    )
}

export default AjukanDonasi;