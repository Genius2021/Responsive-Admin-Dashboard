import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { sidebarStateReducer } from "./reducers/sidebarReducers";

const initialState = {
    // sidebarState: { sidebarState: true }

};


const reducer = combineReducers({
  
    // userSignin: userSigninReducer,
    sidebarState: sidebarStateReducer
   
});



const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;