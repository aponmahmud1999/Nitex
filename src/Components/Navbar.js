import React from 'react';
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll/modules";

const Navbar = () => {
  
    return (
        <div className="navbar text-white bg-[#041d47]">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <Link to="Service"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}>
          <a>Services</a></Link>
        
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Nitex</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li>
  <Link to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}>
          <a className='cursor-pointer'>About</a></Link>
  </li>
  <li>
  <Link to="Service"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}>
          <a className='cursor-pointer'>Services</a></Link>
  </li>
     
  <li>
  <Link to="Courses"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}>
          <a className='cursor-pointer'>Courses</a></Link>
  </li>
  <li>
  <Link to="why"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}>
          <a className='cursor-pointer'>Why Us</a></Link>
  </li>
  <li>
  <Link to="review"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}>
          <a className='cursor-pointer'>Review</a></Link>
  </li>
  <li>
  <Link to="partner"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}>
          <a className='cursor-pointer'>Partners</a></Link>
  </li>
  <li>
  <Link to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}>
          <a className='cursor-pointer'>Contact</a></Link>
  </li>
    </ul>
  </div>
  
</div>
    );
};

export default Navbar;