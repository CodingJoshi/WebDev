import React, { PureComponent } from 'react'
import Person from './Person/Person'
class Persons extends PureComponent {
    // static getDerivedStateFromProps(props,state){
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    // shouldComponentUpdate(nextProps,nextState){
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     if(
    //         this.props.persons!==nextProps.persons||
    //         this.props.clicked!==nextProps.clicked||
    //         this.props.changed!==nextProps.changed
    //       ){
    //         return true;
    //     }
    //     else return false;
    //     // return true;
    // }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {msg:'Snapshot!!'};
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    render(){
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((per,idx)=>{
            return <Person
                    name={per.name}
                    age={per.age}
                    Add={per.Add}
                    inputChange={(event)=>this.props.change(per.id,event)}
                    Delete={(event)=>this.props.delete(per.id,event)}
                    key={per.id}
                    />
        })
    }
}
export default Persons;