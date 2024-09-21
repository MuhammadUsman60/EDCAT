import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import imge1 from "../pic/EXPERTISE/Estimation & Material Take-off.png";
import imge2 from "../pic/EXPERTISE/Miscellaneous Steel Detailing.jpg";
import imge5 from "../pic/EXPERTISE/Duct Plate work Detailing.jpg";
import imge6 from "../pic/EXPERTISE/Connection Design.jpg";
import imge7 from "../pic/EXPERTISE/Structural Steel Detailing.png";
import imge8 from "../pic/EXPERTISE/Warehouse Shade Detailing.png";
import "../css/Experties.css";
import "../css/home.css";

export default function Expertise() {
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
  }, []); // Empty dependency array ensures the effect runs only once

  const ExpertiseData = [
    {
      name: "Structural Steel Detailing",
      detail:
        "EDCAT engineers with deep industry knowledge and who are well trained in all projects. We understand and visualize the real time fabrication and erection complexity and rectify it on time too. Our focus is to create drawings in such a way that the fabricators can easily handle the drawings and complete the job.",
      img: imge7,
      button: <Link to="../EXPERTISE/design.js">Learn More</Link>,
    },
    {
      name: "Miscellaneous Steel Detailing",
      detail:
        "Miscellaneous steel detailing demands a lot of self-decision while working on it, especially in modelling side. Also, this part of detailing demands good technical knowledge as well. Our well experienced team does each job precisely and through best method.",
      img: imge2,
      button: <Link to="../EXPERTISE/design.js">Learn More</Link>,
    },
    {
      name: "Duct / Plate work Detailing",
      detail:
        "Our well experienced team has handled many plate work jobs including large round and rectangular ducts. We have experience of handling Transitions, Concentric cones, Eccentric cones, Chutes, etc. Our services include delivering unfolded DXF files even for transition plates or eccentric cones.",
      img: imge5,
      button: <Link to="../EXPERTISE/SteelDetailing">Learn More</Link>,
    },
    {
      name: "Connection Design",
      detail:
        "Cronus steel detailing offers connection design services to clients through our engineering partners in USA and Canada. In this, both design and detailing come under one roof and thereby it benefits in improved schedule. Also, we offer PE stamping (If contract required).",
      img: imge6,
      button: <Link to="../EXPERTISE/SteelDetailing">Learn More</Link>,
    },
    {
      name: "Warehouse Shade Detailing",
      detail:
        "Warehouse Shade Detailing requires significant independent decision-making, particularly during the modeling phase. This aspect of detailing also necessitates strong technical expertise. Our highly experienced team performs each task with precision, utilizing the best methods available.",
      img: imge8,
      button: <Link to="../EXPERTISE/SteelDetailing">Learn More</Link>,
    },
    {
      name: "Estimation & Material Take-off",
      detail:
        "We have a quick estimation procedure that includes 3D modelling, Material Reports, Complexity study, Material take-off and Man Hour Consumption calculation. On customer's requirement, we can deliver material take off as well.",
      img: imge1,
      button: <Link to="../EXPERTISE/SteelDetailing">Learn More</Link>,
    },
  ];

  return (
    <div style={{width:'100%'}}>
      <h2 className="d-flex justify-content-center mt-5 mb-3 text-e1">EXPERTISE</h2>
      <div className="row d-flex justify-content-center cardExperties">
        {ExpertiseData.map((expertise, index) => (
          <div
            key={index}
            className="col-lg-3 col-md-4 col-sm-12 border border-2 border-secondary rounded rounded-4 p-4 m-5">
            <div className="ms-2 d-flex justify-content-center p-5" style={{height:'40%'}}>
              <img src={expertise.img} alt={expertise.name} className="img-e1"/>
            </div>
            <h4 className="d-flex justify-content-center mt-3 text-e2 pt-5">{expertise.name}</h4>
            <p className="d-flex justify-content-center text-ep1 text-center">{expertise.detail}</p>
           
          </div>
        ))}
      </div>
    </div>
  );
}
