import React from "react";
import '../css/homeAbout.css';
export default function about() {
  return (
    <div className="aboutBody p-5">
   
      <h2 className="d-flex justify-content-center mb-3 abouth" style={{color:'rgb(236, 29, 39)'}}>ABOUT</h2>
      <p className="container textp1 p-2 aboutp">
        EDCAT LLC is a trusted engineering service partner to the construction
        industry. Whether you are a builder, a general contractor or an
        architect, EDCAT can fulfill your project requirements with tailored and
        customized solutions ranging from design development to As-built BIM
        modeling. With its engineering center located in Pakistan and well
        established in the USA. EDCAT delivers a proven combination of accuracy,
        affordability, and timeliness in all of its project undertakings.{" "}
      </p>
      <p className="container textp1 p-2 aboutp">
        Leveraging the latest technology and practices in the AEC industry such
        as Integrated BIM Project Delivery (IPD), we help our clients ranging
        from construction companies to product manufacturers, realize their
        goals within the predefined standards, timelines, and budget thereby
        ensuring a maximum return on investment on every project.
      </p>
      <p className="container textp1 p-2 aboutp">
        With more than a decade of experience, we understand that the
        requirement of every client is unique and therefore invest a good amount
        of time and effort to learn their standards and procedures. Our delivery
        approach bridges the gap between concept and constructability of a
        building design through virtual modeling. We follow a system driven
        production process complemented by a streamlined quality assurance
        program to ensure that the project objectives are met. Working as though
        a virtual extension of the client’s team, we empower our clients to
        focus on their core business without having to worry about their
        drafting or modeling needs.
      </p>
    </div>
 
  );
}
