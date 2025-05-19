import React from 'react';
import { Link } from 'react-router-dom';
import '../App.scss'


function Navbar()  {
  return (
    <>
<header>
      <div className="logo">
        <img src="./Billeder/toplogo.gif" alt="" /></div>
     
      

    
    <nav className="navbar">
      <ul className="navbar-menu">
        <li><Link to="/">Hjem</Link></li>
        <li><Link to="/om">Om os</Link></li>
        <li><Link to="/sponsor">Bliv Sponsor</Link></li>
        <li><Link to="/tak">Sponsor</Link></li>
      </ul>
    </nav></header></>
  );
};

export default Navbar;
