import React from 'react'
import Person from './Person/Person'
const Persons=(props)=> {
    console.log('[Persons.js] rendering...');
    return props.persons.map((per,idx)=>{
        return <Person
                name={per.name}
                age={per.age}
                Add={per.Add}
                inputChange={(event)=>props.change(per.id,event)}
                Delete={(event)=>props.delete(per.id,event)}
                key={per.id}
                />
    })
}

export default Persons;