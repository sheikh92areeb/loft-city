import { serviceData } from "../assets/assets"
import ServiceCard from "./ServiceCard"

const Services = () => {
  return (
    <div className="bg-gray-100 py-5">
      <h2 className="bg-white text-4xl py-5 px-8 md:px-16 lg:px-24">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-8 md:px-16 lg:px-24 pt-6">
        {serviceData.map(({serviceCat, serviceList }, index) => (
            <ServiceCard key={index} serviceCat={serviceCat} serviceList={serviceList} />
        ))}
      </div>
    </div>
  )
}

export default Services