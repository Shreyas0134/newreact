import React,{useEffect, useLayoutEffect} from "react";

const NewAppChild = () => {

    // useLayoutEffect(()=>
    //     {
    //         alert('this is use layout effect')
    //     })

    useEffect(()=>
    {
        alert('this is use effecr')
    })
    const Firstclick=()=>
    {
     alert('this is first click ')
    }
    const Secondclick=()=>
    {
      alert("this is second click")
    }
  return (
    <div>
      <h1>NewAppChild</h1>
      <button className="btn btn-primary" onClick={Firstclick}>click me</button>
      <button className="btn btn-info" onClick={Secondclick}>New Click me</button>
    </div>
  );
};

export default NewAppChild;




















/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { forwardRef, useImperativeHandle } from "react";

// const NewAppChild = (props, ref) => {
//   useImperativeHandle(ref, () => {
//     return {
//       childData,
//     };
//   });
//   const childData = () => {
//     alert("this is child data");
//     alert("this is child data ssv");
//     alert("this is child data wsfsf");
//   };
//   return (
//     <div>
//       <h1>NewAppChild</h1>''
//       <button className="btn btn-info" onClick={childData}>
//         this is child NewAppChild
//       </button>
//     </div>
//   );
// };

// export default forwardRef(NewAppChild);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
