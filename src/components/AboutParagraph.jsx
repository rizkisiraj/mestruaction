import { useOutletContext } from "react-router-dom"

const AboutParagraph = () => {
  const { description } = useOutletContext();
  
  return (
    <div className="pb-4">
      <p>{description}</p>
    </div>
  )
}

export default AboutParagraph;