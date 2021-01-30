import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person.js';


// Output List of Data 
class App extends Component{
  state={
    persons:[
      {name:'Saurabh Joshi', age:20},
      {name:'Vicky' , age: 12},
      {name:'Payal', age: 16},
    ],
    TogglePerson:false
  }
  ToggleHandler=()=>{
    const isShown=this.state.TogglePerson;
    this.setState({
      TogglePerson: !isShown
    })
  }
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
            this.state.persons.map(person=>{
              return <Person name={person.name} age={person.age} click={DeletePersons} />
            })
         }
       </div>
        // <div className="Persons">
        //   <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        //   <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        //   <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        // </div>
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
// Method-2 Conditional 
/*
class App extends Component{
  state={
    person:[
      {name:'Saurabh Joshi', age:20},
      {name:'Vicky' , age: 12},
      {name:'Payal', age: 16},
    ],
    TogglePerson:false
  }
  ToggleHandler=()=>{
    const isShown=this.state.TogglePerson;
    this.setState({
      TogglePerson: !isShown
    })
  }
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
          <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
          <Person name={this.state.person[1].name} age={this.state.person[1].age}/>
          <Person name={this.state.person[2].name} age={this.state.person[2].age}/>
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
*/
// Method-1 conditional
/*
class App extends Component{
  state={
    TogglePerson:false
  }
  ToggleHandler=()=>{
    const isShown=this.state.TogglePerson;
    this.setState({
      TogglePerson: !isShown
    })
  }
  render(){
    const style={
      backgroundColor: 'black',
      border: '2px solid blue',
      borderRadius: '20%',
      padding:'10px',
      color: 'white',
      outline:'none',
    }
    return (
      <div className="App">
        <h1>Persons</h1>
        <button onClick={this.ToggleHandler} style={style}>Toggle Persons</button>
        {
          this.state.TogglePerson ?
            <div className="Persons">
              <Person name="Saurabh" age={20}/>
              <Person name="Vicky" age={12}/>
              <Person name="Payal" age={16}/>
            </div>
          :null
        }
      </div>
    );
  }
}
*/

export default App;
