import classes from './Cockpit.module.css';
import React from 'react' 
const Cockpit=(props)=>{

    const assignClass=[];
    if(props.persons.length<=2)assignClass.push(classes.red);
    if(props.persons.length<=1)assignClass.push(classes.bold);

    const btnClass=[classes.toggleButton];
    if(props .ShowPersons){
        btnClass.push(classes.Red);
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <p className={assignClass.join(' ')}>Toggle the person with Toggle button</p>
            <button className={btnClass.join(' ')}  onClick={props.click}>Toggle</button>
        </div>
    )
}
export default Cockpit;