import React, { useState } from 'react'

const Data = (props) => {
   
  const[name,setName]= useState(props.name);
 
  function changeHandler(){
    console.log("Clicked");
    setName("Honey");
  };
  return (
    <div>
      <h1>my name is {name}</h1>
      <p>Age is {props.age}</p>
      <button onClick={changeHandler} >Click</button>
    </div>
  )
}

export default Data;

  