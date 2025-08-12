import BookUs from "../components/BookUs"
import Features from "../components/Features"
import Hero from "../components/Hero"
import Info from "../components/Info"
import Testimonials from "../components/Testimonials"

interface InfoProps {
    heading: string,
    body: string
}

const infoPropsData: InfoProps = {
  heading: "Loft City - Urban Holiday Rentals in Karachi",
  body: "Loft City is One of the best Vacation Rental Company. Which provide you the best Holidays Packages on your Desire Place. Travel with us for better experience of Exploring the World and Enjoying the Holidays. we have the great places for you, So come and make plane with us of your Vacation."
}

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Info heading={infoPropsData.heading} body={infoPropsData.body}/>
      <BookUs />
      <Testimonials />
    </>
  )
}

export default Home
