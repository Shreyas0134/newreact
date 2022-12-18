import React, { useState } from 'react'

const NewAlert = () => {
    const [pqr, setPqr] = useState(false)
    const newpqr = () => {
        setPqr(true)

    }
    const newxyz = () => {
              
        if(pqr === true)
        {
            alert('hello')
        }
        else
        {
            alert('bye')
        }   

    }
    return (
        <div>
            <h1> ============NewAlert===========</h1>
            <button className='btn btn-secondary' onClick={newpqr}>
                this is alert
            </button>
            <button className='btn btn-primary' onClick={newxyz}>click</button>
        </div>

    )
}

export default NewAlert