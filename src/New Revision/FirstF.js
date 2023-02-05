import React from 'react'
import SecondFile from './SecondFile';


const FirstF = () => {


    
    let abc={one:'shreyas',two:'karandikar'};
    let pqr=[1,'shreyas',2,'karandikar']
      
  return (
    
    <div>
    
   <h1> ==================FirstF==============</h1>

   <h1>{abc.one}</h1>
    <h1>{abc.two}</h1>

    <h2>Below info is from array </h2>

    <h1>{pqr[0]}</h1>
    <h1>{pqr[1]}</h1>
    <h1>{pqr[2]}</h1>
    <h1>{pqr[3]}</h1>

    <SecondFile sf={abc} arr={pqr}  />

    

    
    
    
    </div>
  )
}

export default FirstF