import React from 'react';
// import Logo from './Header/Logo'
import AuthProfileInLogo from './Header/LogoContainer'


import Nav from './Navigation/Nav'
import { Route } from 'react-router-dom';
import ProfileContainer from './Content/ProfileContainer';
import DialogsContainer from './Content/DialogsContainer';
import UsersConatiner from './Content/UsersContainer';
import Login from './Header/login'


const Hello = () =>{
    
    return (
        
        <div className='block'>
            <AuthProfileInLogo />
    <div className='nav'>
            <Nav  message="Profile" />
            <Nav  message="Dialogs" />
            <Nav message="test3" />
            <Nav message="Users" />
    
    </div>
    
    <div className='content'>
        
        <Route path="/Profile/:userId?" render={ () => <ProfileContainer 
        // store={props.store}
        // state={props.state}
        // dispatch={props.dispatch}
         />}/>
        <Route path="/Dialogs" render={ () => <DialogsContainer 
        //  state={props.state}  dispatch={props.dispatch}
          />}/>
        <Route path="/Users" render = { () => <UsersConatiner/>} />
        <Route path="/login" render = { () => <Login />} />
    </div>
    </div>
    
    )
 }

 
 export default Hello