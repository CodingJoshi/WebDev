import './App.css';
import React,{Component} from 'react';
import Person from './Person/Person'
class App extends Component{
  state={
    persons:[
      {id:'1',name:"Saurabh",age:20,Add:'Gali no 14 vijay Park,Maujpur Delhi-110053'},
      {id:'2',name:"Pankaj",age:18,Add:'Gali no 14 vijay Park,Maujpur Delhi-110053'},
      {id:'3',name:"Jai Shree Ram",age:'Unborn',Add:'Inside You'},
    ],
    ShowPersons:false,
  }

  nameChangeHandler=(idx,event)=>{
    // console.log(idx,event.target.value);
    let newPerson=this.state.persons.map((cur,i)=>{
      if(cur.id===idx){
        return {
          id:cur.id,
          name:event.target.value,
          age:cur.age,
          Add:cur.Add,
        }
      }
      return cur;
    })
    // console.log(newPerson,this.state.persons);
    this.setState({
      persons:newPerson
    });
  }

  ToggleHandler=()=>{
    let show=this.state.ShowPersons;
    this.setState({
      ShowPersons:!show
    })
  }

  render(){
    let PersonsCard=null;
    if(this.state.ShowPersons){
      PersonsCard=this.state.persons.map((per,idx)=>{
        return <Person
        name={per.name}
        age={per.age}
        Add={per.Add}
        inputChange={(event)=>this.nameChangeHandler(per.id,event)}
        key={per.id}
        />
      });
    }
    return (
      <div className="App">
        <h1>Person Toggler</h1>
        <button onClick={this.ToggleHandler}>Toggle</button>
        <div className="personContainer">
          {PersonsCard}
        </div>
      </div>
    );
  }
}

export default App;
