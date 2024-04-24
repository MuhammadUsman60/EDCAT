import React from "react";
import img3 from "../pic/Home/b1.jpg";
import img5 from "../pic/Home/b3.jpg";
import "../css/homeHeader.css";

export default function HomeHeader() {
  return (
    <div className="container1">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="child">
              <img src={img3} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block mt-auto mb-auto ms-auto me-auto para1">
                <h3 className="h3 animated-caption">CHANAGE THE WAY</h3>
                <h1 className="h1 typed">STRUCTURAL STEEL</h1>
                <h3 className="h3 animated-caption mt-3">IS DELIVERED</h3>
              </div>
            </div>
          </div>
          <div className="carousel-item">
  <div className="child">
    <img src={img5} class="d-block w-100" alt="..." />
    <div className="carousel-caption d-none d-md-block mt-auto mb-auto ms-auto me-auto para1">
      <h3 className="h3 animated-caption">CHANAGE THE WAY</h3>
      <h1 className="h1 typed">STRUCTURAL STEEL</h1>
      <h3 className="h3 animated-caption mt-3">IS DELIVERED</h3>
    </div>
  </div>
</div>


        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
