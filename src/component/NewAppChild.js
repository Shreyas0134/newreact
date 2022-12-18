
import React from 'react'

const NewAppChild = () => {
  return (
    <div>
    
    
    <h1>NewAppChild</h1>
    <button className='btn btn-info' >this is child NewAppChild</button>

    
    
    
    
    
    
    </div>
  )
}

export default NewAppChild
















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