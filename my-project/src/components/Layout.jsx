import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="content min-h-screen">
        {children} {/* This will render the content passed into Layout */}
      </div>
      <Footer />
    </div>
  )
}

export default Layout;
