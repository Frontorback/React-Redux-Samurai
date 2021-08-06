// import React from 'react';
import { pushDialogsPostCreator, updateDialogsPostCreator } from '../Redux/DialogsReducer';
import './Dialogs.css'
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthComponent } from '../Hoc/Login-Hoc';
import { compose } from 'redux';



// const DialogsContainer = (props) =>{

//     let updateTxt = (message) =>{
     
//         props.dispatch(updateDialogsPostCreator(message));
//     }
//     let justSendTxt = () =>{
//         props.dispatch(pushDialogsPostCreator())
//     }



//     return (<Dialogs  updateTxt={updateTxt} justSendTxt={justSendTxt} DialogsPage={props.state.DialogsPage} />
   
//     )
// }
let MapDialogsProps = (state) =>{
    return{
        DialogsPage: state.DialogsPage,
    
    }
}

let MapDialogsDispatch = (dispatch) =>{
    return{
        updateTxt: (message) =>{
     
            dispatch(updateDialogsPostCreator(message));
        },
        justSendTxt: () =>{
            dispatch(pushDialogsPostCreator())
        }
    }
}
// let HocDialogs = withAuthComponent(Dialogs);
// const DialogsContainer = connect(MapDialogsProps, MapDialogsDispatch)(HocDialogs)
export default compose(connect(MapDialogsProps, MapDialogsDispatch),
withAuthComponent)(Dialogs)
//  DialogsContainer 
