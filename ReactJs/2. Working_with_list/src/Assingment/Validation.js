import React from 'react'
function App(props){
    let ValidationMsg='Short Enough';
    if(props.len>10){
        ValidationMsg='Long Enough';
    }
    return(
       <div>
           <p>{ValidationMsg}</p>
       </div>
    ) 
}
export default App;
