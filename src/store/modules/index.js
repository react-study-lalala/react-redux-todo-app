import {combineReducers} from "redux";
import todoReducer from './todo';

// 다른 리듀스도 넣고 싶다 하면 밑에 콤마(,)를 기준으로 추가해준다.
export default combineReducers({
    todoReducer
});