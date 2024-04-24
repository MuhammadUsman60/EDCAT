import React from 'react';
import '../css/About.css';
import imgb1 from '../pic/About/b2.jpg';

export default function AboutHeader() {
  return (
    <div className='aboutHeader mt-5'>
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div>
          <h1 className='text-center textcolor typed' style={{ color: 'brown', position: 'relative' }}>WHAT WE DO</h1>
        </div>
      </div>
    </div>
  );
}
