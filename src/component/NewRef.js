import React, { useRef } from 'react'

const NewRef = () => {
  const abc = useRef();
  //const def=useRef();

  const clickhandeler = () => {

    console.log('this is first input=>', abc.current.value)

  }

  const newBtn = (event) => {

    console.log('this is second input=>', event.target.value)

  }

  const ab = () => {
    alert('this is alert')
  }

  return (

    <div>
      <h1>==========NewRef=============</h1>
      <input type='text' className='form-control' placeholder='first input' ref={abc} onChange={newBtn} style={{ width: 'auto', marginBottom: '1rem' }} />
      <button className='btn btn-primary' onClick={clickhandeler}>Click</button>

      <button className='btn btn-primary' onMouseDown={ab}>Click</button>
      <button className='btn btn-primary' onMouseUp={ab}>Click</button>
      <button className='btn btn-primary' onMouseEnter={ab}>Click</button>
      <button className='btn btn-primary' onMouseLeave={ab}>Click</button>
      <button className='btn btn-primary' onMouseMove={ab}>Click</button>
      <button className='btn btn-primary' onMouseOut={ab}>click</button>
      <button className='btn btn-primary' onMouseOver={ab}>click</button>
      <button className='btn btn-primary' onDoubleClick={ab}>click</button>
    </div>
  )
}

export default NewRef;  
