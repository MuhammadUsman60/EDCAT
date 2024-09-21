
import { useEffect } from "react";
import React from "react";
import "../css/why.css";
import "../css/home.css";
import whyimg1 from '../pic/About/i.jpg';
import whyimg2 from '../pic/About/o.jpg';
import whyimg3 from '../pic/About/r.jpg';

export default function Why() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    // Cleanup function to disconnect the observer when component unmounts
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  const Exp = [
    {
      Headers: "OIL & GAS & POWER",
      Description:
        "<ul><li>Static & Vibrating Equipment Foundations</li><li>Pipe racks/Pipe Bridges</li><li>Process structures like Cooling Towers, Powerhouse </li><li>Equipment supporting steel/concrete structures</li><li>Chimney/Stacks foundation</li><li>Pits, Pond Dike wall</li><li>Steel Tank Roof structure & Foundations</li></ul>",
      img: whyimg1,
    },
    {
      Headers: "INDUSTRIAL",
      Description:
        "<ul><li>Industrial Sheds</li><li>Process Buildings</li><li>Conveyor System</li></ul>",
      img: whyimg2,
    },
    {
      Headers: "RESIDENTIAL",
      Description:
        "<ul><li>COST ESTIMATION</li><li>BOQ/MATERIAL TAKE-OFF</li></ul>",
      img: whyimg3,
    },
  ];

  return (
    <div className="p-5">
      <h1 className="texth1">WHY EDCAT</h1>
      <p className="textp1">
        In a market where material escalation and long lead items significantly
        impact projects, our team focuses on mitigating these risks through our
        design services. Evolve offers an integrated approach aimed at improving
        project schedules and cost predictability for owners and contractors. By
        employing Integrated Project Delivery (IPD) workflows that synchronize
        design and construction activities, we expedite material procurement for
        critical path items and reduce cost uncertainty during early trade
        partner onboarding. Furthermore, Evolve collaborates with Axiom to
        leverage their structural engineering expertise, allowing for concurrent
        engineering alongside design and prior to final trade partner selection.
      </p>
      {Exp.map((exp, key) => (
        <div key={key}>
          {key % 2 === 0? (
            <div className="row">
              <div className="col-6">
                <h1 className="wh1">{exp.Headers}</h1>
                <div className="whyp1" dangerouslySetInnerHTML={{ __html: exp.Description }} />
              </div>
              <div className="col-6">
                <img src={exp.img} alt={exp.Headers} style={{width:'90%',height:'90%'}} className="rounded rounded-5" />
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="col-6">
                <img src={exp.img} alt={exp.Headers} style={{width:'90%',height:'90%'}} className="rounded rounded-5" />
              </div>
              <div className="col-6">
                <h1 className="wh1">{exp.Headers}</h1>
                <div className="whyp1" dangerouslySetInnerHTML={{ __html: exp.Description }} />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}