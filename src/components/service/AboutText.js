import React from "react";
import '../css/why.css'
import { useEffect } from "react";
import '../css/home.css'
export default function AboutText() {
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
      <h1 className="texth1">About Us</h1>
      <p className="textp1">
        At Engineering Design Consultant And Technology, we are dedicated to
        providing comprehensive and integrated engineering services to projects
        within the Industrial and Infrastructure sectors. With a capacity of
        around 10,000 engineering man-hours per year, coupled with
        state-of-the-art IT tools, we deliver excellence through a
        multidisciplinary team of approximately 25 engineers, designers, CADD
        (3D & 2D) specialists, and engineering management experts.
      </p>
      <h2 className="texth1">Civil/Structural Design Expertise</h2>
      <p className="textp1">
        Our expertise spans across various areas in Civil/Structural
        Engineering, focusing particularly on:
      </p>
      <h4 className="textp1h4">Basic Engineering</h4>
      <ul className="textp1">
        <li>Conceptual design of structure drawings</li>
        <li>
          Design and structural drawing preparation of Steel & concrete
          structure, Pipe Racks, Steel Sheds & Table Top Structures
        </li>
        <li>
          RFQs for Topographical Survey, Geotechnical Investigations & PEB
        </li>
        <li>Bid support</li>
      </ul>
      <h4 className="textp1h4">Detailed Engineering</h4>
      <ul className="textp1">
        <li>Steel and Concrete Structures</li>
        <li>Shelters and Sheds</li>
        <li>Pipe Racks</li>
        <li>Equipment Supporting Structures</li>
        <li>Platforms & Walkways</li>
        <li>Pipe Support</li>
        <li>Bridges</li>
        <li>Culverts</li>
        <li>Industrial and Process Buildings Structural Design</li>
        <li>
          Equipment Foundations including Pile foundations, Tank Foundations
        </li>
        <li>Compressor and Turbine Foundation</li>
        <li>Underground Tanks</li>
        <li>BOQ/MTO</li>
        <li>Plant Roads</li>
        <li>Steel structure shop drawings</li>
      </ul>
      <h4 className="textp1h4">Pre-Qualification Documents</h4>
      <p className="textp1">
        Our commitment to quality and reliability is evident in our
        pre-qualification documents, ensuring that our clients can trust in our
        capabilities and expertise.
      </p>
      <h4 className="textp1h4">Software Details</h4>
      <p className="textp1">
        We pride ourselves on utilizing cutting-edge engineering and office
        software to enhance our efficiency and accuracy. Our software library
        includes:
      </p>
      <h4 className="textp1h4">Structural Design Software:</h4>
      <ul className="textp1">
        <li>Autodesk AutoCAD</li>
        <li>TEKLA Structures</li>
        <li>STAAD PRO</li>
        <li>MAT 3D</li>
        <li>FOUNDATION 3D</li>
        <li>ETABS</li>
        <li>STAAD Foundation</li>
        <li>PLANSWIFT, BLUE BEAM & EXCEL (for BOQ/MTO)</li>
      </ul>
      <p className="textp1">With these tools at our disposal, we strive to deliver exceptional results, meeting the diverse needs and challenges of our clients' projects.</p>
      <p className="textp1">At Engineering Design Consultant And Technology, we are committed to excellence, innovation, and client satisfaction. Let us be your partner in engineering success.</p>
    </div>
  );
}
