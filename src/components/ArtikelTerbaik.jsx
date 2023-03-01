
import art from '../assets/art.webp'

import { useNavigate } from "react-router-dom";

function Artikel() {
    const navigate = useNavigate();
    return (
        <div className="px-6 w-full h-auto mt-9">
            <h2 className="font-semibold text-[16px] mb-4">Artikel Terbaik</h2>

            <div className='flex flex-col space-y-4'>

                <div className="h-[114px] w-full rounded-xl bg-[#FFF9FA] border-[1px] border-[#FE6A705E] flex p-4 justify-between "
                    onClick={() => navigate('artikel/')}>
                    <div className=" w-44 h-full">
                        <h3 className="text-[14px] font-semibold">Apa itu kemiskinan menstruasi?</h3>
                        <div className='font-medium text-[#898989] text-xs flex justify-between mt-4'>
                            <p>Naela Fauzul</p>
                            <p>20 Jan 2023</p>
                        </div>
                    </div>
                    <div className=" w-24 h-full rounded-xl">
                        <img src={art} alt="" className='w-full h-full object-cover rounded-xl ' />
                    </div>
                </div>

                <div className="h-[114px] w-full rounded-xl bg-[#FFF9FA] border-[1px] border-[#FE6A705E] flex p-4 justify-between ">
                    <div className=" w-44 h-full">
                        <h3 className="text-[14px] font-semibold">Apa itu kemiskinan menstruasi?</h3>
                        <div className='font-medium text-[#898989] text-xs flex justify-between mt-4'>
                            <p>Naela Fauzul</p>
                            <p>20 Jan 2023</p>
                        </div>
                    </div>
                    <div className=" w-24 h-full rounded-xl">
                        <img src={art} alt="" className='w-full h-full object-cover rounded-xl ' />
                    </div>
                </div>

                <div className="h-[114px] w-full rounded-xl bg-[#FFF9FA] border-[1px] border-[#FE6A705E] flex p-4 justify-between ">
                    <div className=" w-44 h-full">
                        <h3 className="text-[14px] font-semibold">Apa itu kemiskinan menstruasi?</h3>
                        <div className='font-medium text-[#898989] text-xs flex justify-between mt-4'>
                            <p>Naela Fauzul</p>
                            <p>20 Jan 2023</p>
                        </div>
                    </div>
                    <div className=" w-24 h-full rounded-xl">
                        <img src={art} alt="" className='w-full h-full object-cover rounded-xl ' />
                    </div>
                </div>

                <div className="h-[114px] w-full rounded-xl bg-[#FFF9FA] border-[1px] border-[#FE6A705E] flex p-4 justify-between ">
                    <div className=" w-44 h-full">
                        <h3 className="text-[14px] font-semibold">Apa itu kemiskinan menstruasi?</h3>
                        <div className='font-medium text-[#898989] text-xs flex justify-between mt-4'>
                            <p>Naela Fauzul</p>
                            <p>20 Jan 2023</p>
                        </div>
                    </div>
                    <div className=" w-24 h-full rounded-xl">
                        <img src={art} alt="" className='w-full h-full object-cover rounded-xl ' />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Artikel;