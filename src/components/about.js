import React from 'react';
import Apply from './home/apply.js'
import AboutHeader from './About/AboutHeader.js';
import ServiceHeader from './service/serviceHeader.js';
import AboutText from './service/AboutText.js';
import Mission from './service/Mission.js';
import Approach from './service/Approach.js';
import KeyValue from './service/KeyValue.js';
export default function About() {
  return (
    <div>
      {/* <AboutHeader /> */}
      <ServiceHeader />
      <AboutText/>
      <Mission />
<Approach/>
<KeyValue/>
    </div>
  );
}
