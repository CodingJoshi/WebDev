import classes from './Cockpit.module.css';
import React, {useEffect} from 'react' 
const Cockpit=(props)=>{
    useEffect(()=>{
        console.log('[Cockpit.js] useEffect');
        //HTtp request ....
        //things which we want to do only at first time rendering
        const timer=setTimeout(() => {
            alert('Saved data to cloud');
        }, 1000);
        return ()=>{
            clearTimeout(timer);
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
    },[]); 

    useEffect(()=>{
        console.log('[Cockpit.js] 2nd useEffect');
        return()=>{
            console.log('[Cockpit.js] cleanup work is 2nd useEffect');
        }
    });

    const assignClass=[];
    if(props.personLength<=2)assignClass.push(classes.red);
    if(props.personLength<=1)assignClass.push(classes.bold);

    const btnClass=[classes.toggleButton];
    if(props.ShowPersons){
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
export default React.memo(Cockpit);