import React from "react";
import {connect} from 'react-redux';
import {createTodo, clearTodo, removeTodo, todoToDone} from "../store/modules/todo";
import TodoList from "../components/todo/TodoList";
import TodoInput from "../components/todo/TodoInput";
import Clear from "../components/common/Clear";

class TodoListContainer extends React.Component {

    render() {
        const {createTodo, clearTodo, removeTodo, todoList,todoToDone} = this.props;
        return (
            <div>
                <Clear clear={clearTodo} list={todoList} text="Todo 전체 삭제"></Clear>
                <TodoInput createTodo={createTodo}></TodoInput>
                <TodoList todoList={todoList} removeTodo={removeTodo} todoToDone={todoToDone}></TodoList>
            </div>
        )
    }
}



// 읽기 전용
const mapStateToProps = state => ({
    todoList: state.todoReducer.todoList
});

// reducer에 있는 메서드 또는 함수를 받아다가 내가 원하는방식.
const mapDispatchToProps = dispatch => ({
    createTodo : color => dispatch(createTodo(color)),
    clearTodo : () => dispatch(clearTodo()),
    removeTodo : idx => dispatch(removeTodo(idx)),
    todoToDone: idx => dispatch(todoToDone(idx))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoListContainer);

