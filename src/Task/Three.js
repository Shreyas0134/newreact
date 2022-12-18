import './style.css';


function Three() {
    const one = () => {
        alert('This is a Addition Function');
        var a, b, c;
        a = parseInt(document.getElementById('one').value);
        b = parseInt(document.getElementById('two').value);
        c = a + b;
        alert(c);


    }
    const two = () => {
        alert('This is a Substraction Function');
        var a, b, c;
        a = parseInt(document.getElementById('one').value);
        b = parseInt(document.getElementById('two').value);
        c = a - b;
        alert(c);

    }
    const three = () => {
        alert('This is a Multiplication Function');
        var a, b, c;
        a = parseInt(document.getElementById('one').value);
        b = parseInt(document.getElementById('two').value);
        c = a * b;
        alert(c);

    }
    function four() {
        alert('This is a Division Function');
        var a, b, c;
        a = parseInt(document.getElementById('one').value);
        b = parseInt(document.getElementById('two').value);
        c = a / b;
        alert(c);

    }
    function five() {
        alert("This is Fifth Function");
    }

    return (

        <div className='container'>
            <h1>Calling by using normal function--</h1>
            <input className='t1' type='text' id='one' placeholder='enter 1st number' /><br></br>
            <input className='t2' type='text' id='two' placeholder='enter 2nd number' /><br></br>
            <button className="btn1" onClick={one}>Add</button><br></br>
            <button className='btn2' onClick={two}>Substract</button>
            <button className='btn3' onClick={three}>Multiplication</button>
            <button className='btn4' onClick={four}>Division</button>
            <button className='btn5' onClick={five}>Ohhh</button><br></br>

        </div>

    );
}

export default Three;