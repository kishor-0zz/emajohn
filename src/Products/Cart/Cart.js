import React from 'react';
import { NavLink } from 'react-router-dom';

const Cart = (props) => {
   const { cart, children } = props;





   let totalQuentty = 0;
   let total = 0;
   for (const tocart of cart) {
      if (!tocart.quentty) {
         tocart.quentty = 1;
      }
      total = total + tocart.price * tocart.quentty;
      totalQuentty = totalQuentty + tocart.quentty;
   }
   const shipping = total > 0 ? 15 : 0;
   const tax = total * 0.05;
   const grantTotal = total + tax + shipping;



   return (
      <div>
         <h2>cart: {totalQuentty}</h2>
         <h3>price: {total.toFixed(2)}</h3>
         <h5>sheeping: {shipping.toFixed(2)} </h5>
         <h6>tax : {tax.toFixed(2)}</h6>
         <h1>total: {grantTotal.toFixed(2)}</h1>

         <NavLink to={"/revew"}>{children}</NavLink>

      </div>
   );
};

export default Cart;