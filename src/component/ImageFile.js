import React from "react";
import image from '../image/download.png'
import newimage from '../image/react.png'

const ImageFile = () => {

    return (
        <div>
            <h1>Image File</h1>
            <img src={image} style={{ height: '5rem', width: '5rem' }} />
            <img src={newimage} style={{ height: '5rem', width: '5rem', float: 'right' }} />
        </div>
    );
}

export default ImageFile;