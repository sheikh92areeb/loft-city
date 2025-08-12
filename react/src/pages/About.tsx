import Info from "../components/Info"
import Services from "../components/Services"
import Title from "../components/Title"

interface InfoProps {
    heading: string,
    body: string
}

const infoPropsData: InfoProps = {
  heading: "There's a new way to stay in a city:live like a local.",
  body: "We provide fully furnished,high-end,affordable homes ranging from one bedroom to as large as eight bedrooms. You can rely on us to find you a perfect place to call home during your stay in city. Our goal is to provide you with an unforgettable living experience."
}

const About = () => {
  return (
    <>
      <Title title="About" />
      <Info heading={infoPropsData.heading} body={infoPropsData.body}/>
      <div className="w-full h-70 bg-[linear-gradient(to_right,rgba(0,0,0,0.2),rgba(0,0,0,0.5)),url('/bg.jpg')] bg-cover bg-center bg-no-repeat"></div>
      <Services />
    </>
  )
}

export default About
