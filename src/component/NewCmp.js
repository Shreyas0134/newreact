import React from "react";


const NewCmp = (props) => {
    return(
        <div>
              <h1>{props.abc}</h1>
            <h1>{props.obj.one}</h1>
            <h1>{props.obj.two}</h1>
            <h1>{props.obj.three}</h1>
            <h1>{props.arr[0]}</h1>
            <h1>{props.arr[1]}</h1>
            <h1>{props.arr[2]}</h1>
            <h1>{props.arr[3]}</h1>
            <h1>{props.arr[4]}</h1>
            <h1>{props.arr[5]}</h1>
            <h1>{props.arr[6]}</h1>
            <h1>{props.arr[7]}</h1>
            <h1>{props.arr[8]}</h1>
            </div>
    );
}
export default NewCmp;
