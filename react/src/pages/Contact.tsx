import { assets } from "../assets/assets"
import LocationCard from "../components/LocationCard"
import Title from "../components/Title"

const Contact = () => {
  return (
    <>
      <Title title="Contact Details" />
      <LocationCard description="If you have any questions, please contact us by telephone or email and we'll get back to you as soon as possible. We look forward to hearing from you." image={assets.Building} flexRev={false} />
    </>
  )
}

export default Contact