import React from "react";
import "../css/Experience.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../css/home.css";
export default function EXPERIENCE() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
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
    <div className="row p-4 m-5 ms-auto me-auto ec1" style={{ width: "90%" }}>
      <div className="col-lg-6 p-3">
        <h1 style={{ color: "#dc3545" }} className="text1">
          YEARS OF EXPERIENCE
        </h1>
        <div
          className="rounded rounded-4 mt-3"
          style={{
            width: "20%",
            height: "4px",
            backgroundColor: "rgb(220, 53, 69)",
          }}
        ></div>
        <h2 className="mt-3 text3">SERVICING PROJECTS ACROSS THE WORLDWIDE</h2>
      </div>
      {/* div2 */}
      <div className="col-lg-6 col-md-12 col-sm-12 p-3">
        <p className="text2">
          EDCAT (Engineering Design Consultancy and Technology) stands as a
          leading provider of specialized VDM/CAD service and Consulting,
          offering innovative solutions in the Oil and Gas sector, as well as
          industrial and residential projects. Committed to precision and
          excellence, EDCAT is a trusted partner for addressing complex
          engineering design challenges.
        </p>

        <Link to="../about">
          <button
            type="button"
            className="btn btn-danger"
            onClick={scrollToTop}
          >
            About us
          </button>
        </Link>
      </div>
    </div>
  );
}
