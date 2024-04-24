import React from "react";
import "./css/footer.css";
import Logo from "./pic/logo.png";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";
export default function footer() {
  return (
    <div className="footer">
      <div
        className="row footer1 p-5 justify-content-between"
        style={{ width: "90%" }}
      >
        {/* logo */}
        <div className="mt-auto mb-auto col-lg-3 col-md-4 col-sm-12">
          <img src={Logo} className="logo" />
        </div>
        {/* Information */}
        <div className="mt-auto mb-auto col-lg-3 col-md-4 col-sm-12">
          <div className="d-flex p-2">
            <FiPhoneCall className="me-2" style={{ fontSize: "25px" }} />
            <p>Phone: (347) 732-5294</p>
          </div>
          <div className="d-flex p-2">
            <MdOutlineMail className="me-2" style={{ fontSize: "25px" }} />
            <p>Email: info@evolvesteel.com</p>
          </div>
          <div className="d-flex p-2">
            <CiLocationOn className="me-2" style={{ fontSize: "30px" }} />
            <p>Address: 1117 E PLAZA DRIVE SUITE A EAGLE, ID 83616</p>
          </div>
        </div>
        {/* navbar icon */}
        <div className="mt-auto mb-auto  col-lg-4 col-md-4 col-sm-12 textul">
          <ul style={{ listStyle: "none", textDecoration:"none" }}>
            <Link to={"/"} className="text-decoration-none" style={{ color:"#99A9B5FF"}}>
              <li className="p-2  border border-secondary border-2 border-end-0 border-start-0">
                Home
              </li>
            </Link>
            <Link to={"/about"} className="text-decoration-none" style={{ color:"#99A9B5FF"}}>
              <li className="p-2 border border-secondary border-2 border-end-0 border-start-0 border-top-0">
                About
              </li>
            </Link>
            <Link to={"/service"} className="text-decoration-none" style={{ color:"#99A9B5FF"}}>
              <li className="p-2 border border-secondary border-2 border-end-0 border-start-0 border-top-0">
                Service
              </li>
            </Link>
            {/* <Link to={"/projects"} className="text-decoration-none" style={{ color:"#99A9B5FF"}}>
              {" "}
              <li className="p-2 border border-secondary border-2 border-end-0 border-start-0 border-top-0">
                Projects
              </li>
            </Link>
            <Link to={"/samples"} className="text-decoration-none" style={{ color:"#99A9B5FF"}}>
              <li className="p-2 border border-secondary border-2 border-end-0 border-start-0 border-top-0">
                Samples
              </li>
            </Link>
            <Link to={"/blog"} className="text-decoration-none" style={{ color:"#99A9B5FF"}}>
              <li className="p-2 border border-secondary border-2 border-end-0 border-start-0 border-top-0">
                Blog
              </li>
            </Link> */}
            <Link to={"/contact"} className="text-decoration-none" style={{ color:"#99A9B5FF"}}>
              <li className="p-2 border border-secondary border-2 border-end-0 border-start-0 border-top-0">
                Contact us
              </li>
            </Link>
          </ul>
        </div>
      </div>

      {/* Footer2 section */}
      <div className="footer2">
        <div style={{ display: "flex" }} className="para">
          <span style={{ color: "#99a9b5" }} className="mt-4 mb-auto ms-3">
            © 2022 Evolve Steel. All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  );
}
