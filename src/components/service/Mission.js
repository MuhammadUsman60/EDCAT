import React from "react";
import logo from '../pic/logo.png'
import '../css/Mission.css'

export default function Mission() {
  return (
    <div>
    <div className="row p-5" style={{width:'100%', backgroundColor:'#29292b'}}>
      <div className="col-lg-4 col-md-4" >
        <div className="p-2" >
          <h1 className='textcolor'style={{ color: 'white', position: 'relative',fontSize:'xx-large' }}>Mission</h1>
          <p style={{ color: 'white', position: 'relative',fontSize:'medium' }}>
            To deliver global services utilizing cutting-edge technologies while
            ensuring cost savings for our customers.
          </p>
        </div>
        <div className="p-2">
          <h1 className='textcolor'style={{ color: 'white', position: 'relative',fontSize:'xx-large' }}>Vision</h1>
          <p style={{ color: 'white', position: 'relative',fontSize:'medium' }}>
            To be recognized as a leading Business Process Outsourcing provider,
            known for delivering exemplary services.
          </p>
        </div>
      </div>
      <div className="col-lg-8 col-md-6 d-flex justify-content-center">
        <img src={logo} className="mt-auto mb-auto MissionPic"/>
      </div>
    </div>
    </div>
  );
}
