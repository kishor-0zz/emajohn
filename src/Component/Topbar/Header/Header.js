import React from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../useFirebase/useFirebase';
import './Header.css';

const Header = () => {
   const { data, signOutUser } = useFirebase();
   return (
      <div className='header container-fluid py-2' >
         <nav>
            <ul>
               <li>
                  <NavLink to="/shop" className={({ isActive }) => "nav-link" + (isActive ? "active" : "")} >SHOP</NavLink>
                  <NavLink to="/revew" className={({ isActive }) => "nav-link" + (isActive ? "active" : "")} >REVEW</NavLink>
                  <NavLink to="/inventory" className={({ isActive }) => "nav-link" + (isActive ? "active" : "")} >INVANTORY</NavLink>

                  {
                     data.email ? <div>
                        <button onClick={signOutUser} >logout</button>
                     </div> : <div><NavLink to="/login" className={({ isActive }) => "nav-link" + (isActive ? "active" : "")} >LOGIN</NavLink></div>
                  }
               </li>
            </ul>
         </nav>
      </div>
   );
};

export default Header;