import React from 'react';
import Data from './Data';
import './card.css';


const Card = (props) => {
  return (
    <div className='card'>
        <Data name={props.item[0].name} age={props.item[0].age} ></Data>
        <Data name={props.item[1].name} age={props.item[1].age} ></Data>
      {props.children}
    </div>
  )
}

export default Card
