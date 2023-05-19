import React from 'react';
import Header from '../components/Header';

function EmployeePage() {
  return (
    <div className='emp-container'>
      <Header title='Employee' />
      <div className='employee-profile'>
        <h2>Julie Taylor</h2>
        <h3>VP of Marketing</h3>
      </div>
      <div className='calloffice'>
        <h3>Call Office</h3>
        <p>781-000-0002</p>
      </div>
      <div className='callmobile'>
        <h3>Call Cell</h3>
        <p>617-000-0002</p>
      </div>
      <div className='sms'>
        <h3>SMS</h3>
        <p>617-000-0002</p>
      </div>
      <div className='email'>
        <h3>Email</h3>
        <p>jtaylor@fakemail.com</p>
      </div>
    </div>
  );
};



export default EmployeePage;