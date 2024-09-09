import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const styles = {
    navbar: 'flex justify-between items-center py-6 px-5 text-white shadow-md ',
    logo: 'text-2xl font-bold text-teal-400 ml-10',
    navLinks: 'flex gap-8 list-none mr-12 cursor-pointer font-bold',
    mobileMenuIcon: 'hidden text-2xl bg-none border-none text-white cursor-pointer',
    navLinksMobile: 'flex flex-col fixed top-0 right-0 bg-gray-700 w-64 h-screen items-center justify-center gap-5 p-5 transform transition-transform duration-300 ease-out',
    navLinksOpen: 'translate-x-0',
    navLinksClosed: 'translate-x-full',
  };

  return (
  <div className='sticky top-0 z-50'>
  <nav className={styles.navbar}>
  <div className={styles.logo}><img className='h-12' src='/images/logo.png' alt='logo'></img></div>
  <ul
    className={`${styles.navLinks} ${isMobileMenuOpen ? styles.navLinksOpen : ''}`}
    onClick={() => setIsMobileMenuOpen(false)}
  >
    <li>
      <Link to="/" className="text-black hover:text-teal-500">Home</Link>
    </li>
    <li>
      <Link to="/my-blogs" className="text-black hover:text-teal-500">My Blogs</Link>
    </li>
    <li>
      <Link to="/faqs" className="text-black hover:text-teal-500">Faqs</Link>
    </li>
    <li>
      <Link to="/privacy-policy" className="text-black hover:text-teal-500">Privacy Policy</Link>
    </li>
    <li>
      <Link to="/contact-us" className="text-black hover:text-teal-500">Contact Us</Link>
    </li>
  </ul>
  <button
    className={styles.mobileMenuIcon}
    onClick={handleMobileMenuToggle}
  >
    {isMobileMenuOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
  </button>
</nav>
  </div>
  );
};

export default Navbar;
