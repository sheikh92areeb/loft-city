import { IoWifi } from "react-icons/io5";
import { BsLamp } from "react-icons/bs";
import { CiParking1 } from "react-icons/ci";
import { SlPlane } from "react-icons/sl";
import { GiBroom } from "react-icons/gi";




const Features = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 px-8 md:px-16 lg:px-24 py-2">
      <h1 className="text-center"><IoWifi /></h1>      
      <h1 className="text-center"><BsLamp /></h1>      
      <h1 className="text-center"><CiParking1 /></h1>      
      <h1 className="text-center"><SlPlane /></h1>      
      <h1 className="text-center"><GiBroom /></h1>      
    </div>
  )
}

export default Features
