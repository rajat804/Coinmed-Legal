import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import WebLayout from "./components/weboutlet/WebLayout"
import AboutUs from "./pages/Aboutus"
import FAQ from "./pages/Faq"
import Gallery from "./pages/Gallery"
import Attorneys from "./pages/Attorneys"
import Internship from "./pages/Internship"
import AdvisoryMembers from "./pages/AdvisoryMembers"
import BlogPage from "./pages/BlogPage"
import Contact from "./pages/Contact"

const App = () => {
  return (
    <>

    <Router>
      <Routes>
        <Route path="/" element={<WebLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/attorney" element={<Attorneys />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/members" element={<AdvisoryMembers />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
