import React from 'react'
import { Component } from "react";
import Locations from './Locatins';
// import Persons from './Persons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Persons from './Persons';
import Products from './Products';
export default class App extends Component{
  render(){
    return (
      <>
      <Locations />
     <Persons/>
     <Products />
      </>
    )
  }
}