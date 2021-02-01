import React from 'react'
import classes from './Person.module.css'

function Person(props){
    console.log('[Person.js] rendering...')
    return (
        <div className={classes.Person} onClick={props.Delete}>
             <p>I am <i><b className="red">{props.name}</b></i></p>
            <p><b>Age: </b>{props.age}</p>
            <p><b>Address: <br/> </b>{props.Add}</p>
            <input onChange={props.inputChange}></input>
        </div>
    )
}
export default Person;