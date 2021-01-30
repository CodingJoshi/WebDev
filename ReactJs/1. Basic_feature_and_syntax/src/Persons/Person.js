import React from 'react';

const  Person= (props) =>{
    console.log(props);
    return(
        <div className ="person">
            <button onClick={props.Switch}>Switch</button>
            <h2>{props.name}</h2>
            <div>
                Profession: {props.Prof}
            </div>
            <p>I'm a Person</p>
        </div>
    )
};

export default Person;