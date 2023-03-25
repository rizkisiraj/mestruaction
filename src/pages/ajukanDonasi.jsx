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
    const fieldAjukanDonasi = useState(initialDonasi);
    const navigate = useNavigate();

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
            <form  className=" flex-1 relative">
              <FormAjukanDonasi fieldDonasi={fieldAjukanDonasi} setNextPage={setNextPage} isNextPage={isNextPage} />
            </form>
          </section>
          
        </section>
    )
}

export default AjukanDonasi;