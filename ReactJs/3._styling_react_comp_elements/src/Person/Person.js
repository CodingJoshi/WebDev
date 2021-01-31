import React from 'react'
function Person(props){
    let PersonCard={
        border:'1px solid blue',
        margin:'5px',
        padding: '10px'
    }
    return (
        <div style={PersonCard} onClick={props.Delete}>
            <p>I am <i><b>{props.name}</b></i></p>
            <p><b>Age: </b>{props.age}</p>
            <p><b>Address: <br/> </b>{props.Add}</p>
            <input onChange={props.inputChange}></input>
        </div>
    )
}
export default Person;