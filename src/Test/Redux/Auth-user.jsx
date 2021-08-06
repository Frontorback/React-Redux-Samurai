import { getAxiosLogin } from "../Axios/Axios-API";

 let AuthinitialState = {
    userId:null,
    login:null,
    email:null,
    isAuth: false
    
 }
 
 const AuthReducer = (state = AuthinitialState, action) =>{
    
     switch(action.type){

      case "SET-DATA-USER":{
         return {
          ...state,
          ...action.data,
          isAuth: true
         }
 
      }
      
      default : return state;
    }
 }
 
 export const DataInformation = (userId, login, email) =>{
     return (
         {type: "SET-DATA-USER", data:{userId, login, email}}
     )
     }
  
export const LoginThunk = () =>{
    return (dispatch) =>{
        getAxiosLogin.me()
        .then(response =>{
            if(response.data.resultCode === 0){
                let {id, login, email} = response.data.data;
                dispatch(DataInformation(id, login, email));
            }
            // debugger;
            
        });
    }
}     
 export default AuthReducer