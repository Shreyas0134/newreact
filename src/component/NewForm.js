import React, { useRef } from 'react'

const NewForm = () => {
    const namevalue = useRef();;
    const addressvalue = useRef();
    const cityvalue = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        console.log('this is submit handler')
        console.log('this is name=>', namevalue.current.value)
        console.log('this is address=>', addressvalue.current.value)
        console.log('this is city=>', cityvalue.current.value)

    }

    const newSubmit = () => {

        console.log('this is new submit button')
        console.log('this is name=>', namevalue.current.value)
        console.log('this is address=>', addressvalue.current.value)
        console.log('this is city=>', cityvalue.current.value)
         

                            
                               
    }
    return (
        <div>
            <h1><center>NewForm</center></h1>
            <form onSubmit={submitHandler} style={{ margin: '2rem' }}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <label style={{ textAlign: 'right' }}>Username:</label>
                    <input type="text" className='form-control' style={{ marginLeft: '3rem', width: 'auto' }} ref={namevalue} placeholder="Enter your name" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <label >address:</label>
                    <input type="text" className='form-control' style={{ marginLeft: '4rem', width: 'auto' }} ref={addressvalue} placeholder="Enter your address" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <label >City:</label>
                    <input type="text" className='form-control' style={{ marginLeft: '5.5rem', width: 'auto' }} ref={cityvalue} placeholder="Enter your city" />
                </div>

                <button className='btn btn-primary' type='submit'>Submit</button>
                <button className='btn btn-danger' type='button' onClick={newSubmit}>new submit</button>
            </form>
        </div>
    )
}

export default NewForm;