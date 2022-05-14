import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import useProduct from '../../Hooks/useProduct';
import Cart from '../../Products/Cart/Cart';
import RevewProduct from '../RevewProduct/RevewProduct';
import { CleneDb, removeDb } from '../Topbar/addTodb';

const Revew = () => {
   const [product] = useProduct();
   const [cart, setCart] = useCart(product);
   let navigate = useNavigate();


   const removeHandeler = (key) => {
      const removeCart = cart.filter(products => products.key !== key)
      setCart(removeCart);
      removeDb(key)

   }
   const OrderHandeler = () => {
      navigate("/ordersubmite");
      setCart([]);
      CleneDb();
   }


   return (
      <div className='containt' >
         <div className='row'>
            <div className='col-lg-9'>
               {
                  cart.map(pro => <RevewProduct key={pro.key} pro={pro} removeHandeler={removeHandeler} ></RevewProduct>)
               }
            </div>
            <div className='col-lg-3'>
               <Cart cart={cart} >
                  <Link to="/ordersubmite">
                     <button onClick={OrderHandeler} > place order </button>
                  </Link>

               </Cart>
            </div>
         </div>
      </div>
   );
};

export default Revew;