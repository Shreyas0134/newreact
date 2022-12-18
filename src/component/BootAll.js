import React from "react";


const BootAll = () => {

    return (
        <div>
            <h1>BootAll</h1>
            <button className='btn btn-outline-danger'> Click Me</button>
            <button className='btn btn-outline-info '>Click here</button>

            <select className="form-select" aria-label="Default select example" style={{width:'50%'}}>
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>

        </div>
    );
}

export default BootAll;