import React from "react";
import { Link } from "react-router-dom";

import img6 from "../pic/Home/refinery-3613522.jpg";

import "../css/homeHeader.css";

export default function HomeHeader() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-5">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="child">
              <img src="https://images.unsplash.com/photo-1445140402314-ffd9630d0b19?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="Slide 1" />
              <div className="carousel-caption mt-auto mb-auto ms-auto me-auto para1">
                <div className="p-3 ms-auto me-auto">
                  <h1 className="h1h w-100">
                    Engineering Design Consultancy and Technology LLC
                  </h1>
                  <Link
                    type="button"
                    to="../service"
                    onClick={scrollToTop}
                    className="btn btn-danger d-none d-md-block w-25 ms-auto me-auto"
                  >
                    Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="child">
              <img src={img6} className="d-block w-100" alt="Slide 2" />
              <div className="carousel-caption mt-auto mb-auto ms-auto me-auto para1">
                <div className="p-3 w-100 ms-auto me-auto">
                  <h1 className="h1h">VDM/CAD service and Consulting</h1>
                  <Link
                    to="../service"
                    type="button"
                    className="btn btn-danger d-none d-md-block w-25 ms-auto me-auto"
                  >
                    Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="child">
              <img src="https://cdn.pixabay.com/photo/2014/08/18/12/44/steel-frame-420723_1280.jpg"className="d-block w-100" alt="Slide 3" />
              <div className="carousel-caption mt-auto mb-auto ms-auto me-auto para1">
                <div className="p-3 w-100 ms-auto me-auto divp1">
                  <h1 className="h1h">Structural Steel Detailing</h1>
                  <p className="d-none d-md-block homehearderp">
                    Our Structural Steel Detailing include Steel Detailing,
                    Precast Detailing, Rebar Detailing, Miscellaneous Steel
                    Detailing, Duct / Plate work Detailing, Shop Drawings,
                    Connection Design and Construction Docs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="child">
              <img src="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="Slide 4" />
              <div className="carousel-caption mt-auto mb-auto ms-auto me-auto para1">
                <div className="p-3 w-100 ms-auto me-auto divp1">
                  <h1 className="h1h">Precast Detailing Services</h1>
                  <p className="d-none d-md-block homehearderp">
                    Our Precast detailing services include Wall Panel Detailing,
                    Slab Detailing, Beam Detailing, Stair Detailing, Column
                    Detailing, Architectural Precast Detailing, and Utility
                    Precast Product Detailing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev d-none d-md-block"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
          aria-label="Previous"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next d-none d-md-block"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
          aria-label="Next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
