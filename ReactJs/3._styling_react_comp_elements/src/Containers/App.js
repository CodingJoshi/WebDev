import React,{Component} from 'react';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit'
import classes from './App.module.css';
import withClass from '../hoc/withClass';
import Aux from  '../hoc/Auxillary'
class App extends Component{
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }
  state={
    persons:[
      {id:'1',name:"Saurabh",age:20,Add:'Gali no 14 vijay Park,Maujpur Delhi-110053'},
      {id:'2',name:"Pankaj",age:18,Add:'Gali no 14 vijay Park,Maujpur Delhi-110053'},
      {id:'3',name:"Jai Shree Ram",age:'Unborn',Add:'Inside You'},
    ],
    ShowPersons:false,
    ShowCockpit:true,
  }

  static getDerivedStateFromProps(props,state){
    console.log('[App.js] getDerivedStateFromProps',props);
    return state;
  }

  componentDidMount(){
    console.log('[App.js] ComponentDidMount')
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
    console.log('[App.js] render');

    let PersonsCard=null;
    if(this.state.ShowPersons){
      PersonsCard=<Persons
        persons={this.state.persons}
        change={this.nameChangeHandler}
        delete={this.DeletePerson}
      />
      
    }
   
    return (
      <Aux>
        <button onClick={()=>{
          this.setState({
            ShowCockpit:false,
          })
        }}>Remove Cockpit</button>
        {
        this.state.ShowCockpit ? <Cockpit
          title={this.props.AppTitle}
          personLength={this.state.persons}
          ShowPersons={this.state.ShowPersons}
          click={this.ToggleHandler}
        />: null }
        <div className={classes.personContainer}>
          {PersonsCard}
        </div>
      </Aux>
    );
  }
}

export default withClass(App,classes.App);
