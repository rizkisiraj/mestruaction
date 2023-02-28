import { useOutletContext } from "react-router-dom"

const AboutParagraph = () => {
  const content = useOutletContext();
  
  return (
    <div className="pb-4">
      <p>{content}</p>
    </div>
  )
}

export default AboutParagraph;