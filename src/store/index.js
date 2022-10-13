import {createStore, combineReducers, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {authReducer} from "./authReducer";
import {userReducer} from "./userReducer";
import {testReducer} from "./testReducer";
import {materialReducer} from "./materialReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    currentUser: userReducer,
    tests: testReducer,
    materials: materialReducer
})
export const store  = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))