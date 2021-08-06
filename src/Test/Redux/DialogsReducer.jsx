
let initialState ={
   NameOf: [
      {id: 1, name: "Vitala"},
      {id: 2, name: "Kozloww"},
      {id: 3, name: "Kirill"},
      {id: 4, name: "Vadim"},
      {id: 5, name: "Danil"}
      
  ],
   MessageOf: [
      {id: 1, name: "Hi, dude"},
      {id: 2, name: "What's up"},
      {id: 3, name: "YOOOOOOOO"},
      {id: 4, name: "Vadim"},
      {id: 5, name: "Danil"}
   ],
   CurrentText:"fggg"
}

const DialogsReducer = (state = initialState, action) =>{
    switch(action.type){
    case "add-dialogs-post": {
        let messDialogs ={
           id:6,
           name: state.CurrentText
        };
        return {
           ...state,
           MessageOf:[...state.MessageOf, messDialogs],
           CurrentText: ''
         };
      //   stateCopy.MessageOf = [...state.MessageOf];
      //   stateCopy.MessageOf.push(messDialogs);
      //   stateCopy.CurrentText ='';
      //   return stateCopy;
          
     }case "update-dialogs-post":{
      return {
         ...state,
         CurrentText: action.ChangeText
      };
      // stateCopy.CurrentText = action.ChangeText;
      //  return stateCopy;
     }
     default: return state;
    }
}



export const pushDialogsPostCreator = () =>{
   return (
       {type: "add-dialogs-post"}
   )
}
export const updateDialogsPostCreator = (text) =>{
   return (
       { type: "update-dialogs-post", ChangeText:text}
   )
}

export default DialogsReducer