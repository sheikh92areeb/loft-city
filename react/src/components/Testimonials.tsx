import { FaUser } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="bg-gray-100 px-8 md:px-16 lg:px-24 py-4">
      <h3 className="text-2xl mb-8">People say the nicest things…</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="card bg-white w-[300px] rounded-lg shadow-lg p-4">
            <div className="icon"><FaUser /></div>
            <div className="stars">stars</div>
            <div className="msg">user message</div>
            <div className="name">user name</div>
        </div>
        <div className="card">
            <div className="icon">user icon</div>
            <div className="stars">stars</div>
            <div className="msg">user message</div>
            <div className="name">user name</div>
        </div>
        <div className="card">
            <div className="icon">user icon</div>
            <div className="stars">stars</div>
            <div className="msg">user message</div>
            <div className="name">user name</div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
