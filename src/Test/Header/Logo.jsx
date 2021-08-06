import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = (props) =>{
    // debugger;
    return (
<div className='logo'>
    <div>Logo</div>
    <img src="https://media-exp3.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0/1519855918965?e=2159024400&v=beta&t=CrP5Le1mWICRcaxIGNBuajHcHGFPuyNA5C8DI339lSk" alt='ss'></img>

        <div className="login">
            {props.isAuth ? props.login: <NavLink to="/login">login</NavLink>}
        
            </div>

    
    </div>
    )
}
export default Logo