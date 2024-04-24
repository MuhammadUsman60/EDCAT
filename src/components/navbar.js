import React from 'react';
import { Link } from 'react-router-dom';
import logo from './pic/logo.png';
import './css/navbar.css'

export default function Navbar(){
  return (



        <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light" >
  <div class="container-fluid">
    <Link className='navbar-brand' to={"/"}>
    <img src={logo} style={{width:'50px'}} alt="Logo" />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto me-auto">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item ms-4">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item ms-4">
          <Link className="nav-link" to="/service">Service</Link>
        </li>
        
        {/* <li className="nav-item">
          <Link className="nav-link ms-4" to="/projects">Projects</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link ms-4" to="/samples">Samples</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link ms-4" to="/blog">Blog</Link>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link ms-4" to="/contact">Contact us</Link>
        </li>
        
      </ul>
      <Link
       type="button" className="btn btn-danger btn-text" to="/contact">Book a Free Consultation
      </Link>
    </div>
    
  </div>
  {/* <div className='header mt-2 '>
    <div className="ms-auto mt-2 book1-btn">
        <button type="button" className="btn btn-danger">Book a Free Consultation</button>
        <button type="button" className="btn btn-danger ms-2 me-2 book_btn">Request a Quote</button>
    </div>
</div> */}
</nav>
 

  );
}

