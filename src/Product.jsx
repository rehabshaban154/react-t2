/* eslint-disable react/prop-types */
import React from 'react';

const Product = ({ product }) => {
  return (
    <div className='col-md-3 p-2 bg-dark text-white my-5 text-center position-relative' style={{minHeight:'167px'}}>
      <div className="dis" style={{height:'146px'}}>
      <h2 style={{marginLeft:'10px'}}>{product.name}</h2>
      <p>{product.description}</p>
      <p  style={{padding:'7px',backgroundColor:'gray',fontWeight:'bold',color:  'black',width:'fit-content',position:'absolute',top:'0',left:'0',borderRadius:'2PX'}}
      >{product.id}</p>
      <p style={{fontWeight:'bold'}}>{product.category}</p>
      <p style={{fontWeight:'bold'}}>{product.price}</p>
      <p style={{fontWeight:'bold',padding:'7px',backgroundColor:'gray',color:'black',width:'fit-content',position:'absolute',top:'45px',left:'0',borderRadius:'2PX'}}>{product.stock}</p>
      </div>
      <div className="btns">
      <div className='btn btn-danger d-block my-3'>Delete</div>
      <div className='btn btn-primary d-block'>Update</div>
      </div>
     
    </div>
  );
};

export default Product;
