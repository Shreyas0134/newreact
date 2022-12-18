import React from "react";

const ObjData = (props) => {
    return(
      <div>
     <h1> {props.obj.one}</h1>
        <h1>{props.obj.two}</h1>
        <h1>{props.obj.three}</h1>
      </div>
    );

}
export default ObjData;