const FormAjukanDonasi = ({fieldDonasi, setNextPage, isNextPage, setFieldAjukanDonasi}) => {
  const { targetBantuan, lokasi, permasalahan, namaLengkap, emailPribadi, nomorPonsel, pekerjaanSaatIni, namaInstansi } = fieldDonasi;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFieldAjukanDonasi({
        ...fieldDonasi,
        [name]: value
    });
  }

    return (
        <div className="min-h-max">
          {
            !isNextPage ?
            <> 
            <label htmlFor="targetBantuan" className="block font-medium mb-2">Target Bantuan</label>
            <input onChange={handleChange} type="text" name="targetBantuan" className="p-3 block w-full rounded-[8px] border border-[#D1D5DB] bg-[#F9FAFB] mb-3" id="targetBantuan" placeholder="Target Bantuan" value={targetBantuan} />
            <label htmlFor="targetBantuan" className="block font-medium mb-2">Lokasi</label>
            <input onChange={handleChange} value={lokasi} type="text" name="lokasi" className="p-3 block w-full rounded-[8px] border border-[#D1D5DB] bg-[#F9FAFB] mb-3" id="lokasi" placeholder="Lokasi" />
            <label htmlFor="targetBantuan" className="block font-medium mb-2">Permasalahan</label>
            <textarea onChange={handleChange} value={permasalahan} rows={5} name="permasalahan" className="p-3 block w-full rounded-[8px] border border-[#D1D5DB] bg-[#F9FAFB] mb-3" id="permasalahan" placeholder="Permasalahan..." />
            <button type="button" onClick={() => setNextPage(true)} className="block text-white bg-red-500 w-full py-3 text-sm rounded-[5px]">Selanjutnya</button>
            </> :
            <>
            <label htmlFor="namaLengkap" className="block font-medium mb-2">Nama lengkapmu (sesuai KTP)</label>
            <input onChange={handleChange} value={namaLengkap} type="text" name="namaLengkap" className="p-3 block w-full rounded-[8px] border border-[#D1D5DB] bg-[#F9FAFB] mb-3" id="namaLengkap" placeholder="Nama lengkapmu (sesuai KTP)" />
            <label htmlFor="email" className="block font-medium mb-2">Email Pribadimu</label>
            <input onChange={handleChange} value={emailPribadi} type="email" name="emailPribadi" className="p-3 block w-full rounded-[8px] border border-[#D1D5DB] bg-[#F9FAFB] mb-3" id="emailPribadi" placeholder="Email Pribadimu" />
            <label htmlFor="nomorPonsel" className="block font-medium mb-2">Nomor Ponselmu</label>
            <input onChange={handleChange} value={nomorPonsel} type="tel" name="nomorPonsel" className="p-3 block w-full rounded-[8px] border border-[#D1D5DB] bg-[#F9FAFB] mb-3" id="nomorPonsel" placeholder="Email Pribadimu" />
            <label htmlFor="pekerjaan" className="block font-medium mb-2">Pekerjaanmu saat ini</label>
            <input onChange={handleChange} value={pekerjaanSaatIni} type="text" name="pekerjaanSaatIni" className="p-3 block w-full rounded-[8px] border border-[#D1D5DB] bg-[#F9FAFB] mb-3" id="pekerjaan" placeholder="Pekerjaanmu saat ini" />
            <label htmlFor="namaInstansi" className="block font-medium mb-2">Nama sekolah / tempat kerja</label>
            <input onChange={handleChange} value={namaInstansi} type="text" name="namaInstansi" className="p-3 block w-full rounded-[8px] border border-[#D1D5DB] bg-[#F9FAFB] mb-3" id="namaInstansi" placeholder="Nama sekolah / tempat kerjamu..." />
            <div className="flex gap-2">
             <button type="button" onClick={() => setNextPage(false)} className="block text-black w-full py-3 font-semibold text-sm rounded-[5px]">Sebelumnya</button>
             <button type="submit" className="block text-white bg-red-500 w-full py-3 text-sm rounded-[5px]">Selanjutnya</button>
            </div>
            </>
          }
        </div>
    )
}

export default FormAjukanDonasi;