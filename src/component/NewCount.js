import React,{useState} from 'react'

const NewCount = () => {
    const[data,setData]=useState(1)
  return (
    <div>
     <h1>================== newcount ======================</h1>
    
    <h1>{data}</h1>
       
        <button className='btn btn-primary' onClick={()=>{setData(data+1)}}>add by 1</button>
        <button className='btn btn-danger' onClick={() =>(setData(data+10))}>add 10</button>
        <button className='btn btn-info' onClick={()=>{setData(data*2)}}>multiply by 2</button>
    </div>
  )
}

export default NewCount;