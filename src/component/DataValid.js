import React, { useState } from 'react'
import NewCount from './NewCount'
import NewValue from './NewValue'

const DataValid = () => {
    const [data, setData] = useState(false)
    const newabc=()=>
    {
        setData(true)
    }
    return (
        <div>
            <h1>============data valid===========</h1>
            {data &&(
            <><NewCount />
            <NewValue /></>
            )
            }
            <button className='btn btn-success' onClick={newabc}>Click Me</button>

        </div>
    )
}

export default DataValid