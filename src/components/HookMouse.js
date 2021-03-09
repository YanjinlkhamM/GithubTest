import React, { useState, useEffect } from 'react';

function HookMouse(props) {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const logMousePosition = e =>{
        console.log('mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect (() => {
        console.log('useEffect called ');
        window.addEventListener('mousemove' , logMousePosition)
        return() => {
            console.log('component unmounting code ')
            window.removeEventListener('mousemove' , logMousePosition)
        }
    },[])
    return (
        <div>
            Hooks x = {x} <br/>
            Hooks y = {y} 
        </div>
    );
}

export default HookMouse;