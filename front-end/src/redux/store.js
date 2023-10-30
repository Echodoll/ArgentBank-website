import { combineReducers } from "redux";
import userRedux from './userRedux'

export default combineReducers({
    user: userRedux,
});