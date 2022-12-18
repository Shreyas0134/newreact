//import { compose } from '@mui/system';

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import BootAll from './component/BootAll.js';
//import FontIcons from './component/FontIcons.js';
//import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import "./App.css";

//import photo from './image/lll.svg';
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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
// //     <div>
// //       <h1>====== App ======</h1>
// //       <button className='btn btn-primary' style={{ margin: '1rem', color: 'black' }}>Click Me</button>
// //       <BootAll />
// //       <FontIcons />

// //     </div>

// const App = () => {
//   var fname, lname, cname, ename, phno;
//   const fn = (event) => {

//     fname = event.target.value;
//     console.log('This is the first name==>', fname);

//   }
//   const ln = (event) => {

//     lname = event.target.value;
//     console.log('This is the last name==>', lname);

//   }
//   const cn = (event) => {

//     cname = event.target.value;
//     console.log('This is the company name==>', cname);

//   }
//   const en = (event) => {

//     ename = event.target.value;
//     console.log('This is the email==>', ename);

//   }
//   const ph = (event) => {

//     phno = event.target.value;
//     console.log('This is Phone number==>', phno);

//   }

//   function validate() {
//     var a = document.getElementById('t1').value;
//     var b = document.getElementById('t2').value;
//     var c = document.getElementById('t3').value;
//     var d = document.getElementById('t4').value;
//     var e = document.getElementById('t5').value;
//     if (a === '' || b === '' || c === '' || d === '' || e === '') {

//       alert('All fields are required');
//     }

//     if (!a.match(/^[A-Za-z]+$/)) {
//       alert("Please enter name");
//     }
//     else
//       if (!b.match(/^[A-Za-z]+$/)) {
//         alert("Please enter last name");
//       }
//       else
//         if (!c.match(/^[A-Za-z]+$/))
//         {
//           alert('please enter company name');
//         }
//         else if (!d.match(/^[A-Za-z0-9]+@[A-Za-z0-9]+.[A-Za-z0-9]+$/)) {

//           alert("please enter valid email");
//         }
//         else if (!e.match(/^[0-9]{10}$/)) {
//           alert("please enter valid phone number");
//         }

//         else {
//           alert('Form submitted successfully');
//         }
//   }

//   return (
//     <center>
//       <div >

//         <p>Registration form</p>

//         <div class="custom-shape-divider-top-1669901121">
//           <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
//             <path
//               d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
//               class="shape-fill"></path>
//           </svg>
//         </div>

//         <img src={photo} className='qq' />

//         {/* <FontAwesomeIcon icon={faFacebook} style={{ height: '10rem', color: 'blue' }} /> */}
//         {/* <h1>Registration  page</h1> */}
//         <form>
//           <div class="row" style={{width:'auto'}}>
//             <div class="col">
//               <lable style={{ float: 'left', margin: '30% 1% 0% 10%' }}>Name :</lable>
//               <input type="text" id='t1' class="form-control" placeholder="First name" onChange={fn} style={{ height: 'auto', width: 'auto', display: 'inline-block', float: 'left', margin: '29% 1% 1% 1%' }} />
//               <input type="text" id='t2' class="form-control" placeholder="Last name" onChange={ln} style={{ height: 'auto', width: 'auto', display: 'inline-block', float: 'left', margin: '29% 1% 1% 1%' }} />
//             </div>
//           </div>
//           <div class="form-group">
//             <label for="inputAddress" style={{ float: 'left', margin: '1% 0% 0% 7%' }}>company :</label>
//             <input type="text" class="form-control" placeholder='Company name' id="t3" onChange={cn} style={{ height: '3rem', width: '29%', display: 'inline-block', float: 'left', margin: '.5% 1% 1% 0.5%' }} /><br></br><br></br><br></br>
//           </div>
//             <div class="form-group">
//               <label for="inputEmail3" style={{float: 'left',margin:'1% 1% 1% 7% ' }}>Email :</label>
//               <input type="email" class="form-control" id="t4" placeholder="Email" onChange={en} style={{ height: '3rem', width: 'auto', display: 'inline-block',float:'left',margin:'0% auto 1% 1.5%' }} />
//             </div><br></br><br></br><br></br>
//             <div>
//               <lable style={{float:'left', margin:'1% 1% 0% 7%'}}>Phone :</lable>
//               <input type="number" id='t5' class="form-control" placeholder="Phone number" required maxLength={10} onChange={ph} style={{ height: '3rem', width: 'auto', display: 'inline-block',float:'left',margin:'0% 0% 0% 1%' }} />
//             </div><br></br><br></br><br></br>

//             <div class="form-row align-items-center">
//               <div class="col-auto my-1" >
//                 <label class="mr-sm-2" for="inlineFormCustomSelect" style={{float:'left' ,margin:'0% 1% 0% 7%'}}>Subject :</label>
//                 <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" style={{ width: 'auto', display: 'inline-block', borderRadius: '.5rem',float:'left',margin:'0% 0% 0% 0.5%'}}>
//                   <option selected>Choose options</option>
//                   <option value="1">One</option>
//                   <option value="2">Two</option>
//                   <option value="3">Three</option>
//                 </select>
//               </div>
//             </div><br></br><br></br>
//             <lable>Are you an existing customer</lable><br></br>
//             <div class="custom-control custom-radio" >
//               <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" />
//               <label class="custom-control-label" for="customRadio1" style={{marginRight:'5%'}}>Yes</label>
//               <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input" />
//               <label class="custom-control-label" for="customRadio2" >no</label>
//             </div><br></br>
//             <div>
//               <button type="button" class="btn btn-primary" onClick={validate}>Send</button>
//             </div>

//         </form>

//       </div>
//     </center>

//   )

// }
// export default App;

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

import React from 'react'
import NewAppChild from "./component/NewAppChild";

const App = () => {
  return (
    <div>
    <h1>App</h1>
    
    <button className="btn btn-primary" >this is parent app</button>
    <NewAppChild/>
    </div>
  )
}

export default App

