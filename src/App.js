

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import BootAll from './component/BootAll.js';
//import FontIcons from './component/FontIcons.js';
// import { faFacebook } from '@fortawesome/free-brands-svg-icons'

// import photo from './image/logo.gif'

// import NewRef from './component/NewRef';
//import DyamicChange from './component/DynamicChange';

//Calling the function from different file-----

// import './App.css';
// import{Aaa, Bbb,NewImport} from "../src/component/NewImport";

// const App = () => {

//   const newvariable = "my name";
//   var newvar="pqr xyz";

//   let obj = {
//     name: "shreyas",
//     address: "balajinagar",
//     city: "pune",
//     education: "BCA",
//     work: "software developer",
//   }

//   let arr = ["one", "two", "three", "four", "five"];

//      return (
//        <div>
//       <NewImport/>
//         <Aaa/>
//         <Bbb/>
//         <h1>{newvariable}</h1>
//         <h1>{newvar}</h1>

//         <h3>{obj.name}</h3>
//         <h3>{obj.address}</h3>
//         <h3>{obj.city}</h3>
//         <h3>{obj.education}</h3>
//         <h3>{obj.work}</h3>

//         <h4>{arr[0]}</h4>
//         <h4>{arr[1]}</h4>
//         <h4>{arr[2]}</h4>
//         <h4>{arr[3]}</h4>
//         <h4>{arr[4]}</h4>

//   </div>
//     )
// }

// export default App;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//getting the value from this to another file using props

// import AllData from "./component/AllData";
// import GetData from "./component/GetData";
// import ObjData from "./component/ObjData";
// import ArrData from "./component/ArrData";
// import NewCmp from "./component/NewCmp";

// const App = () => {
//   var abc = 'first call';

// var obj = {
//     one:'first',
//     two:'second',
//     three:'third'
// }
// let arr = ['one','two','three','four','five'];
// var newdata='react component';

//  return (
//     <div>
//       <h1>App</h1>
//       <GetData pqr={abc}/>
//       <ObjData obj={obj}/>
//       <ArrData arr={arr}/>
//       <p>{newdata}</p>
//       <AllData  abc={abc} obj={obj} arr={arr}/>

//     </div>
//   );
// };
// export default App;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//sending data and checking
// import CheckData from "./component/CheckData";

// const App = () => {
//   var check = true;
//   var str = "checking all data";
//   var num = 12345;
//   var obj = {
//     aaa: "one",
//     bbb: "two",
//     ccc: "three",
//     ddd: "four",
//     eee: "five",
//   }

//   var arr =['abc', 124,false,'pqr','xyz'];

//     return(
//         <div>
//             <h1>===============App===============</h1>
//             <CheckData check={check} str={str} num={num} obj={obj} arr={arr}/>

//         </div>
//     )
// }
// export default App;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//dynamic change in another file
// import DynamicChange from "./component/DynamicChange";

// const App = () => {

//   const abc = false;
//     return(
//         <div>
//             <h1>==============App==============</h1>
//             <DynamicChange abc={abc}/>
//         </div>
//     )
// }
// export default App;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//calling of login form
// import React from "react";
// import LogInForm from "./component/LogInForm";

// const App = () => {
//     return(
//         <div>
//             <LogInForm />
//         </div>
//     )
// }
// export default App;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//if else statements

// import react from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App()
//   var newvariable = 'abc'
//   const newFunction = () =>
//     console.log('this is function call 11');
//     if(newvariable === 'a'){
//       alert('arrow function');
//     }else if(newvariable === 'b'){
//       alert('last else call')
//     }else{
//       alert('End call')
//     }
//   }
//   function secondFunction() {
//     console.log('this is new function 22')
//     alert('normal function');
//     for(var i=0 ; i<=10; i++){
//       console.log('the current value is ==>',i)
//     }
//   }
//   return (
//     <div>
//   <h1 style={{
//   <h1 className='abc'>First page</h1>
//   <button className='clickstyle' onClick={newFunction} >click</button>
//   <button className='submitstyle' onClick={secondFunction} >submit</button>
//   <button  onClick={() => {con('this is newClick') }}>newClick</button>
//   <button  onClick={() => {
//     console.log('this is newClick')
//     newFunction()
//     }}>newClick</button>

