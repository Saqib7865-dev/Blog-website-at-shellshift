import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="content">
        {children} {/* This will render the content passed into Layout */}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
