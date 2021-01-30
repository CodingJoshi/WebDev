import React,{Component} from 'react'
import UserInput from './Assingment/UserInput.js'
import UserOutput from './Assingment/UserOutput.js'
import './App.css'
class App extends Component{
  state={
    Username: "Saurabh",
  };
  eventHandler=(event)=>{
    this.setState({
      Username:event.target.value,
    })
  }
  render(){
    return(
      <div className="App">
         <UserInput eventHandler={this.eventHandler} currentName={this.state.Username}/>
         {/* <button onClick={()=>this.eventHandler('Sau....')}>Click</button> */}
          <div className="Container">
          <UserOutput userName={this.state.Username}/>
          <UserOutput userName={this.state.Username}/>
          <UserOutput userName={this.state.Username}/>
          <UserOutput userName={this.state.Username}/>
        </div>
      </div>
    )
  }
}
export default App;
/*import React,{Component} from 'react'
import './App.css';
import Person from './Persons/Person';
class App extends Component{
  state={
    Persons:["Saurabh", "Vedant", "Prianka"],
    Prof:["Engineer","IAS","Doctor"],
  }
  SwitchNameHandler=(newName)=>{
    console.log(newName);
    this.setState(
      {
        Persons:["Saurabh Joshi","Vedant", "Prinka"],
      }
    )
  }
  render(){
    return(
      <div>
        <h1>List of Persons</h1>
        <div className="PersonContainer">
          <Person name={this.state.Persons[0]} Prof={this.state.Prof[0]} Switch={()=>this.SwitchNameHandler('Saurabh Joshi')} />
          <Person name={this.state.Persons[1]} Prof={this.state.Prof[1]} />
          <Person name={this.state.Persons[2]} Prof={this.state.Prof[2]} />
        </div>
      </div>
    )
  }
}

export default App;*/