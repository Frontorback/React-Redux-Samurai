import { getAxiosFollow, getAxiosUnFollow, getAxiosUsers } from "../Axios/Axios-API"

 let OurState = {
   AddPostMessages:[],
   UsersAllPages: 0,
   UsersCount: 3,
   CurrentPage: 2,
   isLoaded: false,
   isFollowing: []
}

const UserReducer = (state = OurState, action) =>{
    switch(action.type){
       case "USER-FOLLOW": 
         return {
          ...state,
          AddPostMessages: state.AddPostMessages.map(u => {
            if(u.id === action.userID){
              // u.following = true
              return {...u, following: true}
            }
            return u
          })
         }

       
     case "USER-UNFOLLOW":
      return {
        ...state,
        AddPostMessages: state.AddPostMessages.map(u => {
          if(u.id === action.userID){
            return {...u, following: false}
          }
          return u
        })
       }
       case "SET-USERS":
         return{
           ...state,
          AddPostMessages:[...action.users]
          
         }
         case "USERS-TOTAL-COUNT":
           
          return{
            ...state,
            UsersAllPages:action.SetCount
           
          }
          case "CURRENT-PAGE":
          return{
            ...state,
            CurrentPage:action.numberss
           
          }
          case "PAGE-LOADED":
            return{
              ...state,
              isLoaded:action.bull
             
            }
          case "FOLLOWING-PROGRESS":
            return{
              ...state,
              isFollowing: action.value ? [...state.isFollowing , action.userId] : state.isFollowing.filter(id => id !== action.userId)
            }
          
      
     default : return state;
   }
}

export const followFnc = (userID) =>{
  return (
    {type : "USER-FOLLOW",  userID}
  )
}

export const unfollowFnc = (userID) =>{
  return(
    {type: "USER-UNFOLLOW", userID}
  )
}
export const setUsers = (users) =>{
  return(
    {type: "SET-USERS", users:users}
  )
}
export const SetTotalCount = (count) =>{
  return(
    {type: "USERS-TOTAL-COUNT", SetCount:count}
  )
}
export const setUsersCurrentPage = (num) =>{
  return(
    {type: "CURRENT-PAGE", numberss:num}
  )
}
export const setUsersLoaded = (bull) =>{
  return(
    {type:"PAGE-LOADED", bull:bull }
  )
}
export const DisableFollowingBtn = (value, userId) =>{
  return(
    {type:"FOLLOWING-PROGRESS", value, userId}
  )
}
 
export const setUsersThunk = (UsersCurrentPage, UsersCount) =>{
  return (dispatch) =>{
        dispatch(setUsersLoaded(true));
        getAxiosUsers(UsersCurrentPage, UsersCount).then(data =>{
        dispatch(setUsersLoaded(false));
        dispatch(setUsers(data.items));
        dispatch(SetTotalCount(data.totalCount));
            
        });
  }
}

export const pageChangedThunk = (pageNumber, UsersCount) =>{
  return (dispatch) =>{
        dispatch(setUsersCurrentPage(pageNumber));
        dispatch(setUsersLoaded(true));
        getAxiosUsers(pageNumber, UsersCount).then(data =>{
        dispatch(setUsersLoaded(false));
        dispatch(setUsers(data.items));
    
});
  }
}


export const UnFollowThunk = (id) =>{
  return (dispatch) =>{
    dispatch(DisableFollowingBtn(true, id));
    getAxiosUnFollow(id)
    .then(data =>{
        if(data.resultCode ===0){
          dispatch(unfollowFnc(id))
        }
        dispatch(DisableFollowingBtn(false, id))
    })
  }
}

export const FollowThunk = (id) =>{
  return (dispatch) =>{
    dispatch(DisableFollowingBtn(true, id));
    getAxiosFollow(id)
    .then(data =>{
        if(data.resultCode ===0){
          dispatch(followFnc(id))
        }
        dispatch(DisableFollowingBtn(false, id))
    });
  }
}











export default UserReducer