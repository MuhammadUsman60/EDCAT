import React, { useState } from 'react';
import '../css/contactHeader.css';

export default function ContactHeader() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response = await fetch('http://localhost:3000/api/submitForm', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(formData)
      // });
      // if (!response.ok) {
      //   throw new Error('Form submission failed');
      // }

      console.log('Form submitted successfully');

      const response1 = await fetch('http://localhost:3000/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response1.ok) {
        throw new Error('Email sending failed');
      }

      console.log('Email sent');
      window.location.reload(); // Refresh the page after successful submission
    } catch (error) {
      console.error('Form submission error:', error);
      // Handle error, show error message to the user, etc.
    }
  };

  return (
    <>
      <div className='contactHeader mt-5'>
        <div className="container d-flex justify-content-center align-items-center h-100">
          <div>
            <h1 className='text-center textcolor typed' style={{ color: 'white', position: 'relative' }}>CONTACT US</h1>
          </div>
        </div>
      </div>
      <div>
        <p className='textp1c ps-5 pe-5 mt-5'>
          Please contact one of our Experts or Engineers to help you with a project or a potential project. We look forward to hearing from you.
        </p>
        <div className='row w-100 p-5'>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <h1 className='texth1c'>CONTACT US</h1>
            <div></div>
            <p className='textp1c'>CONNECTING WITH US IS EASY!</p>
            <h1 className='texth1c'>+1 (406) 316-0244</h1>
            <p className='textp1c'>1001 S Main St STE 500
Kalispell, MT 59901</p>
            <p className='textp1c'>MT 59901</p>
            <p className='textp1c' style={{ color: '#ed1b24', fontWeight: '500' }}>info@engdcat.com</p>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <form onSubmit={handleSubmit}>
              <div className="mb-3 textp1c">
                <label htmlFor="name" className="form-label" style={{ color: '#ed1b24', fontWeight: '500' }}>Name</label>
                <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} placeholder='Name' required/>
              </div>
              <div className="mb-3 textp1c">
                <label htmlFor="email" className="form-label" style={{ color: '#ed1b24', fontWeight: '500' }}>Email address</label>
                <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} placeholder='Email' required/>
              </div>
              <div className="mb-3 textp1c">
                <label htmlFor="message" className="form-label" style={{ color: '#ed1b24', fontWeight: '500' }}>Message</label>
                <textarea className="form-control" id="message" name="message" value={formData.message} onChange={handleChange} placeholder='Message' style={{ height: '100px' }} required/>
              </div>
              <button type="submit" className="btn btn-danger">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
