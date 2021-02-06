import React from 'react'
import Aux from '../../hoc(higherOrderComp.)/AuxComp';
import classes from './Layout.module.css';
const layout=(props)=>{
    return <Aux>
        <div>Toolbar,sidebar,Backdrop</div>
        <main className={classes.content}>
            {props.children}
        </main>
    </Aux>
}
export default layout;