//       <button  onClick={() => {
//         console.log('this is newSubmit')
//         secondFunction()
//         }}>newSubmit</button>
//     </div>
//   );
// }
// export default App;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const App = () => {
//   var aaa='';

//   const abc=()=>{
//     var a=document.getElementById("t1").value;
//     alert(a);

//   }
//   const xyz=(event)=>{

//       aaa=event.target.value;
//       console.log('this is variable value ======>',aaa);
//       console.log(event.target.value);
//   }
//   const pqr=(event)=>{
//     console.log('this is pqr value ===>',event.target.value);
//   }

//   const www=()=>{
//    alert('Hey');
//   }

//   return (
//     <div>
//     <h1>===================App=================</h1>
//     <div>
//       <h3 style={{marginLeft:'5rem',marginRight:'2rem',display:'grid'}}>name</h3>
//       <input type="text" id='t1' className='form-control' style={{width:'9rem', marginLeft:'9rem',marginRight:'2rem'}} onChange={(event)=> {
//         console.log(event.target.value)
//         }} />
//         <h2 style={{marginLeft:'5rem',marginRight:'2rem'}}>Email</h2>
//         <input type={'text'} id='t2' className='form-control' style={{width:'9rem',}} onChange={xyz}/>
//         <h1>this new value === {aaa}</h1>
//         <input type={'text'} id='t2' className='form-control' style={{width:'9rem',}} onChange={(event)=>{pqr(event)}}/>

//     </div>
//     <button className='btn btn-primary' onClick={abc}  style={{margin:'2rem 0rem 0rem 10rem'}}>Click</button>
//     <button className='btn btn-danger' onDoubleClick={www} style={{margin:'2rem 0rem 0rem 10rem'}}>Submit</button>
//     <button className='btn btn-warnnig' onMouseOver={www} style={{margin:'2rem 0rem 0rem 10rem'}}>Submit</button>
//     <button className='btn btn-success' onMouseOut={www} style={{margin:'2rem 0rem 0rem 10rem'}}>Submit</button>
//     <button className='btn btn-info' onMouseMove={www} style={{margin:'2rem 0rem 0rem 10rem'}}>Submit</button>
//     <button className='btn btn-dark' onMouseEnter={www} style={{margin:'2rem 0rem 0rem 10rem'}}>Submit</button>
//     <button className='btn btn-light' onMouseLeave={www} style={{margin:'2rem 0rem 0rem 10rem'}}>Submit</button>
//     <button className='btn btn-secondary' onMouseDown={www} style={{margin:'2rem 0rem 0rem 10rem'}}>Submit</button>
//     <button className='btn btn-warning' onMouseUp={www} style={{margin:'2rem 0rem 0rem 10rem'}}>Submit</button>

//     </div>
//   );
// }

// export default App

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  const App = () => {

//    return (
//     <div>
//       <h1>====== App ======</h1>
//       <button className='btn btn-primary' style={{ margin: '1rem', color: 'black' }}>Click Me</button>
//       <BootAll />
//       <FontIcons />

//     </div>
//    )}
//    export default App;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React from 'react'

// const App = () => {
//   return (
//     <div>

//       <h1>============App==========</h1>
//       <p>This is a app component</p>
//       <NewRef />
//     </div>
//   )
// }

// export default App

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import React from 'react';
// import NewForm from './component/NewForm';
// const App = () => {
//   return (
//     <div>
//       <h1>============Form==========</h1>

//       <NewForm/>

//     </div>
//   )
// }
// export  default App;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React from "react";
// import NewChild from "./component/NewChild";

// const app = (props) => {
//   return (
//     <div>
//       <h1>============App==========</h1>
//       <h1>this is NewChild</h1>
//       <NewChild>
//         <div>
//           <p>
//             Powerful, extensible, and feature-packed frontend toolkit. Build and
//             customize with Sass, utilize prebuilt grid system and components,
//             and bring projects to life with powerful JavaScript plugins.
//           </p>
//           <p>
//             Install Bootstraps1 source Sass and JavaScript files via npm,
//             RubyGems, Composer, or Meteor. Package managed installs dont include
//             documentation or our full build scripts.
//           </p>
//           <h1>ibjbsjkbjkgvnsvjsvnjk this is demo</h1>h{props.h1}
//           {props.h2}
//           {props.h3}
//         </div>
//       </NewChild>
//     </div>
//   );
// };
// export default app;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React from 'react'
// import HocFirst from "./component/HocFirst";
// import HocSecond from "./component/HocSecond";
// import HocAll from "./component/HocAll";

// const App = () => {
//   return (
//     <div>

//     <HocFirst cmp={HocAll}/>
//     <HocSecond a={HocAll}/>

//     </div>
//   )
// }

// export default App

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React from 'react'
// import NewData from "./component/NewData";

// export const App = () => {
//   return (
//     <div>
//     <NewData/>

//      </div>
//   )
// }
// export default App

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///usestate function...

// import React,{useState}  from 'react'

// const App = () => {
//   const [count, setCount] = useState(89)
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => { setCount(23) }}>click </button>

