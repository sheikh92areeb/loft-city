import { contactPageData } from "../assets/assets"
import ContactForm from "../components/ContactForm"
import LocationCard from "../components/LocationCard"
import Title from "../components/Title"

const Contact = () => {

  const {description, image, flexRev} = contactPageData

  return (
    <>
      <Title title="Contact Details" />
      <LocationCard description={description} image={image} flexRev={flexRev} />
      <ContactForm />
    </>
  )
}

export default Contact