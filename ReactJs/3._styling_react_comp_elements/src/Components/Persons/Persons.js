import React,{Components} from 'react'
import Person from './Person/Person'
const Persons=(props)=> (
    props.persons.map((per,idx)=>{
        return <Person
                name={per.name}
                age={per.age}
                Add={per.Add}
                inputChange={(event)=>props.change(per.id,event)}
                Delete={(event)=>props.delete(per.id,event)}
                key={per.id}
                />
    })
)

export default Persons;