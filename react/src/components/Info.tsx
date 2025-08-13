import type { FC } from "react"
import type { InfoProps } from "../assets/interfaces"

const Info: FC<InfoProps> = ({heading, body}) => {
  return (
    <div className="bg-gray-100 px-8 md:px-16 lg:px-24 py-8">
      <h2 className="text-3xl sm:text-4xl mb-8">{heading}</h2>
      <p className="w-[80%] text-lg tracking-wide">{body}</p>
    </div>
  )
}

export default Info
