import React, { useEffect, useState } from 'react'



const NewEffect = () => {

    const [data, setData] = useState('hi');
    const [newData, setNewData] = useState('one')

    useEffect(() => {

        alert('you want to continue', data)
        // console.log('you want to continue',data)

    }, [newData])//this is used so that the alert only shows when the page is loaded  not everytime a action is done on page
    const newbtn = () => {

        alert('this is react')
        // console.log('this is react')
        setData('hey there')
    }
    const btnnew = () => {
        alert('this is new react')
        setData('hello')
    }
    const newbtnone = () => {
        alert('this is second div first button')
        setNewData('hey second button')

    }
    const btnnewone = () => {
        alert('this is seond div second button')
        setNewData('hi second second button')
    }
    return (
        <div>
            <div className='wrapper'>
                <h1>=============NewEffect===============</h1> <center>
                    <button className='btn btn-primary' onClick={newbtn}>click</button></center>
                <button className='btn btn-danger' onClick={btnnew}>click me</button>
                <h1>{data}</h1>
            </div>




            <div>
                <h1>=============NewEffect===============</h1> <center>
                    <button className='btn btn-primary' onClick={newbtnone}>click</button></center>
                <button className='btn btn-danger' onClick={btnnewone}>click me</button>
                <h1>{newData}</h1>
            </div>








        </div>
    )
}

export default NewEffect