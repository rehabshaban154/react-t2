import React from 'react'
import { Component } from "react";
import products from '../products.json'
import Product from './Product';
export default class Products extends Component{
  render(){
    return (
      <>
      <h2 style={{textAlign:'center',fontFamily:'cursive',letterSpacing:'3PX'}}>Products</h2>
      <div className='d-flex gap-2  justify-content-center container flex-wrap'>
            {products.map(product => (
              <Product key={product.id} product={product} />
            ))}
        </div>
      </>
    )
  }
}