const TimelineCard = ({ timelineObj }) => {
  return (
    <div className="w-full pl-3">
      <p className="text-xs text-slate-300">{timelineObj.date}</p>
      <p className="text-sm font-semibold relative border-b-2 mb-3 border-red-200 before:absolute before:bg-red-500 before:w-[6px] before:h-[6px] before:top-2 before:-left-[12px] before:-translate-x-1/2 before:rounded-full">{timelineObj.title}</p>
      <p className="text-xs font-medium">Rencana penggunaan dana pencairan :</p>
      <p className="text-xs font-medium">{timelineObj.description}</p>
    </div>
  )
}

export default TimelineCard;