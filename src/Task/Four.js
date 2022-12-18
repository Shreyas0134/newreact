function four() {


    return (
        <div className='right'>
            <h1>Calling by using Anonymous function--</h1>
            <input className='t1' type='text' id='o' placeholder='enter 1st number' /><br></br>
            <input className='t2' type='text' id='t' placeholder='enter 2nd number' /><br></br>

            <button className="btn1" onClick={() => {
                alert('Its first Anonymous function');
                var a, area;
                a = parseInt(document.getElementById('o').value);
                area = 3.14 * a * a;
                alert(area);


            }}>Area</button><br></br>

            <button className='btn2' onClick={() => {
                alert('Its second Anonymous function');
                var e, g, a;
                e = parseInt(document.getElementById('o').value);
                g = parseInt(document.getElementById('t').value);
                a = 0.5 * e * g;
                alert(a);


            }}>Triangle</button>

            <button className='btn3' onClick={() => {
                alert('Its third Anonymous function')
                var a, b, ke;
                a = parseInt(document.getElementById('o').value);
                b = parseInt(document.getElementById('t').value);
                ke = 0.5 * a * b * b;
                alert(ke);
            }}>Kinetic Energy</button>
            <button className='btn4' onClick={() => { alert('Its forth Anonymous Function') }}>Division</button>
            <button className='btn5' onClick={() => { alert('Its fifth Anonymous Function') }}>Ohhh</button>

        </div>

    );
}
export default four;