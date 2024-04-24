import { useEffect } from "react";
import React from "react";
import '../css/why.css'
import '../css/home.css'

export default function Why() {
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
    <div className="p-5 hidden">
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
      <h2 className="texth1">Key Stages of Our Process Include:</h2>
      <p className="textp1">
        <span className="textp1h4">Target Value Budgets:</span><br/>We understand that the initial selection of
        systems is pivotal yet often made with limited information. In response,
        we focus on providing comprehensive data through BIM quantities and
        material assessments using Revit and Tekla software. This enables more
        informed decisions in system selection, contributing to accurate
        feedback for project optimization.<br/><span className="textp1h4">Pull Planning:</span><br/>Defining critical
        milestones and construction requirements is essential for project
        success. Axiom ensures alignment with the design team, emphasizing tasks
        that drive project progression towards pre-construction and construction
        milestones.<br/> <span className="textp1h4">Early Material Orders and Trade Partner Selection:</span> <br/>Selecting
        trade partners to expedite long lead items is crucial in today's market.
        Our Integrated Supply Chain (ISC) process facilitates commitments from
        early trade partners, securing material orders while safeguarding
        against costly change orders for owners and Design Builders. <br/><span className="textp1h4">Steel
        Turnkey Solutions:</span><br/>Evolve Steel leverages Tekla EPM for estimating,
        procurement, project management, document control, and fabrication and
        erection tracking, providing comprehensive solutions for steel-related
        projects.
      </p>
    </div>
  );
}
