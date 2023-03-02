import { useOutletContext } from "react-router-dom";
import dumpDonaturs from "../dumpDonatur";
import DonaturCard from "./DonaturCard";

const Donatur = () => {
  const { donors } = useOutletContext();

  return (
    <div className="pb-4">
      {
        donors.length ? donors.map(donor => <DonaturCard key={donor.id} donor={donor} />) :
        <p className="text-center">Belum ada donasi</p>
      }
    </div>
  )
}

export default Donatur;