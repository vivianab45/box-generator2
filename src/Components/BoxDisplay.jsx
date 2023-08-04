import React from 'react';

    
    
const BoxDisplay = (props) => {
    return (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'wrap'}}> 
        {props.boxList.map((eachBox)=> {
            return(
                <div style= {{background:eachBox.color, height:100, width:100, margin:25, alignItems:'center'}}></div>
            )
        })}
        </div>

    );
};
    
export default BoxDisplay;
