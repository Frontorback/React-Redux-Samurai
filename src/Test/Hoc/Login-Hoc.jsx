import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

const mapDispathAuth = (state) =>{
    return {
        isAuth:state.auth.isAuth
    }
}

export const withAuthComponent = (Component) =>{
    class isAuthLoginHoc extends React.Component {
        render() {
            if(!this.props.isAuth){ return <Redirect to='/login'/>}
            return <Component {...this.props}/>
        }
    }
    let AuthConnect = connect(mapDispathAuth)(isAuthLoginHoc)
    return AuthConnect;
}

