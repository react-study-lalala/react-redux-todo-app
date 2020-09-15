// const CHANGE_COLOR = 'counter/CHANGE_COLOR';
//
// export const changeColor = color => ({type:CHANGE_COLOR , color});
import {
    CLEAR_TODO, CREATE_TODO, REMOVE_TODO, TODO_TO_DONE
    , CLEAR_DONE, REMOVE_DONE,DONE_TO_TODO
} from './types/todoTypes';

export const createTodo = todo => ({type: CREATE_TODO, todo});
export const removeTodo = idx => ({type: REMOVE_TODO, idx});
export const clearTodo = () => ({type: CLEAR_TODO});
export const todoToDone = idx => ({type: TODO_TO_DONE, idx});

export const doneToTodo = idx => ({type:DONE_TO_TODO, idx});
export const removeDone = idx =>({type: REMOVE_DONE, idx});
export const clearDone = () => ({type: CLEAR_DONE});


const initialState = {
    idx: 3,
    todoList: [{idx: 1, title: "aa", contents: "bb"}],
    doneList: [{idx: 2, title: "done", contents: "done"}]
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_TODO :
            return {
                ...state,
                todoList: [...state.todoList, {idx: state.idx, ...action.todo}],
                idx: ++state.idx
            };

        case REMOVE_TODO :
            return {
                ...state,
                todoList: state.todoList.filter(({idx}) => idx !== action.idx)
            };

        case CLEAR_TODO :
            return {
                ...state,
                idx: 1,
                todoList: []
            };

        case TODO_TO_DONE :
            return {
                ...state,
                doneList: [...state.doneList, state.todoList.find(({idx}) => idx === action.idx)],
                todoList: state.todoList.filter(({idx}) => idx !== action.idx)
            };

        case CLEAR_DONE :
            return {
                ...state,
                doneList: []
            };

        case REMOVE_DONE :
            return {
                ...state,
                doneList: state.doneList.filter(({idx}) => idx !== action.idx)
            };

        case DONE_TO_TODO :
            return {
                ...state,
                todoList: [...state.todoList, state.doneList.find(({idx}) => idx === action.idx)],
                doneList: state.doneList.filter(({idx}) => idx !== action.idx)
            };

        default :
            return state
    }
}