import React, { useEffect, useState } from 'react'


const FirstEffect = () => {

    const [data, setData] = useState('one');

    useEffect(() => {

        alert('hi there its new')
    }, [])

    const newcall = () => {
        setData('two')




    }
    const newcalldata = () => {
        setData('three')
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