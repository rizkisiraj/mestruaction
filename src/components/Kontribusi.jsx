import { useEffect, useState } from 'react';
import { getKontribusi } from '../utils/firebase'
import { Link } from "react-router-dom";

import img1 from '../assets/kontribusi1.webp'

const convertSnapshotToArray = (snapshot) => {
    const arrayDump = [];

    snapshot.forEach(snap => {
        arrayDump.push(snap.data());
    })

    return arrayDump;
}

function Kontribusi() {

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
        <div className='w-full h-auto my-12'>
            <div className="flex justify-between font-semibold items-center mb-5">
                <h2 className="text-[16px]">Kontribusi #TemanAksi</h2>
                <Link className="text-[12px] text-[#F64A4A]" to='kontribusi/'>Lihat lebih</Link>
            </div>

            <div className="w-full h-[250px] flex justify-between">
            {kontribusi.map(item =>
                <div key={item.id} className="w-[162px] h-full bg-white rounded-lg border-[1px] border-gray-300">
                    <img src={item.gambar} alt="" className='h-[139px] w-full rounded-t-lg object-cover' />
                    <div className="px-1 text-[11px] font-semibold mt-2">
                        <h2>
                            <span className='text-[#E4141D]'> #TemanAksi</span>
                            <br />
                            {item.title}
                        </h2>
                    </div>
                </div>
            )}
                

            </div>
        </div>
    )
}
export default Kontribusi;