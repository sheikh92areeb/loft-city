import type { FC } from "react"

interface ServiceData {
    serviceCat: string,
    serviceList: string[]
}

const ServiceCard: FC<ServiceData> = ({serviceCat, serviceList}) => {
  return (
    <div className="mb-4">
        <h3 className="text-2xl mb-8">{serviceCat}</h3>
        <ul className="list-disc ps-4">
            {serviceList.map((service, index) => (
                <li key={index} className="mb-1 text-sm">{service}</li>
            ))}            
        </ul>
    </div>
  )
}

export default ServiceCard
