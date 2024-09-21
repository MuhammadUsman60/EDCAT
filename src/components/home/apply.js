import React, { useEffect } from "react";
import "../css/Apply.css";

export default function Apply() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show2");
        } else {
          entry.target.classList.remove("show2");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden1");
    hiddenElements.forEach((el) => observer.observe(el));

    // Cleanup function to disconnect the observer when component unmounts
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className="Apply p-5">
      <div className="text-Apply p-lg-5 p-md-3 p-sm-3">
      <h2 className="ms-auto mb-auto d-flex justify-content-center" style={{color: 'rgb(236, 29, 39)',fontWeight:"900"}}>EDCAT</h2>
      <p className="pt-4 textp1 container">
        When you bring EDCAT as your engineering partner at any stage along your
        project life cycle, it means you are leveraging the expertise of
        engineering manpower that has shown consistent excellence in every
        engineering domain made possible by their mastery in the most advanced
        modeling and detailing software. Our engineering teams with a gamut of
        experience in structural engineering have an unmatched skill set which
        empowers them to be flexible and competent to function independently as
        well as cross-functionally depending on the project requirement. This
        unlimited pool of experience and knowledge base coupled with our
        state-of-the-art infrastructure make us resourceful and competent enough
        to support you for your diverse project needs.
      </p>
    </div>
    </div>
  );
}
