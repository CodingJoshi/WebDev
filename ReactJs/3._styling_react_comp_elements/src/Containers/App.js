import React,{Component} from 'react';
import Person from '../components/Persons/Person/Person';
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

    const assignClass=[];
    if(this.state.persons.length<=2)assignClass.push(classes.red);
    if(this.state.persons.length<=1)assignClass.push(classes.bold);
    
    const TogglebtnClass=[classes.toggleButton];
    let PersonsCard=null;
    if(this.state.ShowPersons){
      PersonsCard=this.state.persons.map((per,idx)=>{
        return <Person
        name={per.name}
        age={per.age}
        Add={per.Add}
        inputChange={(event)=>this.nameChangeHandler(per.id,event)}
        Delete={(event)=>this.DeletePerson(per.id,event)}
        key={per.id}
        />
      });
      TogglebtnClass.push(classes.Red);
    }

    return (
      <div className={classes.App}>
        <h1 >Person Toggler</h1>
        <p className={assignClass.join(' ')}>Toggle the person with Toggle button</p>
        <button className={TogglebtnClass.join(' ')} alt={this.state.ShowPersons}onClick={this.ToggleHandler}>Toggle</button>
        <div className={classes.personContainer}>
          {PersonsCard}
        </div>
      </div>
    );
  }
}

export default App;
