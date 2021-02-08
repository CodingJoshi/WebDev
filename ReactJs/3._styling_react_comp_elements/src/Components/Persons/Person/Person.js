import React,{Component} from 'react'
import classes from './Person.module.css'
import Aux from '../../../hoc/Auxillary'
import withClass from '../../../hoc/withClass';
class Person extends Component{
    render(){
        console.log('[Person.js] rendering...')
        return (
            <Aux>
                <p>I am <i><b className="red">{this.props.name}</b></i></p>
                <p><b>Age: </b>{this.props.age}</p>
                <p><b>Address: <br/> </b>{this.props.Add}</p>
                <input onChange={this.props.inputChange} value={this.props.name}></input>
            </Aux> 
        )
    }
}
export default withClass(Person,classes.Person);

// React.Fragment is inbuilt Aux works same as Aux works