//       </div>
//       )
// }

//       export default App

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  import React from 'react'
//  import NewState from './component/NewState';
// // import NewCount from "./component/NewCount";
// // import NewValue from "./component/NewValue";
// import DataValid from "./component/DataValid";
// import NewAlert from "./component/NewAlert";

//  const App = () => {
//    return (
//      <div>
//      <center>
//         <NewState/>

//          <DataValid/>
//          <NewAlert/>

//          </center>
//      </div>
//    )
//  }

//  export default App
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React from 'react'
// import NewCard from "./component/NewCard";

// const App = () => {
//   return (
//     <div>
//       <NewCard />

//     </div>
//   )
// }

// export default App
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React from 'react'
// // import Calling from "./Revision/Calling";
// import Calldiff from "./Revision/Calldiff";

// const App = () => {
//   return (
//     <div>
//     {/* <Calling/> */}
//    <Calldiff/>
//     </div>
//   )
// }

// export default App

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import React from 'react'
// import useCustom from "./component/useCustom";
// import useIncrease from "./component/useIncrease";
// import FirstImg from "./component/FirstImg";
// import SecondImg from "./component/SecondImg";

// const App = () => {
//   const [newlist, setNewlist] =React.useState(false)
//   const newChange = () => {
//     setNewlist(true)
//    }
//   const data = useCustom(3, 5)
//   const data1 = useIncrease(3, 5)

//   return (
//     <div>=============App==================
//       <h1>{data}</h1>
//       <h1>{data1}</h1>
//       <h1>image change</h1>
//       <button className="btn btn-primary" onClick={newChange}>click</button>
//     {
//       newlist === true ?
//         <FirstImg />
//         :<SecondImg />
//     }

//     </div>

//   )
// }

// export default App
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import React from 'react'

// const App = () => {
//   const [newImg, setNewImg] = React.useState(false)
//   const [newImg1, setNewImg1] = React.useState(false)
//   const [newImg2, setNewImg2] = React.useState(false)
//   const [newImg3, setNewImg3] = React.useState(false)

//   const newabc = () => {
//     setNewImg(true)
//     setNewImg1(false)
//     setNewImg2(false)
//     setNewImg3(false)
//   }
//   const newpqr = () => {
//     setNewImg(false)
//     setNewImg1(true)
//     setNewImg2(false)
//     setNewImg3(false)

//   }
//   const newxyz = () => {
//     setNewImg(false)
//     setNewImg1(false)
//     setNewImg2(true)
//     setNewImg3(false)

//   }
//   const newnnn = () => {
//     setNewImg(false)
//     setNewImg1(false)
//     setNewImg2(false)
//     setNewImg3(true)

//   }
//   return (
//     <div><h1>This is image file</h1>
//       <div style={{ display: 'flex', flexDiretion: 'row', justifyContent: 'space-between' }}>
//         <div>
//           <button className="btn btn-primary" onClick={newabc}>First img</button>

//           {
//             newImg &&
//             <img src={require("./image/a.jpeg")} alt="image" />
//           }
//         </div>

