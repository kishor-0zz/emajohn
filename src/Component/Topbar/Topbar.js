import React from 'react';
import './Topbar.css';
import toplogo from '../../image/logo.png'
import { Col, Row } from 'react-bootstrap';

const Topbar = () => {
   return (
      <div className='topbar container text-center py-2' >
         <Row>
            <Col lg={12} >
               <img src={toplogo} alt="logo" />
            </Col>
         </Row>
      </div>
   );
};

export default Topbar;