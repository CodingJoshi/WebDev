import React,{Component} from 'react';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit'
import classes from './App.module.css';

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

  DeletePerson=(idx,event)=>{
    let newPersons=[...this.state.persons];
    // console.log(String(event.target));
    if(String(event.target)==='[object HTMLInputElement]'){
      // console.log('this is input');
    }
    else{
      for(let i=0;i<newPersons.length;i++){
        if(idx===newPersons[i].id){
          newPersons.splice(i,1);
        }
      }
    }
    this.setState({
      persons:newPersons
    })
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
      PersonsCard=<Persons
        persons={this.state.persons}
        change={this.nameChangeHandler}
        delete={this.DeletePerson}
      />
      
    }
   
    return (
      <div className={classes.App}>
        <Cockpit
          persons={this.state.persons}
          ShowPersons={this.state.ShowPersons}
          click={this.ToggleHandler}
        />
        <div className={classes.personContainer}>
          {PersonsCard}
        </div>
      </div>
    );
  }
}

export default App;
