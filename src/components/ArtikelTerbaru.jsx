
import art from '../assets/artikel.webp'

import { Link } from "react-router-dom";

function Artikel(){
    return(
        <div className="w-full h-auto my-5">
            <h2 className="text-[16px] font-semibold mb-4">Artikel Terbaru</h2>
            <div className="h-[203px] w-full border-2 rounded-lg border-[#FE6A705E] py-[10px] px-[14px] relative">
                <div className="w-full h-[80px] mx-auto"><img src={art} alt="" className='object-cover rounded-md'/></div>
                <h2 className="text-[16px] font-semibold mt-[17px]">Apa itu kemiskinan menstruasi?</h2>
                <Link className='w-[141px] h-[40px] bg-[#F64A4A] text-[12px] font-semibold text-white rounded-md absolute right-3 bottom-2 flex'
                    to ='edukasi/artikel/'>
                    <span className='m-auto'>BACA LEBIH LANJUT</span> 
                </Link>

            </div>
        </div>
    )
}
export default Artikel;