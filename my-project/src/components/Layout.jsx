import Footer from "./Footer"
// import Navbar from "./Navbar"

const Layout = ({children}) => {
  return (
    <div>
      <h1 className="text-xl font-bold text-gray-800 text-center">Navbar</h1>
      <div className="content min-h-screen">
      {children}

      </div>
    <Footer/>
    
    </div>
  )
}
export default Layout
