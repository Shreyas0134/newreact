const CheckData = (props) => {
    console.log('check value ====>', props.check);
    console.log('str value ====>', props.str);
    console.log('num value ====>', props.num);
    console.log('obj value ====>', props.obj);
    console.log('arr value ====>', props.arr[0]);
    console.log('arr value ====>', props.arr[1]);
    console.log('arr value ====>', props.arr[2]);
    console.log('arr value ====>', props.arr[3]);
    console.log('arr value ====>', props.arr[4]);




    return (
        <div>
            <h1>=================================CheckData================================</h1>
            <p>{props.check}</p>
            <p>{props.str}</p>
            <p>{props.num}</p>
            <h4>{props.obj.aa}</h4>
            <h4>{props.obj.bb}</h4>
            <h4>{props.obj.cc}</h4>
            <h4>{props.obj.dd}</h4>
            <h4>{props.obj.ee}</h4>
            <h2>{props.arr[0]}</h2>
            <h2>{props.arr[1]}</h2>
            <h2>{props.arr[2]}</h2>
            <h2>{props.arr[3]}</h2>
            <h2>{props.arr[4]}</h2>


        </div>
    );

}
export default CheckData;