import React from "react";
import image from '../image/react.png';
import '../App.css';
const NewImport = () => {
    return (
        <div>
       <h1>import and export</h1>
       <img src={image} />
        </div>
    );
}
    



     const Aaa=()=>
    {
        return(
            <div>
                <h1>hello</h1>
              <img src={image} />
            </div>
        );
    }

     const Bbb=()=>
{
        return(
            <div>
                <h1>hello</h1>
                <img src={require('../image/new.jpg')} height='1000vh' width='1000vw' />
            </div>
        );
    }



    export {NewImport,Aaa,Bbb};


 

