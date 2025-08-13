import { HomePageInfoPropsData } from "../assets/assets"
import BookUs from "../components/BookUs"
import Features from "../components/Features"
import Hero from "../components/Hero"
import Info from "../components/Info"
import Testimonials from "../components/Testimonials"

const Home = () => {

  const {heading, body} = HomePageInfoPropsData
  
  return (
    <>
      <Hero />
      <Features />
      <Info heading={heading} body={body}/>
      <BookUs />
      <Testimonials />
    </>
  )
}

export default Home
