import { Outlet } from "react-router-dom"
import Header from "../Header"
import TopBar from "../TopBar"
import Footer from "../Footer"

const WebLayout = () => {
  return (
    <>
        <TopBar />
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </>
  )
}

export default WebLayout
