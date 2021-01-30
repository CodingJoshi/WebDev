import React from 'react';
const userInput=(props)=>{
    return(
        <input type="text" placeholder="User Input" value={props.currentName} onChange={props.eventHandler}></input>
    )
};
export default userInput;