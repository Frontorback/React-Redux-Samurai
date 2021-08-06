import DialogsReducer from "./DialogsReducer";
import ProfileReducer from "./ProfileReducer";

let store = {
    _state: {
      ProfilePage:{
         AddMessages:[
               {id: 1, mes: "asd"},
               {id: 2, mes: "asd"},
               {id: 3, mes: "sad"},
               {id: 4, mes: "das"},
               {id: 5, mes: "dca"}
               
         ],
         NewText:"Hi, it's me"
      },
    DialogsPage:{
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
      },
         
    
},
   getState () {
      return this._state
   },
   renderMain () {
   console.log('not found')
},
//    addPost () {
//    let info = {
//       id:7,
//       mes: this._state.ProfilePage.NewText
//    }
//    this._state.ProfilePage.AddMessages.push(info);
//    // this._state.ProfilePage.AddMessages.NewText = '';
//    this._renderMain(this._state)
// },

//    updateNewPost (text) {
  
//    this._state.ProfilePage.NewText = text;
//    this._renderMain(this._state)
// },
   subscribe (observer) {
   this._renderMain = observer
},
   dispatch(action){

      this._state.ProfilePage = ProfileReducer(this._state.ProfilePage, action);
      this._state.DialogsPage = DialogsReducer(this._state.DialogsPage, action);

      this._renderMain(this._state)

      // if(action.type === "add-post"){
      //    let info = {
      //       id:7,
      //       mes: this._state.ProfilePage.NewText
      //    }
      //    this._state.ProfilePage.AddMessages.push(info);
      //    this._state.ProfilePage.NewText = '';
      //    this._renderMain(this._state)
      // }else if(action.type === "update-post"){
      //    this._state.ProfilePage.NewText = action.UpdText;
      //    this._renderMain(this._state)
      // }else if(action.type === "add-dialogs-post"){
      //    let messDialogs ={
      //       id:6,
      //       name:this._state.DialogsPage.CurrentText
      //    }
      //    this._state.DialogsPage.MessageOf.push(messDialogs);
      //    this._state.DialogsPage.CurrentText =''
      //    this._renderMain(this._state)
      // }else if(action.type === "update-dialogs-post"){
      //    this._state.DialogsPage.CurrentText = action.ChangeText
      //    this._renderMain(this._state)
      // }
   }
}










export default store;