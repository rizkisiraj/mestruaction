
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import {getArtikel} from '../utils/firebase';


const convertSnapshotToArray = (snapshot) => {
    const arrayDump = [];
  
    snapshot.forEach(snap => {
      arrayDump.push({
        id: snap.id,
        ...snap.data()
    });
    })
  
    return arrayDump;
}

const convertTimestampToIndonesianDate = (date) => {
    return date.toDate().toDateString('id-ID').split(' ').slice(1).join(' ');
    
}

function Artikel() {
    const navigate = useNavigate();
    const [artikels, setArtikels] = useState ([])

    useEffect(() => {
        const getData = async () => {
          let artikelsDump = await getArtikel();

          artikelsDump = convertSnapshotToArray(artikelsDump);
          setArtikels(artikelsDump);
        }
    
        getData();
      },[])

    return (
        <div className="px-6 w-full h-auto mt-9">
            <h2 className="font-semibold text-[16px] mb-4">Artikel Terbaik</h2>

            <div className='flex flex-col space-y-4'>
                {artikels.map(item =>
                    <div key={item.id} className="min-h-[114px] w-full rounded-xl bg-[#FFF9FA] border-[1px] border-[#FE6A705E] flex p-4 justify-between "
                        onClick={() => navigate(`artikel/${item.id}`)}>
                        <div className=" w-44 h-full">
                            <h3 className="text-[14px] font-semibold">{item.title}</h3>
                            <div className='font-medium text-[#898989] text-xs flex justify-between mt-4'>
                                <p>{item.author}</p>
                                <p>{convertTimestampToIndonesianDate(item.created_at)}</p>
                            </div>
                        </div>
                        <div className=" w-24 h-[72px] rounded-xl">
                            <img src={item.gambar} alt="" className='w-full h-full object-cover rounded-xl ' />
                        </div>
                    </div>
                 )}
            </div>


        </div>
    )
}

export default Artikel;