// import React, { useEffect } from 'react'
// import './S.css'

// const NewTask = () => {
//     useEffect(() => {

//         alert('you want to continue')

//     },[])

//     const first = () => {
//         alert('this is first button')
//     }
//     const second = () => {
//         alert('this is second button')
//     }
//     const third = () => {
//         alert('this is third button')
//     }
//     const forth = () => {
//         alert('this is forth button')
//     }
//     return (
//         <div>
//             <center><h1>Article cards with react js</h1></center>

//             <div className='main'>

//                 <diV className='first'>

//                     <button className='btn btn-primary' onClick={first}>Click </button>
//                     <h2>Snow in turkey begin travel <br></br> woes</h2>
//                     <h6>heavy snowstrom in turkey creates havoc as hundreds of <br></br>village left without power ,and hundred of road closed</h6>

//                 </diV>

//                 <diV className='second'>

//                     <button className='btn btn-secondary' onClick={second}>Click </button>
//                     <h2>Landslide leaving thousand <br></br>homeless</h2>
//                     <h6>heavy snowstrom in turkey creates havoc as hundreds of <br></br>village left without power ,and hundred of road closed</h6>

//                 </diV>
//                 <diV className='third'>

//                     <button className='btn btn-info' onClick={third}>Click </button>
//                     <h2>Hail the size of baseball in<br></br> New york</h2>
//                     <h6>heavy snowstrom in turkey creates havoc as hundreds of <br></br>village left without power ,and hundred of road closed</h6>

//                 </diV>
//                 <diV className='forth'>

//                     <button className='btn btn-danger' onClick={forth}>Click </button>
//                     <h2>Earth quack  destroying<br></br> San Freansisco</h2>
//                     <h6>heavy snowstrom in turkey creates havoc as hundreds of <br></br>village left without power ,and hundred of road closed</h6>


//                 </diV>
//             </div>


//         </div>
//     )
// }

// export default NewTask



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React from 'react'

const NewTask = () => {
    const first=()=>
    {
        alert('this is button')
    }
  return (
    <center>
    <div style={{display:'inline-block'}}>
    <h2>Login</h2>

      <label>Name <input type='text' className='form-control'></input></label><br></br>
      <label>Password <input type='text' className='form-control'></input></label><br></br><br></br>
      <button className='btn btn-primary' style={{width:'50%'}} onClick={first}>Submit</button>


    </div>
    </center>
  )
}

export default NewTask

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////