import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import WebLayout from "./components/weboutlet/WebLayout"

const App = () => {
  return (
    <>

    <Router>
      <Routes>
        <Route path="/" element={<WebLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
