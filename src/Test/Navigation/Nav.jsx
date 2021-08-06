import React from 'react';
import { NavLink } from 'react-router-dom';
const Nav = (props) =>{
    let dial = "/" + props.message;
    return (
        <div className="navigation">
        <NavLink to={dial} activeClassName="active">
            { props.message }
            </NavLink>
            </div>
    )
}
export default Nav