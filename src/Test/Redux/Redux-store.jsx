import { applyMiddleware, combineReducers, createStore } from "redux";
import AuthReducer from "./Auth-user";
import DialogsReducer from "./DialogsReducer";
import ProfileReducer from "./ProfileReducer";
import UserReducer from "./UserReducer ";
import thunkMiddleware from "redux-thunk"

let reduces = combineReducers({
    ProfilePage: ProfileReducer,
    DialogsPage: DialogsReducer,
    UsersPage: UserReducer,
    auth:AuthReducer
}
)
let store = createStore(reduces, applyMiddleware(thunkMiddleware));

export default store