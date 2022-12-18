function Seven() {
    const ek = () => {
        var n = parseInt(document.getElementById('tt').value);
        if (n % 2 == 0) {
            alert('Number is Even');
        }
        else {
            alert('Number is Odd');
        }
    }
    function don() {
        var j = parseInt(document.getElementById('tt').value);

        if (j >= 18) {
            alert('You are eligible for voting');
        }
        else {
            alert('You are not eligible for voting');
        }

    }
    return (
        <div className='p'>
            <h1>If else</h1>
            <input className='t1' type='text' id='tt' placeholder='enter number' /><br></br>
            <button className='btn1' onClick={ek}>Check Even Odd</button><br></br>
            <button className='btn2' onClick={don}>Check age </button><br></br>
        </div>

    );
}
export default Seven;