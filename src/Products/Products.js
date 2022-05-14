import React from 'react';
import { Col } from 'react-bootstrap';
import './Products.css';

const Products = (props) => {
   const { name, shipping, price, img } = props.pro;

   return (
      <Col lg={4} className="mb-3" >
         <div className='single-product'>
            <div className='product-img'>
               <img src={img} alt="img" />
            </div>
            <div className='product-content'>
               <h4>{name}</h4>
               <h6>price: {price}</h6>
               <span>sheeping: {shipping}</span>
               <br />
               <button onClick={() => props.addToCart(props.pro)} >add to cart</button>
            </div>
         </div>
      </Col>
   );
};

export default Products;