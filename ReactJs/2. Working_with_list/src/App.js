import React,{Component} from 'react';
import './App.css';
import Assingment from './Assingment/Validation.js'
import Char from './Assingment/Char.js'
class App extends Component{
  state={
    Text:'Text',
  }
  ChangeListner=(event)=>{
    // console.log(event.target.value.length);
    this.setState({
      Text: event.target.value 
    })
  }
  DeleteChar=(ch)=>{
    let text=this.state.Text.replace(ch,'');
    this.setState({
      Text: text
    })
  }
  render(){
    const strArray=this.state.Text.split('').map((curr,idx)=>{
      return <Char char={curr} key={idx} Delete={()=>this.DeleteChar(curr)} />;
    });

    let style={
      display: "inline",
    }
    
    return(
      <div className="App">
        <div className="InputField">
          <textarea onChange={this.ChangeListner} value={this.state.Text}></textarea>
          <h3>Length:{this.state.Text.length}</h3>
          <h4 style={style}>Your Input: </h4>
          <p style={style}>{this.state.Text}</p>
          <Assingment len={this.state.Text.length}/>
          {strArray}
        </div>
      </div>
    )
  }
}
export default App;