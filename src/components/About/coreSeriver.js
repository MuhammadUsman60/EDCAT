import React from 'react';
import Estimation from "../pic/EXPERTISE/Estimation & Material Take-off.png";
import Miscellaneous from "../pic/EXPERTISE/Miscellaneous Steel Detailing.jpg";
import Structural from "../pic/EXPERTISE/Structural Steel Detailing.png";

const coreServices = [
    {
        name: "Estimation & Material Take-off",
        detail:
            "<ul class='list-group'><li class='list-group-item'>Commercial Estimating</li><li class='list-group-item'>Residential Estimating</li><li class='list-group-item'>Industrial Estimating</li><li class='list-group-item'>Building Estimating</li><li class='list-group-item'>Freelance Estimating</li><li class='list-group-item'>Blueprint Estimating</li><li class='list-group-item'>Electrical Estimating</li><li class='list-group-item'>Outsourcing Estimating</li></ul>",
        img: Estimation,
    },
    {
        name: "Structural Detailing",
        detail:
            "<ul class='list-group'><li class='list-group-item'>Steel Detailing</li><li class='list-group-item'>Rebar Detailing</li><li class='list-group-item'>Shop Drawing</li><li class='list-group-item'>Connection Design</li><li class='list-group-item'>Precast Panel Detailing</li><li class='list-group-item'>Structural 3D Modeling</li><li class='list-group-item'>Structural 2D Drafting</li></ul>",
        img: Miscellaneous,
    },
    {
        name: "Other Services:",
        detail:
            "<ul class='list-group'><li class='list-group-item'>Industrial Engineering</li><li class='list-group-item'>Solar panel detailing</li></ul>",
        img: Structural,
    },
];

const CoreServices = () => {
    return (
        <div style={{ width: '100%' }}>
            <h2 className="text-center mt-5 mb-3 text-e1">Core Services</h2>
            <div className="row justify-content-center cardExperties">
                {coreServices.map((expertise, index) => (
                    <div
                        key={index}
                        className="col-lg-3 col-md-4 col-sm-12 border border-2 border-secondary rounded rounded-4 p-4 m-5"
                    >
                        <div className="d-flex justify-content-center mb-3">
                            <img src={expertise.img} alt={expertise.name} className="img-e1" style={{ maxHeight: '200px' }} />
                        </div>
                        <h4 className="text-center mt-3 mb-3 text-e2">{expertise.name}</h4>
                        <div className="text-ep1 text-center" dangerouslySetInnerHTML={{ __html: expertise.detail }} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CoreServices;
