import React from "react";
import '../css/Experience.css';
import { Link } from "react-router-dom";
import { useEffect } from "react";
import '../css/home.css'
export default function EXPERIENCE() {
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
  }, []); 
  return (
    <div className="row p-4 m-5 ms-auto me-auto ec1 hidden" style={{width:'90%'}}>
      <div className="col-lg-6 p-3">
        <h1 style={{color:'#dc3545'}} className="text1">25+ YEARS OF EXPERIENCE</h1>
        <div className="rounded rounded-4 mt-3" style={{width:'20%',height:'4px', backgroundColor:'rgb(220, 53, 69)'}}></div>
        <h2 className="mt-3 text3">SERVICING PROJECTS ACROSS THE WESTERN US</h2>
      </div>
      {/* div2 */}  
      <div className="col-lg-6 col-md-12 col-sm-12 p-3">
        <p className="text2">
          In a market where material escalation and long lead items
          significantly impact a project’s success, our team is focused on
          reducing the risk. Evolve provides a turn-key solution utilizing our
          Integrated Project Delivery (IPD) workflow that allows concurrent
          design and construction activities which results in accelerated
          material onsite for critical path items and increased cost certainty
          by onboarding trade partners early.
        </p>
        
        <Link to='../about'>
        <button type="button" className="btn btn-danger">About us</button>
        </Link>
      </div>
    </div>
  );
}
