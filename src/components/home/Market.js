import React, { useEffect } from 'react';
import { TbBuildingFactory } from "react-icons/tb";
import { GiSpookyHouse } from "react-icons/gi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { RiRoadMapFill } from "react-icons/ri";
import '../css/Market.css';
import Industrial from '../pic/Key market/k1.png';
import Commercial from '../pic/Key market/k2.png';
import Petrochemicals from '../pic/Key market/k3.png';
import Residential from '../pic/Key market/k4.png';
import '../css/home.css';

export default function Market() {
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
    }, []); // Empty dependency array ensures the effect runs only once

    const Markets = [{
        name: "Industrial",
        img: Industrial
    }, {
        name: "Commercial",
        img: Commercial
    }, {
        name: "Oil & Gass / Petrochemicals",
        img: Petrochemicals
    }, {
        name: "Residential",
        img: Residential
    }];

    return (
        <div className='body p-5'>
            <h2 className="text-3xl d-flex justify-content-center">KEY MARKETS</h2>
            <div className='row p-1' style={{ width: '100%' }}>
                {Markets.map((market, index) => (
                    <div key={index} className='col'>
                        <div className='img1 d-flex justify-content-center mt-4'>
                            <img src={market.img} alt={market.name} style={{width:'40%'}} /> {/* Using img tag */}
                        </div>
                        <h4 className='text-2xl d-flex justify-content-center mt-3'>{market.name}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
}
