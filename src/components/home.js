import React from 'react';
import HomeHearder from './home/homeHearder.js'
import EXPERIENCE from './home/EXPERIENCE.js';
import Market from './home/Market.js';
import Apply from './home/apply.js';
import Expertise from './home/Expertise.js';
import './css/home.css';
import About from './home/about.js';

export default function Home() {

  return (
    <div>
      <HomeHearder/>
      <EXPERIENCE/>
      <About/>

      <Apply/>
      <Market/>
      <Expertise/>
      
    </div>
  );
}
