import React from "react";
import "../css/why.css";
import { useEffect } from "react";
import "../css/home.css";
export default function AboutText() {
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
  return (
    <div className="p-5">
      <h1 className="texth1 ps-2 pt-4">Who We Are</h1>
      <p className="textp1 p-2">
        EDCAT LLC, a versatile engineering services company, brings cutting-edge
        engineering solutions to the construction industry. Derived from
        advanced engineering services, our name EDCAT reflects our commitment to
        pushing the boundaries of innovation and expertise.
      </p>
      <p className="textp1 p-2">
        At EDCAT, we have honed our expertise and gained a multidisciplinary
        perspective through hands-on experience, serving a diverse clientele in
        the AEC industry. Engineers, contractors, fabricators, and facility
        managers rely on us to adapt to their ever-evolving needs.
      </p>
      <p className="textp1 p-2">
        Our team is made up of highly skilled professionals dedicated to
        providing exceptional services and solutions to our valued clients
        across various sectors. We maintain a humble approach, always looking
        for opportunities to learn and improve. Our unwavering passion for
        engineering and relentless pursuit of excellence drive us to continually
        push boundaries while understanding and meeting each client's unique
        requirements.
      </p>
      <p className="textp1 p-2">
        We prioritize individual clients by placing them at the forefront of our
        sales and project management processes. Our engineering processes and
        frameworks have been meticulously defined and streamlined to uphold the
        highest quality standards. Our team of experts from diverse domains
        collaborate closely, customizing and optimizing techniques to meet the
        specific expectations of each client.
      </p>
      <p className="textp1 p-2">
        Discover the EDCAT difference and elevate your projects to a new
        standard of engineering excellence. Reach out to us today to begin a
        journey of innovation, collaboration, and outstanding results.
      </p>
      
    </div>
  );
}
