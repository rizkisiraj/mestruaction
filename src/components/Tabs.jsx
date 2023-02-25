import { useState } from "react";
import Donations from "../dumpData";

const Tabs = ({ activeLink }) => {
  
 const [ content, setContent ] = useState({});


 return (
  <section>
    <div className="mb-10 flex justify-between w-full text-center">
       {['tentang','perkembangan','donasi'].map(link => {
        return (
            <button key={link} className={`block pb-2 flex-1 font-semibold capitalize ${activeLink === link ? 'border-b-2 border-red-500 text-black' : 'text-slate-300'}`}>{link}</button>  
        )
       })}
    </div>
    <div>
      <p>{Donations[0].description}</p>
    </div>
  </section>
 ) 
}

export default Tabs;