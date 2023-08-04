import React, { useState } from 'react';
    
    
const ColorForm = (props) => {
    const [color, setColor] = useState("");

    
    const handleSubmit = (e) => {
        e.preventDefault();

        const newBox={color};
        props.onCreateNewBox(newBox);
    };


    return (
        <form action="">
            <h1>Box Generator</h1>
            <label> Color </label>
            <input type="text" name="color" onChange={(e)=>setColor(e.target.value)} value={color}></input>
            <button onClick={handleSubmit}> Add</button>
        </form>
    );
};
    
export default ColorForm;