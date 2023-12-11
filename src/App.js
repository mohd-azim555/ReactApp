import React from 'react';
import Card from './Component/Card';

function App() {
    const res =[
       { id:1,
        name:"Azim",
        age:22},

        { id:2,
        name:"saddam",
        age:23},

    ];
    const res2 =[
        { id:1,
         name:"Asad",
         age:29},
 
         { id:2,
         name:"Azad",
         age:26},
 
     ];

  return (
    <div>
      <Card item={res}>
      </Card>
      <Card item={res2}/>
    </div>
  )
}

export default App;

