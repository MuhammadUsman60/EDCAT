import React from "react";
import pic1 from "../pic/About/pic1.png";
import pic2 from "../pic/About/pic2.png";
import pic3 from "../pic/About/pic3.png";
import pic4 from "../pic/About/pic4.png";
import '../css/Mission.css'

export default function Approach() {
  const Approach = [
    {
      img1: pic1,
      Header: "Understanding Client Requirements:",
      description: "We recognize that each client and project demand a unique approach, often requiring a new set of skills and technologies. We dedicate the necessary time to thoroughly understand the project's objectives.",
    },
    {
      img1: pic2,
      Header: "Delivering Solutions:",
      description: "To achieve project goals, our engineers adopt the most appropriate methods, consistently surpassing expectations. Our work follows a system-driven process, incorporating the latest BIM industry methods, ensuring projects are delivered on time and of the highest quality.",
    },
    {
      img1: pic3,
      Header: "Continuous Improvement:",
      description: "Led by highly capable and seasoned project managers, our engineering team continuously learns, researches, and updates their skills to meet the dynamic demands of the AEC industry. Systematic knowledge sharing and perfection of our work processes are ongoing practices at EDCAT. With every project, we ensure there is always room for innovation.",
    },
    {
      img1: pic4,
      Header: "Our Promise:",
      description: "Client satisfaction is our guaranteed promise, and we measure our success by the success of our clients. While we take pride in our past achievements, we view them as milestones in our ongoing pursuit of excellence.",
    },
  ];
  return (
    <div >
      <h1 className="text-center m-5" style={{color:'#ff7703'}}>Our Approach</h1>
      <div className="row m-5 d-flex justify-content-center">
      {Approach.map((Approach, index) => (
        <div key={index} className="col border border-2 rounded round-5 p-3 m-3">
          <img src={Approach.img1} alt="Approach" className="ms-auto me-auto d-flex justify-content-center p-5 imgApproach" />
          <h5 className="text-center" style={{color:'#ff7703'}}>{Approach.Header}</h5>
          <p className="text-center textp1">{Approach.description}</p>
        </div>
      ))}
    </div>
    </div>
  );
}
