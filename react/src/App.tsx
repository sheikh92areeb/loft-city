import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import NearbyAttractions from "./pages/NearbyAttractions"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Layout from "./components/Layout"


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route path="" element={<Home />} />
          <Route path="/nearby" element={<NearbyAttractions />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App