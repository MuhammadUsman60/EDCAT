import React from 'react';
import '../css/About.css';
import imgb1 from '../pic/About/b2.jpg';

export default function AboutHeader() {
  return (
    <div className='aboutHeader mt-5'>
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div>
          <h1 className='text-center textcolors' style={{ color: 'white', position: 'relative', }}>for Architectural, Civil, Structural, for Architects, Engineers, Builders, Consultants and General Contractors.</h1>
        </div>
      </div>
    </div>
  );
}
