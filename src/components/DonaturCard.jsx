import Avatar from "../assets/avatar.svg";

const convertToRupiah = (number) => {
    return 'Rp' + new Intl.NumberFormat("id-ID", {
      currency: "IDR"
    }).format(number);
}

const convertTimestampToIndonesianDate = (date) => {
  return date.toDate().toDateString('id-ID');
}

const DonaturCard = ({ donor }) => {
  return (
    <div className="bg-slate-100 rounded-[5px] flex px-4 py-3 gap-5 mb-4">
    <div>
        <img src={Avatar} alt="avatar" />
    </div>
    <div>
      <h3 className="font-semibold text-sm mb-1">{donor.name}</h3>
      <p className="text-xs mb-1">Berdonasi sebesar <strong>{convertToRupiah(donor.totalDonation)}</strong></p>
      <span className="block text-[10px] text-slate-500">{convertTimestampToIndonesianDate(donor.created_at)}</span>
    </div>
  </div>
  )
}

export default DonaturCard;