import { useState, type FormEvent } from "react"
import { useNavigate } from "react-router"

const contactLinks: Readonly<[string, string, string]> = ['info@loftcity.com', 'booking@loftcity.com', '+1 (345) 789 444']

const ContactForm = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")

    const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        navigate('/')
        alert("Thanks! Your message has been sent.")
    }

  return (
    <div className="flex max-sm:flex-col-reverse items-center justify-between gap-5 px-8 md:px-16 lg:px-24">
      <div className="form flex-1/2 px-4 mb-4">
        <h2 className="text-3xl mb-2">Send Us a Message</h2>
        <p className="mb-8">Have a question or special request? Fill out the form below and our team will get back to you within 24 hours.</p>
        <form onSubmit={onSubmitHandler}>
            <div className="input-box max-w-[300px] mb-3">
                <input onChange={(e) => setName(e.target.value)} value={name} type="text" name="name" placeholder="Name" className="w-full border border-gray-500 focus:border-gray-900 px-2 py-1 outline-0 rounded-md" required autoComplete="name" />
            </div>
            <div className="input-box max-w-[300px] mb-3">
                <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="email" placeholder="Email" className="w-full border border-gray-500 focus:border-gray-900 px-2 py-1 outline-0 rounded-md" required  autoComplete="email"/>
            </div>
            <div className="input-box max-w-[300px] mb-3">
                <input onChange={(e) => setPhone(e.target.value)} value={phone} type="tel" name="phone" placeholder="Phone" className="w-full border border-gray-500 focus:border-gray-900 px-2 py-1 outline-0 rounded-md" autoComplete="tel" />
            </div>
            <div className="input-box max-w-[300px] mb-3">
                <textarea onChange={(e) => setMessage(e.target.value)} value={message} name="message" placeholder="Tell us about your trip, dates, number of guests, and any special requests." rows={6} className="w-full border border-gray-500 focus:border-gray-900 px-2 py-1 outline-0 rounded-md resize-none" required></textarea>
            </div>
            <div className="btn max-w-[300px] mb-3">
                <button type="submit" className="w-full border bg-gray-700 hover:bg-gray-900 text-white px-2 py-1 outline-0 rounded-md cursor-pointer">Submit</button>
            </div>
        </form>
        <p className="text-sm">We aim to make your vacation planning effortless and enjoyable. Your dream stay starts here!</p>
      </div>
      <div className="address flex-1/2 px-4 mb-5">
        <h2 className="text-3xl mb-8">Loft City</h2>
        <div className="mb-4">
            <h3 className="text-xl font-medium mb-2">Office Address</h3>
            <p>Loft City Vacation Rentals 123 Paradise Street,<br/> Downtown, Karachi, Pakistan</p>
        </div>
        <div className="mb-4">
            <h3 className="text-xl font-medium mb-2">Call Us</h3>
            <a href={`tel:${contactLinks[2]}`} className="block hover:underline underline-offset-4">
                <span className="font-medium">Phone:</span> {contactLinks[2]}
            </a>
            <a href={`tel:${contactLinks[2]}`} className="block hover:underline underline-offset-4">
                <span className="font-medium">WhatsApp:</span> {contactLinks[2]}
            </a>
        </div>
        <div className="mb-4">
            <h3 className="text-xl font-medium mb-2">Email Us</h3>
            <a href={`mailto:${contactLinks[0]}`} className="block hover:underline underline-offset-4">
                <span className="font-medium">General Inquiries:</span> {contactLinks[0]}
            </a>
            <a href={`mailto:${contactLinks[1]}`} className="block hover:underline underline-offset-4">
                <span className="font-medium">Bookings & Reservations:</span> {contactLinks[1]}
            </a>
        </div>
        <div className="mb-4">
            <h3 className="text-xl font-medium mb-2">Business Hours</h3>
            <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
            <p>Saturday: 10:00 AM - 5:00 PM</p>
            <p>Sunday: Closed</p>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
