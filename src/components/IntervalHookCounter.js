import React, { useEffect, useState } from 'react';

function IntervalHookCounter(props) {
    const [c, setC] = useState(0);

    const tick = () =>{
        setC(c + 1)
    }
    function doSomeThing(){
        console.log('test')
    }
    useEffect(() => {
        doSomeThing()
        const interval = setInterval (tick, 1000)
        return() => {
            clearInterval(interval)
        }
    } , [c])
    return (
        <div>
            {c}
        </div>
    );
}

export default IntervalHookCounter;