import React from 'react'
import Two from './Two'

const One = () => {


    let abc={one:'shreyas',two:'karandikar'}
    
  return (
    <div>
          <h1>{abc.one}</h1>
          
          <Two pqr={abc}/>

         


    </div>
  )
}

export default One