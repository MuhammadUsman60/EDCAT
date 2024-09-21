import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'; // Import the solid version of the circle-check icon
import keyimg from '../pic/About/keyValue1.jpg';
import '../css/Mission.css';

export default function KeyValue() {
    const keyValues = [
        {
            key: "Customer Satisfaction:",
            describe: "Consistently surpassing client expectations."
        },
        {
            key: "Standards:",
            describe: "Establishing exemplary standards in all our business dealings."
        },
        {
            key: "Integrity:",
            describe: "Maintaining sincerity, ethics, and transparency in all transactions."
        },
        {
            key: "Fairness:",
            describe: "Treating all clients equally, from large corporations to small businesses."
        },
        {
            key: "Technology Update:",
            describe: "Continuously updating our skills and technology to stay at the forefront of the industry."
        }
    ];

    return (
        <div className='container mb-2'>
            <h1 className='text-center p-3 texth1'>Our Key Values</h1>
            <div className='row' style={{width:'90%'}}>
                <div className='col-lg-5 col-md-12 col-sm-12 ms-5 container'>
                    {keyValues.map((KeyValue, index) => (
                        <div className='p-2' key={index}>
                            <div className='d-flex'>
                            <FontAwesomeIcon icon={faCircleCheck} style={{color:'#ed1b24',fontSize:'large'}} className='pt-1'/> {/* Use the imported icon */}
                            <h3 className='KeyValueh1 ms-2'>{KeyValue.key}</h3>
                            </div>
                            <p className='textp1'>{KeyValue.describe}</p>
                        </div>
                    ))}
                </div> 
                <div className='col-lg-5 col-md-12 mt-auto mb-auto'>
                    <img className='rounded rounded-5 keyimg' src={keyimg} alt="Key Values" style={{ width: '100%' }} />
                </div>
            </div>
        </div>
    );
}
