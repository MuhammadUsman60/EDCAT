import React, { useEffect } from "react";
import "../css/Apply.css";
  
export default function Apply() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show2');
            } else {
                entry.target.classList.remove('show2');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden1');
    hiddenElements.forEach((el) => observer.observe(el));

    // Cleanup function to disconnect the observer when component unmounts
    return () => {
        hiddenElements.forEach((el) => observer.unobserve(el));
        observer.disconnect();
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className="Apply p-5">
      <div className="text-Apply p-5 hidden1">
        WE APPLY LEAN CONSTRUCTION PRINCIPLES TO OUR WORKFLOW AND DRIVE COST
        CERTAINTY THROUGH TARGET VALUE BUDGETING AND PULLING PLANNING TO ENSURE
        THAT WE SET THE TABLE FOR SUCCESS ON EACH PROJECT. COLLABORATION BETWEEN
        THE ENGINEERING AND DETAILING TEAMS PROVIDES QUANTITIES EARLY IN THE
        DESIGN AND ALLOWS EARLY PROCUREMENT AND STEEL ONSITE IN RECORD SPEED.
      </div>
    </div>
  );
}
