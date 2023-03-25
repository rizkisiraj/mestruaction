const AjukanDonasiHeader = ({ isNextPage }) => {

    return (
        <section className={`pl-4 w-[500px] py-[13px] ${isNextPage && '-translate-x-28'} transition-all h-full flex items-center`}>
              <div className="flex items-center">
                <div className={`rounded-full ${!isNextPage ? 'bg-red-500' : 'bg-transparent'} h-[31px] w-[31px] text-center py-1 mr-2 border ${!isNextPage ? 'border-red-500' : 'border-[#c4c4c4]'}`}>
                    <span className={`text-base ${!isNextPage ? 'text-white' : 'text-[#c4c4c4]'}`}>1</span>
                </div>
                <p className={`${!isNextPage ? 'text-red-500' : 'text-[#c4c4c4]'}`}>Tujuan</p>
              </div>
              <div className="bg-[#C4C4C4] w-[39px] h-[3px] mx-4" />
              <div className="flex items-center">
                <div className={`rounded-full ${isNextPage ? 'bg-red-500' : 'bg-transparent'} h-[31px] w-[31px] text-center py-1 mr-2 border ${isNextPage ? 'border-red-500' : 'border-[#c4c4c4]'}`}>
                    <span className={`text-base ${isNextPage ? 'text-white' : 'text-[#c4c4c4]'}`}>2</span>
                </div>
                <p className={`${isNextPage ? 'text-red-500' : 'text-[#c4c4c4]'}`}>Data diri</p>
              </div>
              <div className="bg-[#C4C4C4] w-[39px] h-[3px] mx-4" />
              <div className="flex items-center">
                <div className="rounded-full bg-transparent h-[31px] w-[31px] text-center py-1 mr-2 border border-[#c4c4c4]">
                    <span className="text-base text-[#c4c4c4]">3</span>
                </div>
                <p className="text-[#c4c4c4]">Verifikasi</p>
              </div>
            </section>
    )
}

export default AjukanDonasiHeader;