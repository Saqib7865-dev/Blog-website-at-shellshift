import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '25px 20px',
      background: 'rgb(69,71,75)',
      color: '#fff',
      position: 'relative',
    },
    logo: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: 'rgb(47,212,191)',
      marginLeft: '30px',
    },
    navLinks: {
      display: 'flex',
      gap: '20px',
      listStyle: 'none',
      color: 'white',
      marginRight: '60px',
      cursor: 'pointer',
      transition: 'color 0.3s ease',
    },
    navLinksHover:{
      color: 'rgb(47,212,191)',
    },
    mobileMenuIcon: {
      display: 'none',
      fontSize: '24px',
      background: 'none',
      border: 'none',
      color: '#fff',
      cursor: 'pointer',
    },
    navLinksMobile: {
      display: 'flex',
      flexDirection: 'column',
      position: 'fixed',
      top: 0,
      right: 0,
      background: '#34495e',
      width: '250px',
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '20px',
      padding: '20px',
      transform: 'translateX(100%)',
      transition: 'transform 0.3s ease',
    },
    navLinksOpen: {
      transform: 'translateX(0)',
    },
  };

  return (
    <nav
      style={isMobileMenuOpen ? { ...styles.navbar, ...styles.navbarHover } : styles.navbar}
      onMouseOver={() => {
        if (!isMobileMenuOpen) {
          document.getElementById('navbar').style.background = styles.navbarHover.background;
        }
      }}
      onMouseOut={() => {
        if (!isMobileMenuOpen) {
          document.getElementById('navbar').style.background = styles.navbar.background;
        }
      }}
    >
      <div style={styles.logo}>Company Logo</div>
      <ul
        style={{ ...styles.navLinks, ...(isMobileMenuOpen ? styles.navLinksOpen : {}) }}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
      <button
        style={styles.mobileMenuIcon}
        onClick={handleMobileMenuToggle}
      >
        {isMobileMenuOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </button>
    </nav>
  );
};

export default Navbar;
