import React from 'react';
import AboutHeader from './About/AboutHeader';

import CoreSeriver from './About/coreSeriver'; // Corrected component name
import Service from './About/sevice'; // Assuming this is another component related to services
import Expertise from './home/Expertise'; // Corrected import naming convention

export default function service() {
  return (
    <div>
      <AboutHeader />
      <Service />
      <CoreSeriver /> 

      
    </div>
  );
}