//         <div>
//           <button className="btn btn-secondary" onClick={newpqr}>second image</button>
//           {
//             newImg1 &&
//             <img src={require("./image/b.jpeg")} alt="image" />
//           }
//         </div>
//         <div>
//           <button className="btn btn-success" onClick={newxyz}>third image</button>
//           {
//             newImg2 &&
//             <img src={require("./image/new.jpg")} style={{ height: '10rem', width: 'auto' }} alt="image" />
//           }
//         </div>
//         <div>
//           <button className="btn btn-danger" onClick={newnnn}>fourth image</button>
//           {
//             newImg3 &&
//             <img src={require("./image/react.png")} style={{ height: '10rem', width: 'auto' }} alt="image" />
//           }
//         </div>
//       </div>
//     </div>
//   )
// }

// export default App

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import React from "react";
// import  { useReducer } from 'react'
// const initialState = { count: 0 };
// function reducer(state,action) {
//   switch (action.type) {
//     case 'increase':
//       return {count: state.count + 1 };

//     default:

//       return state.count;
//   }
// }

// const App = () => {
//   const [ state, dispatch ] = useReducer(reducer, initialState);
//   return (
//     <div>
//     <h1>bshvgksv</h1>
//       <h1>{state.count}</h1>

//       <button onClick={() => { dispatch({ type: 'increase' }) }}>click</button>

//     </div>
//   )
// }

// export default App

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React from "react";
// import  { useReducer } from 'react'
// const initialState = { count: 20 };
// function reducer(state,action) {
//   switch (action.type) {
//     case 'decrease':
//       return {count: state.count - 1};

//     default:

//       return state.count;
//   }
// }

// const App = () => {
//   const [ state, dispatch ] = useReducer(reducer, initialState);
//   return (
//     <div>
//     <h1>decrease values</h1>
//       <h1>{state.count}</h1>

//       <button onClick={() => { dispatch({ type: 'decrease' }) }}>click</button>

//     </div>
//   )
// }

//  export default App
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import React, { useReducer } from 'react'
// import {InitialState} from "./component/InitialState";
// import {reducer} from "./component/NewReducer";

// const App = () => {
//   const [state, dispatch] = useReducer(reducer, InitialState)

//   return (
//     <div>
//     <h1>{state.count}</h1>
//     <button  className="btn btn-primary" onClick={()=>{dispatch({type:'one'})}}>click</button>
//     <button className="btn btn-danger" onClick={()=>{dispatch({type:'two'})}}>click</button>
//     <button className="btn btn-danger" onClick={()=>{dispatch({type:'three'})}}>click</button>

//     <button className="btn btn-danger" onClick={()=>{dispatch({type:'four'})}}>click</button>

//     </div>
//   )
// }

// export default App

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useReducer } from 'react'

// const initialState=
// {
//   data:'ABCD'
// }
// function reducer(state,action)
// {
//   switch(action.type)
//   {
//     case 'one':
//     return{data:'xyz'}
//     default:
//       return state.data;

//   }
// }

// const App = () => {
//   const [store,dispatch]=useReducer(reducer,initialState)
//   return (
//     <div>
//     <h1>{store.data}</h1>
//     <button onClick={()=>{dispatch({type:'one'})}}>click</button>

//     </div>
//   )
// }

// export default App

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import React, { useReducer } from 'react'
// import {initialState} from './component/AllReducer';
// import {reducer} from './component/AllValue'

// const App = () => {

//   const [state,dispatch] =  useReducer(reducer,initialState)
//   const newDataVal = () =>
//   {
//    dispatch({type:'findData'})
//   }
//   return (
//     <div>

//     <h1>{state.firstdata}</h1>
//     <button onClick={newDataVal}>click</button>

//     </div>
//   )
// }

// export default App

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import React ,{useReducer} from 'react'
// import {reducer} from './component/AllReducer'
// import { initialState } from "./component/AllValue";

// const App = () => {
//   const [state,dispatch] = useReducer(reducer,initialState)
//   // const clickmeone = () =>
//   // {
//   //  dispatch({type:'one',payload:'Hi'})
//   // }
//   return (
//     <div>

