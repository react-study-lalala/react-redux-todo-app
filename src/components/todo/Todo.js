import React from 'react';
import styled from "styled-components";

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.remove = this.remove.bind(this);
        this.todoToDone = this.todoToDone.bind(this);
    }

    todoToDone() {
        const {todoToDone, todo : {idx}} = this.props;
        todoToDone(idx);
    }

    remove() {
        const {removeTodo, todo : {idx}} = this.props;
        removeTodo(idx);
    }

    render() {
        const {title, contents} = this.props.todo;
        return(
            <CreateTodo>
                <TodoTitle>{title}</TodoTitle>
                <TodoContents>{contents}</TodoContents>
                <EventWrap>
                    <DoneButton onClick={this.todoToDone}>했다!</DoneButton>
                    <RemoveButton onClick={this.remove}>삭제</RemoveButton>
                </EventWrap>
            </CreateTodo>
        )
    }
}


const CreateTodo = styled.div`
  margin: 10px auto;
  position: relative;
  width: 70%;
  border: 1px solid #ffd050;
  border-radius : 10px;
  padding: 10px;
  
`;

const TodoTitle = styled.p`
  padding: 5px 10px;
  width: 96%;
  border: 0;
  border-bottom: 1px solid #e8e8e8;
  display: block;
  outline: none;
  word-break: break-word;
`;

const TodoContents = styled.p`
  padding: 5px 10px;
  margin: 10px 0;
  width: 96%;
  border: 0;
  display: block;
  outline: none;
  resize: none;
  word-break: break-word;
`;


const DoneButton = styled.button`
  background-color: transparent;
  padding: 5px 15px;
  margin: 5px 10px;
  border-radius: 7px;
  border : 0px;
  color: white;
  background-color: rgba(35,195,255,0.56);
  outline: none;
  &:hover {
    cursor: pointer;
    background-color: rgb(35,195,255);  
  }
`;
const RemoveButton = styled.button`
  background-color: transparent;
  padding: 5px 15px;
  margin: 5px 5px;
  border-radius: 7px;
  border : 0px;
  color: white;
  background-color: rgba(255,99,86,0.5);
  outline: none;
  &:hover {
    cursor: pointer;
    background-color: rgb(255,99,86);  
  }
`;

const EventWrap = styled.div`
  text-align: right;
`;

export default Todo