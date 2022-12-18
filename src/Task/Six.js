function Six() {
    const f = () => {

        var num = parseInt(document.getElementById("num").value);
        var fact = 1;
        for (var i = 1; i <= num; i++) {
            fact = fact * i;
        }
        console.log('factorial of a number is==>', fact);



    }
    function two() {

        var num = parseInt(document.getElementById("num").value);
        var i;
        for (i = 1; i <= 10; i++) {
            console.log(num, 'x', i, '=', num * i);
        }

    }


    return (
        <div className='l'>
            <h1>For loop</h1>
            <input className='t1' type='text' id='num' placeholder='enter 1st number' /><br></br>
            <button className="btn1" onClick={f}>Factorial</button><br></br>
            <button className="btn2" onClick={two}>Table</button><br></br>

        </div>

    );
}
export default Six;