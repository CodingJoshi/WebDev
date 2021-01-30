import React from 'react';
const Person=(props)=>{
    const style={
        backgroundColor: 'red',
        border: '2px solid blue',
        borderRadius: '20%',
        padding:'10px',
        color: 'white',
        outline:'none',
    }
    return(
        <div>
            <button onClick={props.click} style={style}>Delete</button>
            <h3>Name: {props.name} </h3>
            <h4>Age: {props.age}</h4>
            <p>lorem epsum</p>
        </div>
    )
};
export default Person;