//     <h1>{state.data}</h1>
//     <button className="btn btn-primary" onClick={()=>{dispatch({type:'one',payload:'HI'})}}>click one ...</button>
//     <button className="btn btn-danger" onClick={()=>{dispatch({type:'one',payload:'Hey'})}}>click two...</button>
//     <button className="btn btn-info" onClick={()=>{dispatch({type:'one',payload:'bhag'})}}>click three...</button>
//     <button className="btn btn-secondary" onClick={()=>{dispatch({type:'one',payload:'gotya'})}}>click four...</button>
//     <button className="btn btn-primary" onClick={()=>{dispatch({type:'one',payload:'lllalallalla'})}}>click five...</button>
//     </div>
//   )
// }

// export default App
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React from 'react'
// import NewTask from "./component/NewTask";
// import ImageTask from "./component/ImageTask";

// const App = () => {
//   return (
//     <div>
//      <NewTask/>

//     </div>
//   )
// }

// export default App

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useRef } from 'react'
// import NewAppChild from "./component/NewAppChild";

// const App = () => {
//   const newref=useRef();
//   const parentData=()=>
//   {
//          newref.current.childData();
//   }
//   return (
//     <div>======App=====

//     <button className="btn bnt-primary" onClick={parentData}>click me...</button>
//     <NewAppChild ref={useRef}/>

//     </div>
//   )
// }

// export default App

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useRef } from 'react'
// import NewAppChild from "./component/NewAppChild";

// const App = () => {
//   const newref=useRef();
//   const parentData=()=>
//   {
//            newref.current.childData();
//   }

//   return (
//     <div>
//     <h1>App</h1>

//     <button className="btn btn-primary"  onClick={parentData}>this is parent app</button>
//     <NewAppChild ref={newref}/>
//     </div>
//   )
// }

// export default App

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React from 'react'
// import NewTask from "./component/NewTask";
// // import NewAppChild from "./component/NewAppChild";

// const App = () => {

//   return (
//     <div>

//     {/* <button className="btn btn-danger">Parent click</button>
//     <NewAppChild/> */}
//     <NewTask/>

//     </div>
//   )
// }

// export default App

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// /

// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Layout from "./Routing/Layout";
// import Home from "./Routing/Home";
// import Contact from "./Routing/Contact";
// import NoPage from "./Routing/NoPage";

// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Layout />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="*" element={<NoPage />} />

//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default App;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import React from 'react'
// import Login from './React Project/Login';
// import MainPage from './React Project/MainPage';

// const App = () => {
//   return (
//     <div>
//     {/* <Login/> */}
//     <MainPage/>

//     </div>
//   )
// }

// export default App

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React from 'react'
// // import NewJason from './Jason examples/NewJason';
// import Login from './React Project/Login';
// // import { Router } from 'react-router';


// const App = () => {
//   return (
//     <div>
        
//         {/* <NewJason/> */}
       
//         <Login/>
      

//     </div>
//   )
// }

// export default App

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// import One from './Props/One';

// const app=()=>
// {
//   return(
//     <div>
//     <One/>
    
         

//     </div>
//   )
// }
// export default app;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
// import React from 'react';

// const app=()=>
// {
//   return(
//     <div>
//       <h1>hello there</h1>
//     </div>
//   )
// }

// export default app;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React from 'react'
// // import NewState from './component/NewState';
// // import NewEffect from './component/NewEffect';
// import FirstEffect from './component/FirstEffect';




// const App = () => {
//   return (
//     <div>
//     <h1>
//      <FirstEffect/>
//      {/* <NewState/> */}
     
      
//     </h1>
    
    
//     </div>
//   )
// }

// export default App;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React from 'react'
// import FirstF from './New Revision/FirstF'


// const App = () => {
//   return (
//     <div>
//     <FirstF/>
   
      
//     </div>
//   )
// }

// export default App

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React from 'react'

// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// const NewApp = () => {
//       return(
//      <div>
//       console.log('hello')
//      </div>


//       )
// }

// export default {App,NewApp} 


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// const App = () => {
//   const items = [
//     { id: 1, text: "Item 1" },
//     { id: 2, text: "Item 2" },
//     { id: 3, text: "Item 3" }
//   ];
//   return (
//     <div>
//     <ul>
//     {items.map(item => (
//       <li key={item.id}>{item.text}</li>
     
//     ))}
//   </ul>
//   </div>
// )}

// export default App

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import LearnState from './state and effects/LearnState'

const App = () => {
  return (
    <div>
    <LearnState/>
 
   

    </div>
  )
}

export default App