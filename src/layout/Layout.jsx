import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Layout() {
    return (
    <div>
        <Navbar />
        <div className="main-body" >
        </div>
        <Outlet />
        <Footer />
    </div >
  )
}

export default Layout