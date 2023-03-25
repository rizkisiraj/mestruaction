const FormAjukanDonasi = ({fieldDonasi, setNextPage, isNextPage}) => {
  
    return (
        <div className="min-h-max">
          {
            !isNextPage ?
            <> 
            <label htmlFor="targetBantuan" className="block font-medium mb-2">Target Bantuan</label>
            <input type="text" name="targetBantuan" className="p-3 block w-full rounded-[8px] border border-[#D1D5DB] bg-[#F9FAFB] mb-3" id="targetBantuan" placeholder="Target Bantuan" />
            <label htmlFor="targetBantuan" className="block font-medium mb-2">Lokasi</label>
            <input type="text" name="lokasi" className="p-3 block w-full rounded-[8px] border border-[#D1D5DB] bg-[#F9FAFB] mb-3" id="lokasi" placeholder="Lokasi" />
            <label htmlFor="targetBantuan" className="block font-medium mb-2">Permasalahan</label>
            <textarea rows={5} name="permasalahan" className="p-3 block w-full rounded-[8px] border border-[#D1D5DB] bg-[#F9FAFB] mb-3" id="permasalahan" placeholder="Permasalahan..." />
            <button type="button" onClick={() => setNextPage(true)} className="block text-white bg-red-500 w-full py-3 text-sm rounded-[5px]">Selanjutnya</button>
            </> :
            <>
            <label htmlFor="namaLengkap" className="block font-medium mb-2">Nama lengkapmu (sesuai KTP)</label>
            <input type="text" name="namaLengkap" className="p-3 block w-full rounded-[8px] border border-[#D1D5DB] bg-[#F9FAFB] mb-3" id="namaLengkap" placeholder="Nama lengkapmu (sesuai KTP)" />
            <label htmlFor="email" className="block font-medium mb-2">Email Pribadimu</label>
            <input type="email" name="emailPribadi" className="p-3 block w-full rounded-[8px] border border-[#D1D5DB] bg-[#F9FAFB] mb-3" id="emailPribadi" placeholder="Email Pribadimu" />
            <label htmlFor="nomorPonsel" className="block font-medium mb-2">Nomor Ponselmu</label>
            <input type="tel" name="nomorPonsel" className="p-3 block w-full rounded-[8px] border border-[#D1D5DB] bg-[#F9FAFB] mb-3" id="nomorPonsel" placeholder="Email Pribadimu" />
            <label htmlFor="pekerjaan" className="block font-medium mb-2">Pekerjaanmu saat ini</label>
            <input type="text" name="pekerjaan" className="p-3 block w-full rounded-[8px] border border-[#D1D5DB] bg-[#F9FAFB] mb-3" id="pekerjaan" placeholder="Pekerjaanmu saat ini" />
            <label htmlFor="namaInstansi" className="block font-medium mb-2">Nama sekolah / tempat kerja</label>
            <input type="text" name="namaInstansi" className="p-3 block w-full rounded-[8px] border border-[#D1D5DB] bg-[#F9FAFB] mb-3" id="namaInstansi" placeholder="Nama sekolah / tempat kerjamu..." />
            <div className="flex gap-2">
             <button type="button" onClick={() => setNextPage(false)} className="block text-black w-full py-3 font-semibold text-sm rounded-[5px]">Sebelumnya</button>
             <button type="button" onClick={() => setNextPage(true)} className="block text-white bg-red-500 w-full py-3 text-sm rounded-[5px]">Selanjutnya</button>
            </div>
            </>
          }
        </div>
    )
}

export default FormAjukanDonasi;