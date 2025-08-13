import { aboutPageInfoPropsData } from "../assets/assets"
import Info from "../components/Info"
import Services from "../components/Services"
import Title from "../components/Title"

const About = () => {
  const { heading, body } = aboutPageInfoPropsData
  return (
    <>
      <Title title="About" />
      <Info heading={heading} body={body}/>
      <div className="w-full h-70 bg-[linear-gradient(to_right,rgba(0,0,0,0.2),rgba(0,0,0,0.5)),url('/bg.jpg')] bg-cover bg-center bg-no-repeat"></div>
      <Services />
    </>
  )
}

export default About
