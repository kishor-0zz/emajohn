import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
   return (
      <div className='header container-fluid py-2' >
         <nav>
            <ul>
               <li>
                  <NavLink to="/shop" className={({ isActive }) => "nav-link" + (isActive ? "active" : "")} >SHOP</NavLink>
                  <NavLink to="/revew" className={({ isActive }) => "nav-link" + (isActive ? "active" : "")} >REVEW</NavLink>
                  <NavLink to="/inventory" className={({ isActive }) => "nav-link" + (isActive ? "active" : "")} >INVANTORY</NavLink>
               </li>
            </ul>
         </nav>
      </div>
   );
};

export default Header;