import DumpDataTimeline from "../dumpDonationsTimeline";
import TimelineCard from "./TimelineCard";

const DonationTimeline = () => {
  return (
    <div className="flex flex-col gap-7 relative w-full before:h-full before:w-[1px] before:bg-slate-300 before:absolute pb-3">
      {
        DumpDataTimeline.map(timelineObj => {
          return (
            <TimelineCard key={timelineObj.id} timelineObj={timelineObj} />
          )
        })
      }
    </div>
  )
}

export default DonationTimeline;