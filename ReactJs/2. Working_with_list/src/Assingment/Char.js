import React from 'react';
import '../App.css';
const Char=(props)=>{
    return(
        <div className="charBox" onClick={props.Delete}>
            {props.char}
        </div>
    )
}
export default Char;