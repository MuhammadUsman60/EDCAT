import React from "react";
import { useEffect } from "react";
import imge1 from "../pic/EXPERTISE/e1.png";
import imge2 from "../pic/EXPERTISE/e2.png";
import imge3 from "../pic/EXPERTISE/e3.png";
import "../css/Experties.css";
import '../css/home.css'

export default function Expertise() {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    // Cleanup function to disconnect the observer when component unmounts
    return () => {
        hiddenElements.forEach((el) => observer.unobserve(el));
        observer.disconnect();
    };
}, []); // Empty dependency array ensures the effect runs only once


  const Expertise = [
    {
      name: "DESIGN ASSIST",
      detail:
        "Transparency, communication, and collaboration are all part of Evolve’s Design-Assist process.",
      img: imge2,
    },
    {
      name: "ESTIMATING",
      detail:
        "The Evolve and Axiom Engineering relationship creates the ideal collaboration to ensure price certainty for their projects and customers.",
      img: imge1,
    },
    {
      name: "STEEL DETAILING & BIM",
      detail:
        "Evolve is able to utilize BIM software to create a 3D development plan for their projects.",
      img: imge3,
    },
  ];

  return (
    <div>
      <h1 className="d-flex justify-content-center mt-5 mb-3 text-e1">EXPERTISE</h1>
      <div className="row" style={{ width: "100%" }}>
        {Expertise.map((expertise, index) => (
          <div
            key={index}
            className="col border border-2 border-secondary rounded rounded-4  p-4 m-5 hidden"
          >
            <div className="ms-2 d-flex justify-content-center">
              <img
                src={expertise.img}
                alt={expertise.name}
                className="img-e1"
              />
            </div>
            <h2 className="d-flex justify-content-center mt-3 text-e2">
              {expertise.name}
            </h2>
            <p className="d-flex justify-content-center text-ep1">{expertise.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
