import React, { useState, useEffect } from 'react';

function HookCounterOne(props) {
    const [count , setCount] = useState (0)
    const [name , setName] = useState('')
    useEffect(() => {
        console.log('useEffect - updating document title')
        document.title = `You clicked ${count} times`

    }, [count])
    return (
        <div>
            <input type = "text" value={name} onChange={e=> setName(e.target.value)} />
            <button onClick = { () => setCount(count +1)}> Count {count} button</button>
        </div>
    );
}

export default HookCounterOne;