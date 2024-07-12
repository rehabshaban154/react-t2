import React from 'react'
import { Component } from "react";
import persons from '../persons.json'
import Person from './Person';
export default class Persons extends Component{
  render(){
    return (
      <>
      <h2 style={{textAlign:'center',fontFamily:'cursive',letterSpacing:'3PX'}}>Persons</h2>
      <div className='d-flex gap-2  justify-content-center container flex-wrap'>
            {persons.map(person => (
              <Person key={person.id} person={person} />
            ))}
        </div>
      </>
    )
  }
}