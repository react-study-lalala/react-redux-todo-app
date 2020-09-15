import React from 'react'
import styled from 'styled-components';

class TodoInput extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoTitle : "",
            todoContent : ""
        };

        this.clear = this.clear.bind(this);
        this.onClickEvent = this.onClickEvent.bind(this);
        this.onChangeEvent = this.onChangeEvent.bind(this);
    }

    onClickEvent() {
        const {todoTitle : title, todoContent: contents} = this.state;
        const {createTodo} = this.props;

        createTodo({title, contents});
        this.clear();
    }


    onChangeEvent(e) {
        const {name, value} = e.target;
        this.setState({
            [name] : value
        })
    }

    clear() {
        this.setState({
            todoTitle:'',
            todoContent : ''
        })
    }

    isEmpty(text) {
        return text === ''
    }

    render() {
        return (
            <CreateTodo>
                <TodoInputTitle type="text" name="todoTitle" value={this.state.todoTitle} onChange={this.onChangeEvent} placeholder="제목"/>
                <TodoInputContent maxLength="150" type="text" name="todoContent" value={this.state.todoContent} onChange={this.onChangeEvent} placeholder="내용"/>
                <EventWrap>
                    <CreateButton onClick={this.onClickEvent}>저장</CreateButton>
                    <InitButton onClick={this.clear}>초기화</InitButton>
                </EventWrap>
            </CreateTodo>
        );
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

const TodoInputTitle = styled.input`
  padding: 5px 10px;
  width: 96%;
  border: 0;
  border-bottom: 1px solid #e8e8e8;
  display: block;
  outline: none;
`;

const TodoInputContent = styled.textarea`
  padding: 5px 10px;
  margin: 10px 0;
  height: 100px;
  width: 96%;
  border: 0;
  border-bottom: 1px solid #e8e8e8;
  display: block;
  outline: none;
  resize: none;
`;

const EventWrap = styled.div`
  text-align: right;
`;

const CreateButton = styled.button`
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

const InitButton = styled.button`
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

export default TodoInput;