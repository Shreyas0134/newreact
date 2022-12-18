const DynamicChange = (props) => {
    console.log(props.abc);

    return (
        <div>


            <h1>=================================DynamicChange==========================</h1>
            {props.abc ?
                <div>
                    <h1>First image</h1>
                    <img src={require('../image/new.jpg')} style={{ height: "10rem", width: "10rem" }} />
                </div>
                :
                <div>
                    <h1>second image</h1>
                    <img src={require('../image/react.png')} style={{ height: "10rem", width: "10rem" }} />
                </div>


            }
        </div>




    );

}
export default DynamicChange;