import React from 'react';

import { Link } from 'react-router-dom';
import {BiPhoneCall} from 'react-icons/bi'
import {FiMail} from 'react-icons/fi'
import {ImFacebook} from 'react-icons/im'
import {BsInstagram} from 'react-icons/bs'
import {ImLinkedin2} from 'react-icons/im'
import {FiYoutube} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'

const Footer = () => {
    return (
<div className='bg-[#040d22] text-white pt-[10%] pb-[5%]'>
<footer className="footer p-10  ">
  <div>
    <p className='text-3xl font-bold'>NIT<span className='text-[#EA1C27]'>E</span>X</p>
    <p className='text-xs max-w-lg text-white'>Our passion at NITEX is creating cutting-edge website and mobile application designs that are responsive, highly functional, aesthetically pleasing, and feature-rich, as well as digital marketing campaigns that promote business expansion.</p>
    
   
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <li  className='hover:border-b pb-2 border-white'> <Link to='/' >About</Link></li>
    <li  className='hover:border-b pb-2 border-white'> <Link to='/'  >Service</Link></li>
    <li  className='hover:border-b pb-2 border-white'> <Link to='/' >Course</Link></li>
    <li  className='hover:border-b pb-2 border-white'> <Link to='/' > Partners</Link></li>
  </div> 

  <div>
   
   <div className='flex space-x-2'>
   <p className='mt-6 text-base'><BiPhoneCall/></p>
   <p className='mt-5 hover:border-b pb-2 border-white'>+8801798767560</p>
   </div>
  
   

  
    <div className='flex space-x-2'>
    <p className='mt-6 text-base'><FiMail/></p>
    <p className='mt-5 hover:border-b pb-2 border-white'>aponmahmu36@gmail.com </p>
    </div>



        
  </div>
  <div className=''>
  <span className="footer-title">Connect with us</span> 
 <div className='space-x-5'>
 <a  target="_blank" rel="noreferrer">
          <button className='text-white text-xl'><ImFacebook/> </button>
        </a>
  <a  target="_blank" rel="noreferrer">
          <button className='text-white text-xl'><BsInstagram/> </button>
        </a>
  <a  target="_blank" rel="noreferrer">
          <button className='text-white text-2xl'><ImLinkedin2/> </button>
        </a>
  <a  target="_blank" rel="noreferrer">
          <button className='text-white text-2xl '><FiYoutube/> </button>
        </a>
  <a  target="_blank" rel="noreferrer">
          <button className='text-white text-2xl '><FiTwitter/> </button>
        </a>
 </div>

  </div>
  
</footer>
<p className='text-center'>©Copyright  to NITEX 2023</p>
</div>
    );
};

export default Footer;