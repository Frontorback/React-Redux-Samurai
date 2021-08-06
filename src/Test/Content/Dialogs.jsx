import React from 'react';
import { NavLink } from 'react-router-dom';

import './Dialogs.css'



const Names = (props) =>{
    let path = "/Dialogs/" + props.id
    return(
        <div className="name">
            <NavLink to={path} >{props.name}</NavLink>
            </div>
    )
}
const Messegs = (props) =>{
    return(
        <div className="name-message" >{props.name}</div>
    )}

const Dialogs = (props) =>{

    let CreateRef = React.createRef();

    let updateTextArea = (e) =>{
        
        // let currentMes = e.target.value
        let currentMes = CreateRef.current.value;
        props.updateTxt(currentMes);
        // props.dispatch(updateDialogsPostCreator(currentMes));
    }
    let sendText = () =>{
        props.justSendTxt();
        // props.dispatch(pushDialogsPostCreator())
    }

    let NameOfDialogs = props.DialogsPage.NameOf.map(s => <Names name={s.name}  id= {s.id}/>)
    let MessageOfDialogs  = props.DialogsPage.MessageOf.map(m => <Messegs name={m.name}  id= {m.id}/>)
    
    return (
        <div className="Dialogs">
            <div className="Names">
            { NameOfDialogs }
                              
            </div>
            <div className="Mess">
            {MessageOfDialogs}
               
            </div>
            <div>
                <div><textarea onChange={updateTextArea} placeholder="write..." ref={CreateRef} value={props.DialogsPage.CurrentText}></textarea></div>
                <div><button onClick={sendText}>click</button></div>
            </div>
        </div>
    )
}
export default Dialogs