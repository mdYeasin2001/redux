import { combineReducers } from "redux";
import counter from './counter';
import auth from './isLogged';

const rootReducers = combineReducers({
    counter: counter,
    isLogged: auth
})

export default rootReducers;