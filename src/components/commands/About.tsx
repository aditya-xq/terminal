import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled"
import data from "../../data.json"

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Kon'nichiwa, I'm <HighlightSpan>{data.name}</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a full-stack, applied AI engineer</HighlightAlt> based
        in Bengaluru, India.
      </p>
      <p>
        Give me a problem, vision, or desired outcome — I’ll figure out the
        rest.
        <br />
        Tech agnostic. Context-first. Results-driven.
      </p>
    </AboutWrapper>
  )
}

export default About
