import React from 'react';
import Apply from './home/apply.js'
import AboutHeader from './About/AboutHeader.js';
import ServiceHeader from './service/serviceHeader.js';
import AboutText from './service/AboutText.js';
export default function About() {
  return (
    <div>
      {/* <AboutHeader /> */}
      <ServiceHeader />
      <AboutText/>
    </div>
  );
}
