import React from 'react'
import styled from 'styled-components'

const PersonDiv =styled.div`
        border: 1px solid blue;
        margin: 5px;
        padding: 10px;
        @media (min-width:740px) {
            width: 200px
        }
    `;

function Person(props){
    return (
        <PersonDiv onClick={props.Delete}>
             <p>I am <i><b className="red">{props.name}</b></i></p>
            <p><b>Age: </b>{props.age}</p>
            <p><b>Address: <br/> </b>{props.Add}</p>
            <input onChange={props.inputChange}></input>
        </PersonDiv>
    )
}
export default Person;