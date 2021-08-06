import React from 'react';
import { connect } from "react-redux"
import Users from "./Users"
import {followFnc, unfollowFnc, setUsers, SetTotalCount, setUsersCurrentPage, setUsersLoaded, DisableFollowingBtn, UnFollowThunk, FollowThunk, setUsersThunk, pageChangedThunk} from "../Redux/UserReducer "
// import * as axios from "axios";
import loading from '../imggg/loading.gif'
import { withAuthComponent } from '../Hoc/Login-Hoc';
import { compose } from 'redux';
// import { getAxiosUsers } from '../Axios/Axios-API';



class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setUsersThunk(this.props.UsersCurrentPage, this.props.UsersCount);
        // this.props.setUsersLoaded(true);
        // // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.UsersCurrentPage}&count=${this.props.UsersCount}`, {withCredentials:true})
        // getAxiosUsers(this.props.UsersCurrentPage, this.props.UsersCount).then(data =>{
        //     this.props.setUsersLoaded(false);
        //     this.props.setUsers(data.items);
        //     this.props.SetTotalCount(data.totalCount);
            
        // });
    }
    
    onPageChanged = (pageNumber) =>{
        this.props.pageChangedThunk(pageNumber, this.props.UsersCount);
        // this.props.setUsersCurrentPage(pageNumber);
        // this.props.setUsersLoaded(true);
        // // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.UsersCount}` , {withCredentials:true})
        // getAxiosUsers(pageNumber, this.props.UsersCount).then(data =>{
        //     this.props.setUsersLoaded(false);
        //     this.props.setUsers(data.items);
            
        // });
    }

    render() {
        
        return <>
        {this.props.isLoaded ? <img src={loading} alt=": null"/> : null}
        
        <Users 
            UsersAllPages={this.props.UsersAllPages}
            UsersCount={this.props.UsersCount}
            UsersCurrentPage={this.props.UsersCurrentPage}
            onPageChanged={this.onPageChanged}
            UsersPage={this.props.UsersPage}
            // unfollowFnc={this.props.unfollowFnc}
            // followFnc={this.props.followFnc}
            isLoaded={this.props.isLoaded}
            isFollowing={this.props.isFollowing}
            // DisableFollowingBtn={this.props.DisableFollowingBtn}
            UnFollowThunk={this.props.UnFollowThunk}
            FollowThunk={this.props.FollowThunk}
                />
                </>
    }
}


let mapUserState =(state) =>{
    return{
        UsersPage: state.UsersPage.AddPostMessages,
        UsersCurrentPage: state.UsersPage.CurrentPage,
        UsersCount: state.UsersPage.UsersCount,
        UsersAllPages: state.UsersPage.UsersAllPages,
        isLoaded: state.UsersPage.isLoaded,
        isFollowing: state.UsersPage.isFollowing
    }
}

// let mapDispatchUsers = (dispatch) =>{
    
//     return {
//         followFnc: (userID) =>{
//             dispatch(UsersFollowAC(userID))  
//         },
//         unfollowFnc: (userID) =>{
//             dispatch(UsersUnfollowAC(userID))
//         },
//         setUsers:(user) =>{
//             dispatch(SetUsers(user))
//         },
//         SetTotalCount:(count) =>{
//             dispatch(totalCountSend(count))
//         },
//         setUsersCurrentPage:(num) =>{
//             dispatch(CurrentPageAC(num))
//         },
//         setUsersLoaded:(bull) =>{
//             dispatch(PageLoadedAC(bull))
//         }
// }
// }




// const UsersConatiner = withAuthComponent((UsersContainer))
//  UsersConatiner;
 export default compose(withAuthComponent, 
    connect(mapUserState,{  followFnc,unfollowFnc, setUsers, SetTotalCount, setUsersCurrentPage, setUsersLoaded,
     DisableFollowingBtn, UnFollowThunk, FollowThunk, setUsersThunk, pageChangedThunk

}
))(UsersContainer)