import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './pic/logo.png';
import './css/navbar.css'

export default function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsCollapsed(false); // Close navbar when scrolling to top
  }

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light" >
      <div className="container-fluid">
        <Link className='navbar-brand p-2' to={'/'}>
          <img src={logo} style={{ width: '50px' }} alt="Logo" />
        </Link>
        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isCollapsed ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto me-auto">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/" onClick={scrollToTop}>Home</Link>
            </li>
            <li className="nav-item ms-4">
              <Link className="nav-link" to="/about" onClick={scrollToTop}>About</Link>
            </li>
            <li className="nav-item ms-4">
              <Link className="nav-link" to="/service" onClick={scrollToTop}>Service</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link ms-4" to="/contact" onClick={scrollToTop}>Contact us</Link>
            </li>
          </ul>
          {/* <Link
            type="button" className="btn btn-danger btn-text" to="/contact" onClick={scrollToTop}>Book a Free Consultation
          </Link> */}
        </div>
      </div>
    </nav>
  );
}
