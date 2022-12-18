import React,{useState} from 'react'


const NewState = () => {
    const [count, setCount] = React.useState('hey there')
  return (
    <div>
        <h1>===============New State============</h1>
        <h1>{count}</h1>
        <button className='btn btn-primary' onClick={()=>{setCount('SHREYAS')}}>click</button>
             
    </div>
  )
}

export default NewState