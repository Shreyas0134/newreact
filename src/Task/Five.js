function Five() {
    const one = () => {
        alert('This is a Addition Function');
        var a, b, c;
        a = parseInt(document.getElementById('a').value);
        b = parseInt(document.getElementById('b').value);
        c = a + b;
        alert(c);


    }
    const two = () => {
        alert('This is a Substraction Function');
        var a, b, c;
        a = parseInt(document.getElementById('a').value);
        b = parseInt(document.getElementById('b').value);
        c = a - b;
        alert(c);

    }
    const three = () => {
        alert('This is a Multiplication Function');
        var a, b, c;
        a = parseInt(document.getElementById('a').value);
        b = parseInt(document.getElementById('b').value);
        c = a * b;
        alert(c);

    }
    function four() {
        alert('This is a Division Function');
        var a, b, c;
        a = parseInt(document.getElementById('a').value);
        b = parseInt(document.getElementById('b').value);
        c = a / b;
        alert(c);

    }
    function five() {
        alert("This is Fifth Function");
    }
    return (


        <div className='center'>
            <h1>Calling by using Function in function--</h1>
            <input className='t1' type='text' id='a' placeholder='enter 1st number' /><br></br>
            <input className='t2' type='text' id='b' placeholder='enter 2nd number' /><br></br>

            <button className="btn1" onClick={() => {
                alert('Its first Function in  function');
                var a, area;
                a = parseInt(document.getElementById('a').value);
                area = 3.14 * a * a;
                alert(area);
                one();


            }}>Area and Addition</button><br></br>

            <button className='btn2' onClick={() => {
                alert('Its second Function in function');
                var e, g, a;
                e = parseInt(document.getElementById('a').value);
                g = parseInt(document.getElementById('b').value);
                a = 0.5 * e * g;
                alert(a);
                two();


            }}>Triangle and Substraction</button>

            <button className='btn3' onClick={() => {
                alert('Its third Function in function')
                var a, b, ke;
                a = parseInt(document.getElementById('a').value);
                b = parseInt(document.getElementById('b').value);
                ke = 0.5 * a * b * b;
                alert(ke);
                three();

            }}>Kinetic Energy and Multiplication</button>
            <button className='btn4' onClick={() => { alert('Its forth Function in Function'); four(); }}>Blank and Division</button>
            <button className='btn5' onClick={() => { alert('Its fifth Function in Function'); five(); }}>Ohhh</button>
        </div>

    );
}

export default Five;