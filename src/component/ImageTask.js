import React from "react";
import img from '../image/new.jpg';

const ImageTask = () => {
    return (
        <div>
            <img src={img} style={{ height: '15rem', width: '15rem', marginLeft: '40rem',boxShadow:'5px 5px 5px 1px  #cc6600' }} />
            <h3 style={{ paddingLeft: '43rem' }}>Write title here</h3>
            <h4 style={{ paddingLeft: '41rem' }}>You can add description here</h4>
            <button style={{ marginLeft: '44rem' }}>Read More...</button>
        </div>
    );
}
export default ImageTask;