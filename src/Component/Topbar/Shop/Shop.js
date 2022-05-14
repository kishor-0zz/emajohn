import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Cart from '../../../Products/Cart/Cart';
import Products from '../../../Products/Products';
import { addToDb, getUp } from '../addTodb';

const Shop = () => {
   const [product, setProduct] = useState([]);
   const [cart, setCart] = useState([]);
   const [search, setSearch] = useState([]);




   useEffect(() => {
      fetch('products.JSON')
         .then(res => res.json())
         .then(data => {
            setProduct(data);
            setSearch(data);
         })
   }, [])


   const addToCart = (id) => {
      const exsist = cart.find(pd => pd.key === id.key)

      let total = [];
      if (exsist) {
         const mines = cart.filter(pro => pro.key !== id.key);
         exsist.quentty = exsist.quentty + 1;
         total = [...mines, id]


      }
      else {
         id.quentty = 1;
         total = [...cart, id]
      }


      setCart(total);
      addToDb(id.key);

   }

   //updbdata
   useEffect(() => {
      const upData = getUp();
      if (product.length) {
         let addUp = [];
         for (const key in upData) {
            const matchData = product.find(match => match.key === key)
            if (matchData) {
               const quentty = upData[key];
               matchData.quentty = quentty;
            }
            addUp.push(matchData)
            setCart(addUp);
         }
      }
   }, [product]);

   const searchProduct = (event) => {
      const searchValue = event.target.value;
      const searchItems = product.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()));
      setSearch(searchItems)
   }



   return (
      <Container fluid>
         <Row>
            <div className='search-product my-4'>
               <input onChange={searchProduct} className="form-control" type="text" placeholder="Search" aria-label="Search" />
            </div>
            {/* product area */}
            <Col className='product pt-2' lg={9} >
               <Row>
                  {
                     search.map(pro => <Products pro={pro} key={pro.key} addToCart={addToCart} ></Products>)
                  }
               </Row>
            </Col>

            {/* cart area */}
            <Col className='cart pt-5' lg={3} >
               <Cart cart={cart} >
                  <button>revew</button>
               </Cart>
            </Col>
         </Row>
      </Container>
   );
};

export default Shop;