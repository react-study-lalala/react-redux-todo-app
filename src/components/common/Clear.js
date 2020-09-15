import React from 'react'
import styled from 'styled-components';

class Clear extends  React.Component {
    constructor(props) {
        super(props);

        this.clearTodoList = this.clearTodoList.bind(this);
    }

    clearTodoList() {
        const {clear, list} = this.props;

        if(this.isEmpty(list)) {
            alert("지울일도 없잖아");
            return ;
        }

        if(window.confirm("삭제 한다?")) {
            clear()
        }
    }

    isEmpty(todoList) {
        return todoList.length === 0;
    }

    render() {
        const {text} = this.props;
        return <RemoveAll onClick={this.clearTodoList}>{text}</RemoveAll>
    }
}


const RemoveAll = styled.button`
  width: 100%;
  display: block;
  border : 0;
  background-color: rgba(255,0,0,0.59);
  color:#FFFFFF;
  padding : 10px 0;
  outline : none;
  
  &:hover{
    cursor:pointer;
    background-color: rgb(255,0,0);
  }
  
  &:focus{
    border:0;
  }
`;

export default Clear;