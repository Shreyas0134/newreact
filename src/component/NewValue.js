import React, { useState } from 'react'

const NewValue = () => {
    const[dec,setDec]= useState(20)
  return (
    <div>
        <h1>=======new value=======</h1>
        <h1>{dec}</h1>
        <button className='btn btn-primary' onClick={()=>{setDec(dec-1)}}>click</button>
        <button className='btn btn-danger' onClick={()=>{setDec(dec-5)}}>click by 5</button>
    </div>
  )
}

export default NewValue