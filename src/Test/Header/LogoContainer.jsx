
import { connect } from 'react-redux';
import React from 'react';
import Logo from './Logo';
// import * as axios from 'axios'
import { DataInformation, LoginThunk } from '../Redux/Auth-user';
// import { getAxiosLogin } from '../Axios/Axios-API';



class AuthProfileInLogo extends React.Component {
    componentDidMount() {
        this.props.LoginThunk();
        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
        // getAxiosLogin.me()
        // .then(response =>{
        //     if(response.data.resultCode === 0){
        //         let {id, login, email} = response.data.data;
        //             this.props.DataInformation(id, login, email);
        //     }
        //     // debugger;
            
        // });
    }

    render() {
        return <Logo {...this.props} />
    }
}


const mapDispatchIsAuth = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapDispatchIsAuth, {DataInformation, LoginThunk})(AuthProfileInLogo)
