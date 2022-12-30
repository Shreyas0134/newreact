import React from 'react'
import Two from './Two'

const One = () => {


    let obj={
        one:'shreyas',
        two:2
    }
  return (
    <div>
           <h1>{obj.one}</h1>
           
           <Two abc={obj}/>

         


    </div>
  )
}

export default One