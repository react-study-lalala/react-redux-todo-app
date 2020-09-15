import React from "react";
import {connect} from 'react-redux';
import {clearDone, doneToTodo, removeDone} from "../store/modules/todo";

import Clear from "../components/common/Clear";
import DoneList from "../components/done/DoneList";

class DoneListContainer extends React.Component {

    render() {
        const {doneList, clearDone, removeDone, doneToTodo} = this.props;
        return (
            <div>
                <Clear clear={clearDone} list={doneList} text="Done 전체 삭제"></Clear>
                <DoneList doneList={doneList} removeDone={removeDone} doneToTodo={doneToTodo}></DoneList>
            </div>
        )
    }
}


// 읽기 전용
const mapStateToProps = state => ({
    doneList: state.todoReducer.doneList
});

// reducer에 있는 메서드 또는 함수를 받아다가 내가 원하는방식.
const mapDispatchToProps = dispatch => ({
    clearDone: () => dispatch(clearDone()),
    doneToTodo: idx => dispatch(doneToTodo(idx)),
    removeDone: idx => dispatch(removeDone(idx))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DoneListContainer);

