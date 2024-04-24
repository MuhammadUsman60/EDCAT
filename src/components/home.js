import React from 'react';
import HomeHearder from './home/homeHearder.js'
import EXPERIENCE from './home/EXPERIENCE.js';
import Market from './home/Market.js';
import Apply from './home/apply.js';
import Expertise from './home/Expertise.js';
import './css/home.css';

export default function Home() {

  return (
    <div>
      <HomeHearder/>
      <EXPERIENCE />
      <Market/>
      <Apply/>
      <Expertise/>
    </div>
  );
}
