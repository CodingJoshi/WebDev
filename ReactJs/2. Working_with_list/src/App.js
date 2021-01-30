import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person.js';


// Output List of Data 
class App extends Component{
  state={
    persons:[
      {id: '1', name:'Saurabh Joshi', age:20},
      {id: '2', name:'Vicky' , age: 12},
      {id: '3', name:'Payal', age: 16},
    ],
    TogglePerson:false
  }
  ToggleHandler=()=>{
    const isShown=this.state.TogglePerson;
    this.setState({
      TogglePerson: !isShown
    })
  };
  DeletePersonHandler=(index,event)=>{
    // console.log('Person Deleted');
    // console.log(index);
    /*
    const persons=this.state.persons;
    persons.splice(index,1);
    this.setState({
      persons:persons
    })
    */
    // above method is not a good practice
    
    // good practice is to make a new copy of array first 
    // const Persons=this.state.persons.slice();
    const Persons=[...this.state.persons];
    Persons.splice(index,1);
    this.setState({
      persons:Persons
    })

  };
  render(){
    const style={
      backgroundColor: 'black',
      border: '2px solid blue',
      borderRadius: '20%',
      padding:'10px',
      color: 'white',
      outline:'none',
    }
    let person=null;
    if(this.state.TogglePerson){
      person=(
       <div className="Persons">
          {
            this.state.persons.map((person,index)=>{
              return <Person 
              name={person.name} 
              age={person.age} 
              click={()=>this.DeletePersonHandler(index)} 
              key={person.id}
              />
            })
         }
       </div>
      );
    }
    return (
      <div className="App">
        <h1>Persons</h1>
        <button onClick={this.ToggleHandler} style={style}>Toggle Persons</button>
        {person}
      </div>
    );
  }
}
export default App;