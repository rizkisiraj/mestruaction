const AjukanDonasi = () => {
    return (
        <section className="w-full pt-10">
          <aside className="w-full bg-[#f5f5f5] h-auto overflow-x-hidden">
            <section className="pl-4 w-[500px] py-[13px] h-full flex items-center">
              <div className="flex items-center">
                <div className="rounded-full bg-red-500 h-[31px] w-[31px] text-center py-1 mr-2 border border-red-500">
                    <span className="text-base text-white">1</span>
                </div>
                <p className="text-red-500">Tujuan</p>
              </div>
              <div className="bg-[#C4C4C4] w-[39px] h-[3px] mx-4" />
              <div className="flex items-center">
                <div className="rounded-full bg-transparent h-[31px] w-[31px] text-center py-1 mr-2 border border-[#c4c4c4]">
                    <span className="text-base text-[#c4c4c4]">2</span>
                </div>
                <p className="text-[#c4c4c4]">Data diri</p>
              </div>
              <div className="bg-[#C4C4C4] w-[39px] h-[3px] mx-4" />
              <div className="flex items-center">
                <div className="rounded-full bg-transparent h-[31px] w-[31px] text-center py-1 mr-2 border border-[#c4c4c4]">
                    <span className="text-base text-[#c4c4c4]">3</span>
                </div>
                <p className="text-[#c4c4c4]">Verifikasi</p>
              </div>
            </section>
          </aside>
        </section>
    )
}

export default AjukanDonasi;