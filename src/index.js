import store from './Test/Redux/Redux-store'; 
import React from 'react';
import ReactDOM from 'react-dom';
import './Test/Header/Grid.css'
import './Test/Content/Dialogs'
import './Test/Content/Users.css'
import './Test/Content/Profile.css'
import Hello from './Test/Hello';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';


// export let renderMain = (state) =>{
  
    ReactDOM.render(
      <BrowserRouter>
        <Provider store ={store}
        // tate={state}  
          // dispatchh ={store.dispatch.bind(store)}
          > 
          <Hello/>
        </Provider>
         
        
        </BrowserRouter>
        ,document.getElementById('root')
      );
      
    // }


// renderMain(store.getState());
// store.subscribe( ()=>{
//   let state = store.getState();
//   renderMain(state)
// })
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
