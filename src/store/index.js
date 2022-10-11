import {createStore, combineReducers, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {authReducer} from "./authReducer";
import {userReducer} from "./userReducer";
import {testReducer} from "./testReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    currentUser: userReducer,
    tests: testReducer,
})
export const store  = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))