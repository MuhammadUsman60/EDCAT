import React, { useEffect } from 'react';
import { TbBuildingFactory } from "react-icons/tb";
import { GiSpookyHouse } from "react-icons/gi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { RiRoadMapFill } from "react-icons/ri";
import '../css/Market.css';
import img1 from '../pic/Key market/k1.png';
import img2 from '../pic/Key market/k2.png';
import img3 from '../pic/Key market/k3.png';
import img4 from '../pic/Key market/k4.png';
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
        img: img1
    }, {
        name: "Commercial",
        img: img2
    }, {
        name: "Infrastructure",
        img: img3
    }, {
        name: "Residential",
        img: img4
    }];

    return (
        <div className='body p-5'>
            <h1 className="text-3xl d-flex justify-content-center">KEY MARKETS</h1>
            <div className='row p-1' style={{ width: '100%' }}>
                {Markets.map((market, index) => (
                    <div key={index} className='col hidden'>
                        <div className='img1 d-flex justify-content-center mt-4' style={{height: '60%'}}>
                            <img src={market.img} alt={market.name} style={{width:'60%'}} /> {/* Using img tag */}
                        </div>
                        <h2 className='text-2xl d-flex justify-content-center mt-3'>{market.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}
