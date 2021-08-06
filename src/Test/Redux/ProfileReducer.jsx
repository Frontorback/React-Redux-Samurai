import { getAxiosProfilePhoto } from "../Axios/Axios-API";

 let initialState = {
   AddMessages:[
         {id: 1, mes: "asd"},
         {id: 2, mes: "asd"},
         {id: 3, mes: "sad"},
         {id: 4, mes: "das"},
         {id: 5, mes: "dca"}
         
   ],
   NewText:"Hi, it's me",
   ProfilePhoto: null
}

const ProfileReducer = (state = initialState, action) =>{
   
    switch(action.type){
       case "ADD_POST": {
         let info = {
            id:7,
            mes:state.NewText
         };
         return {
               ...state,
               AddMessages: [...state.AddMessages, info ],
               NewText: ''
            
         }
       }
     case "UPDATE_POST":{
        return {
         ...state,
         NewText: action.UpdText
        }

     }
     case "PROFILE-PHOTO":{
        return {
           ...state,
           ProfilePhoto: action.photo
        }
     }
     default : return state;
   }
}

export const addNewPost = () =>{
    return (
        {type: "ADD_POST"}
    )
 }
 export const updateNewPost = (text) =>{
    return (
        { type: "UPDATE_POST", UpdText:text}
    )
 }

 export const addProfilePhoto = (photo) =>{
    return(
       {type:"PROFILE-PHOTO", photo:photo}
    )
 }

 export const ProfilePhotoThunk = (id) =>{
   return (dispatch) =>{
        getAxiosProfilePhoto(id)
      .then(response =>{
          dispatch(addProfilePhoto(response.data));
      });
   }
 } 
 
 
export default ProfileReducer