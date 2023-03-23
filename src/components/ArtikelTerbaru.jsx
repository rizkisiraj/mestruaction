
import art from '../assets/artikel.webp'

import { Link } from "react-router-dom";
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

function Artikel(){
    const [artikels, setArtikels] = useState ([])

    useEffect(() => {
        const getData = async () => {
          let artikelsDump = await getArtikel();

          artikelsDump = convertSnapshotToArray(artikelsDump);
          setArtikels(artikelsDump[0]);
        }
    
        getData();
      },[])

    return(
        <div className="w-full h-auto my-5">
            <h2 className="text-[16px] font-semibold mb-4">Artikel Terbaru</h2>
            <div className="min-h-fit w-full border-2 rounded-lg border-[#FE6A705E] py-[10px] px-[14px] relative">
                <div className="w-full h-[100px] mx-auto"><img src={artikels.gambar} alt="" className='h-[100px] w-full object-cover rounded-md'/></div>
                <h2 className="text-[16px] font-semibold mt-[17px] mb-10">{artikels.title}</h2>
                <Link className='w-[141px] h-[40px] bg-[#F64A4A] text-[12px] font-semibold text-white rounded-md absolute right-3 bottom-2 flex'
                    to ={`edukasi/artikel/${artikels.id}`}>
                    <span className='m-auto'>BACA LEBIH LANJUT</span> 
                </Link>

            </div>
        </div>
    )
}
export default Artikel;