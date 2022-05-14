import React from 'react';

const RevewProduct = (props) => {
   const { name, shipping, price, img } = props.pro;
   return (
      <div>
         <div className='single-product'>
            <div className='product-img'>
               <img src={img} alt="img" />
            </div>
            <div className='product-content'>
               <h4>{name}</h4>
               <h6>price: {price}</h6>
               <span>sheeping: {shipping}</span>
               <br />
               <button onClick={() => props.removeHandeler(props.pro.key)} >remove</button>
            </div>
         </div>
      </div>
   );
};

export default RevewProduct;