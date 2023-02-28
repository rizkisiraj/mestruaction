import dumpDonaturs from "../dumpDonatur";
import Avatar from "../assets/avatar.svg";
import DonaturCard from "./DonaturCard";

const convertToRupiah = (number) => {
    return 'Rp' + new Intl.NumberFormat("id-ID", {
      currency: "IDR"
    }).format(number);
}

const Donatur = () => {
  return (
    <div className="pb-4">
      <DonaturCard donor={dumpDonaturs} />
    </div>
  )
}

export default Donatur;