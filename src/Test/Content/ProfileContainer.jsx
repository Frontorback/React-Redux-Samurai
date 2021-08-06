// import React from 'react';
import { connect } from 'react-redux';
import { addNewPost, updateNewPost, addProfilePhoto, ProfilePhotoThunk} from '../Redux/ProfileReducer';
import Profile from './Profile';
import React from 'react';
// import * as axios from 'axios'
import { withRouter } from 'react-router-dom';
import { withAuthComponent } from '../Hoc/Login-Hoc';
import { compose } from 'redux';
// import { getAxiosProfilePhoto } from '../Axios/Axios-API';



class SendProfilePhoto extends React.Component {
    componentDidMount() {
        
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2;
        }
        this.props.ProfilePhotoThunk(userId)
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        // getAxiosProfilePhoto(userId)
        // .then(response =>{
        //     this.props.addProfilePhoto(response.data);
        // });
    }

    render() {
        // if(!this.props.isAuth){ return <Redirect to='/login'/>}
        return <Profile {...this.props} />
    }
}



let mapProfileProps = (state) =>{
    return {
        state: state.ProfilePage,
        ProfileInformation: state.ProfilePage.ProfilePhoto,
        
    }
}
// let HocContainer = withAuthComponent(SendProfilePhoto)
// let WithUrlContainer = withRouter(HocContainer);

export default compose(connect(mapProfileProps, {addNewPost, updateNewPost, addProfilePhoto, ProfilePhotoThunk}),
    withRouter, 
    withAuthComponent)(SendProfilePhoto)
// connect(mapProfileProps, {addNewPost, updateNewPost, addProfilePhoto, ProfilePhotoThunk})(WithUrlContainer)
