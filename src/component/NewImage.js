import React from "react";

const NewImage = () => {
    return (
        <div>
            <h1>New Image File</h1>
            <img src={require('../image/download.png')} />
        </div>
    );
}
export default NewImage;