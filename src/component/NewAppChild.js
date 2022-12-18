
import React, { forwardRef, useImperativeHandle } from 'react'

const NewAppChild = (props,ref) => {
    useImperativeHandle(ref,()=>
    {
        return {
            childData
        }
    })
    const childData=()=>
  {
    alert('this is child data')
  } 
  
  
  
  return (
    <div>
    
    
    <h1>NewAppChild</h1>
    <button className='btn btn-info' onClick={childData}>this is child NewAppChild</button>

    
    
    
    
    
    
    </div>
  )
}

export default forwardRef(NewAppChild)
















// import React, { forwardRef ,useImperativeHandle} from 'react'

// const NewAppChild = (props,ref) => {

//     useImperativeHandle(ref,()=>{
//   return{
//     childData
//   }
//     })
//     const childData=()=>
//     {
//         alert('new child call')
//     }
//   return (
//     <div>
//      ===========NewAppChild==========
     
//      <button className='btn btn-info' onClick={childData}>click me child</button>
     
//      </div>
//   )
// }

// export default forwardRef(NewAppChild)