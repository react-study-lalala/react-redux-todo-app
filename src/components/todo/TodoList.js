import React from 'react';
import Todo from "./Todo";
class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.todoRender = this.todoRender.bind(this);
    }

    todoRender () {
        const {todoList, removeTodo, todoToDone} = this.props;
        return todoList.map(v => {
            return <Todo key={v.idx} todo={v} removeTodo={removeTodo} todoToDone={todoToDone}></Todo>
        })
    }


    render() {
        return (
            this.todoRender()
        )
    }
}

export default TodoList