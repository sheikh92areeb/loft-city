import { assets } from "../assets/assets"
import ContactForm from "../components/ContactForm"
import LocationCard from "../components/LocationCard"
import Title from "../components/Title"

const Contact = () => {
  return (
    <>
      <Title title="Contact Details" />
      <LocationCard description={`At Loft City, your comfort and convenience are our top priorities. Whether you have a question about our rentals, need assistance with booking, or simply want to learn more about our services, we’re here to help. If you have any questions, please contact us by telephone or email and we'll get back to you as soon as possible. We look forward to hearing from you.`} image={assets.Building} flexRev={false} />
      <ContactForm />
    </>
  )
}

export default Contact