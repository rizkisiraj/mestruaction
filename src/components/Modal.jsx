const Modal = ({ isOpen, setIsOpen, setValues, watch, rekening, namaAkun, uangDigital }) => {
  
  const handleTransferBank = (e) => {
    e.stopPropagation();
    setValues('metodePembayaran','Transfer Bank');
  }

  const handleUangDigital = (e) => {
    e.stopPropagation();
    setValues('metodePembayaran','Uang Digital');
  }

  return (
        <div onClick={() => setIsOpen(false)} className={`h-screen flex items-center ${isOpen ? 'block' : 'hidden'} overflow-y-hidden w-full max-w-sm fixed top-0 bg-[rgba(0,0,0,.8)]`}>
          <div className="w-full bg-white px-[13px] py-[22px] ">
            <button onClick={handleTransferBank} className={`font-semibold p-[10px] rounded-[5px] mb-3 block w-full bg-[#F9FAFB] ${watch('metodePembayaran') === 'Transfer Bank' ? 'bg-[#FFF9FA] border border-[#FE6A70]' : 'border border-[#D1D5DB]' }`}>
                <span className="block">Transfer Bank (Verifikasi Manual 1x24 jam)</span>
                <span className="block">{rekening} a/n {namaAkun}</span>
            </button>
            <button onClick={handleUangDigital} className={`font-semibold p-[10px] rounded-[5px] mb-3 block w-full bg-[#F9FAFB] ${watch('metodePembayaran') === 'Uang Digital' ? 'bg-[#FFF9FA] border border-[#FE6A70]' : 'border border-[#D1D5DB]' }`}>
                <span className="block">Uang Digital (Verifikasi Manual 1x24 jam)</span>
                <span className="block">{uangDigital} a/n {namaAkun}</span>
            </button>
          </div>
        </div>

  )
}

export default Modal;