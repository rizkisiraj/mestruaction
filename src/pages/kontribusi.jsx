import { MdArrowBackIos } from 'react-icons/md'
import { useNavigate } from 'react-router'

import img1 from '../assets/kontribusi1.webp'
import img2 from '../assets/kontribusi2.webp'
import img3 from '../assets/kontribusi3.webp'

import { useEffect, useState } from 'react';
import { getKontribusi } from '../utils/firebase'

const convertSnapshotToArray = (snapshot) => {
    const arrayDump = [];

    snapshot.forEach(snap => {
        arrayDump.push(snap.data());
    })

    return arrayDump;
}

const convertTimestampToIndonesianDate = (date) => {
    return date.toDate().toDateString('id-ID').split(' ').slice(1).join(' ');

}

function Kontribusi() {
    const navigate = useNavigate()

    const [kontribusi, setKontribusi] = useState([])

    useEffect(() => {
        const getData = async () => {
            let kontribusiDump = await getKontribusi();

            kontribusiDump = convertSnapshotToArray(kontribusiDump);
            setKontribusi(kontribusiDump);
        }

        getData();
    }, [])

    return (
        <div className="py-10 bg-white">
            {/* back */}
            <div className=' h-10 w-full flex items-center space-x-[5px] mb-7 pr-6 pl-3'>
                <MdArrowBackIos size={30} onClick={() => navigate('../')} />
                <p className='text-[16px] font-semibold text-black/70'>Kontribusi #TemanAksi</p>
            </div>


            <div className='w-full h-auto px-6 space-y-4'>
                {kontribusi.map(item =>
                    <div className=' min-h-[235px] w-full border-[#FE6A705E] border-[1px] bg-[#FFF9FA] rounded-lg p-3'>
                        <div className='w-full h-[133px] rounded-md'>
                            <img src={img1} alt="" className='w-full h-full object-cover rounded-md' />
                        </div>
                        <h2 className=' font-medium text-sm mt-3'><span className='text-[#E4141D]'>#TemanAksi </span>{item.title}</h2>
                        <p className=' font-medium text-[12px] text-[#898989] mt-2'>{convertTimestampToIndonesianDate(item.created_at)}</p>
                    </div>
                )}
            </div>


        </div>
    )
}
export default Kontribusi;
