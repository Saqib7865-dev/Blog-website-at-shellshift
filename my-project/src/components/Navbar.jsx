import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className={`${
        isScroll ? "sticky bg-gray-200" : "static bg-transparent"
      } top-0 z-50 w-full`}
    >
      <nav className="flex justify-between items-center py-3 md:py-6 px-5 shadow">
        <div className="text-xl md:text-2xl font-bold text-teal-400 md:ml-10">
          <a href="/" className="flex items-center justify-center">
            <img className="h-10 md:h-12" src="/images/logo.png" alt="logo" />
            <span>StackTutor</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 list-none mr-12 cursor-pointer font-semibold">
          <li>
            <Link to="/" className="text-teal-500 hover:text-teal-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/my-blogs" className="text-teal-500 hover:text-teal-600">
              All Blogs
            </Link>
          </li>
          <li>
            <Link to="/faqs" className="text-teal-500 hover:text-teal-600">
              Faqs
            </Link>
          </li>
          <li>
            <Link
              to="/privacy-policy"
              className="text-teal-500 hover:text-teal-600"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              className="text-teal-500 hover:text-teal-600"
            >
              Contact US
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-2xl bg-none border-none text-white cursor-pointer"
          onClick={handleMobileMenuToggle}
        >
          {isMobileMenuOpen ? (
            <GiHamburgerMenu className="text-slate-800" />
          ) : (
            <GiHamburgerMenu className="text-slate-800" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden flex fixed top-0 right-0 bg-gray-700 w-full md:w-64 h-screen items-center justify-center gap-5 p-5 transform transition-transform duration-300 ease-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <IoMdClose
          className="text-white absolute top-6 right-5 text-2xl"
          onClick={() => setIsMobileMenuOpen(false)}
        ></IoMdClose>
        <ul
          className={`md:hidden flex flex-col items-center justify-center gap-5 p-5 transform transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <li>
            <Link to="/" className="text-white hover:text-teal-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/my-blogs" className="text-white hover:text-teal-300">
              All Blogs
            </Link>
          </li>
          <li>
            <Link to="/faqs" className="text-white hover:text-teal-300">
              Faqs
            </Link>
          </li>
          <li>
            <Link
              to="/privacy-policy"
              className="text-white hover:text-teal-300"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className="text-white hover:text-teal-300">
              Contact US
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
