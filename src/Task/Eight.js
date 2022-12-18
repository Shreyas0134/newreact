function Eight() {
    const funn = () => {
        var i, n, f1 = 0, f2 = 1, f3;
        n = parseFloat(document.getElementById('qwe').value);
        if (n <= 0) {
            alert("invalid no");
        }
        else if (n == 1) {
            alert("" + f1);
        }
        else {
            alert(f1 + " " + f2);
            for (i = 3; i <= n; i++) {
                f3 = f1 + f2;
                alert(" " + f3);
                f1 = f2;
                f2 = f3;
            }
        }
    }
    function dusra() {

        var a = parseInt(document.getElementById('qwe').value);
        if (a >= 90) {  
            alert('A+');
        }
        else if (a >= 80) {
            alert('A');
        }
        else if (a >= 70) {
            alert('B+');
        }
        else if (a >= 60) {
            alert('B');
        }
        else if (a >= 50) {
            alert('C+');
        }
        else if (a >= 40) {
            alert('C');
        }

        else {
            alert('Hat tu fail ahes ');
        }
    }
    return (
        <div className="uu">
            <h1>If Else Ladder</h1>
            <input className='t1' type='text' id='qwe' placeholder='enter number' /><br></br>
            <button className='btn1' onClick={funn}>fibonacci series</button><br></br>
            <button className='btn2' onClick={dusra}>Grade</button><br></br>


        </div>

    );
}
export default Eight;