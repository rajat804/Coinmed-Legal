import { Outlet } from "react-router-dom"
import Header from "../Header"
import TopBar from "../TopBar"
import Footer from "../Footer"
import FloatingButtons from "../FloatingButtons"

const WebLayout = () => {
  return (
    <>
        <TopBar />
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
        <FloatingButtons />
    </>
  )
}

export default WebLayout
