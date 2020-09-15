import React from 'react';
import Done from "../done/Done";

class DoneList extends React.Component {
    constructor(props) {
        super(props);

        this.doneRender = this.doneRender.bind(this);
    }

    doneRender () {
        const {doneList,doneToTodo,removeDone} = this.props;
        return doneList.map(v => {
            return <Done key={v.idx} todo={v} doneToTodo={doneToTodo} removeDone={removeDone}></Done>
        })
    }


    render() {
        return (
            <div>
                {this.doneRender()}
            </div>
        );
    }

}

export default DoneList