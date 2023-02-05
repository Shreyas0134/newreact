import React, { useEffect, useState } from 'react'


const FirstEffect = () => {

   const [data,setData]=useState('hi there')

   useEffect=() => {
         alert('I am in useEffect');
            
    }

    const newcall=()=>{
        setData('shreyas');
    }
    const newcalldata=()=>
    {
        setData('karandikar');
    }

     
    return (
        <div>
            <h1>======FirstEffect=====</h1>
            <h1>{data}</h1>
            <button className='btn btn-primary' onClick={newcall}>Click</button>
            <button className='btn btn-danger' onClick={newcalldata}>click Me</button>



        </div>
    )
}

export default FirstEffect