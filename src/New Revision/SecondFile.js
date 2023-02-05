import React from 'react'

const SecondFile = (props) => {
  return (
    <div>
    <h1>this is second file data</h1>
    <h1>{props.sf.one}</h1>
    <h1>{props.sf.two}</h1>
    

      <h3>below data is from array </h3>


    <h1>{props.arr[0]}</h1>
    <h1>{props.arr[1]}</h1>
    <h1>{props.arr[2]}</h1>
    <h1>{props.arr[3]}</h1>


        
    </div>
  )
}

export default SecondFile