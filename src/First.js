import './App.css';

function first() {
    const one = () => {
        var newvariable = false;
        console.log('this is a message');
        alert('first function');
        if (newvariable === true) {
            prompt("this ia a ture varibale");
        }

        else if (newvariable === false) {
            alert('this is false varible');
        }

    }
    function second() {
        var newvar='bbb';
        console.log('this is a second message');
        for( var i=0;i<=5;i++)
        {
            console.log('value of i==>',i);
        }
        alert('second function');
        if(newvar === 'a')
        {
            alert('this is a new variable');
        }
        else if (newvar === 'b')
        {
            alert('this is a b variable');
        }
        else
        {
            alert('error');
        }
    }
   

    return (
        <div>
            <button className="one" onClick={one}>Click</button>
            <button className='two' onClick={second}>SUbmit</button>
            <button onClick={() => {
                console.log("this is newsubmit"); one()
            }}
            >newclick</button>
            <button onClick={() => {
                console.log("this is newsubmits"); second()
            }}>newsubmit</button>
           
        </div>
    );
}

export default first;
