import React, { Component } from 'react';

class Task extends Component {
    constructor({ info, status, start, end, changeTaskTitle }) {
        super();
        let name = (info) ? info.title : '';
        let id = (info) ? info.id : '';
        this.state = { isEditMode: false, "name": name, "id": id, "status": status, "start": start, "end": end, changeTitle: changeTaskTitle, "oldValue": name };
    }

    changeMode() {
        this.setState({ isEditMode: !this.state.isEditMode });
    }

    changeTitle() {
        const {oldValue, name} = this.state;
        debugger;
        if (oldValue !== name ) {
            this.setState({ "oldValue": name });
            this.state.changeTitle(this.state.id, name);
        }
        this.changeMode();
    }

    changeInput(e) {
        this.setState({ name: e.target.value });
    }

    render() {
        const { id, name, isEditMode, status, start, end } = this.state;
        let content = (isEditMode) ?
            (<span>
                <input 
                className="bb br2 b--black-10" type="text" value={name} 
                onChange={e => this.changeInput(e)} 
                onBlur={(e) => this.changeTitle()} 
                autoFocus />
            </span>)
            : <span onDoubleClick={(e) => this.changeMode()} >{name}</span>

        return (id) ? (
            <div className="br3 pa3 ma2 grow bw2 shadow-5 v-top" draggable="true" onDragStart={e => start(id)} onDragEnd={e => end()} >
                <h2>
                    {content}
                </h2>
                <p></p>
            </div>
        ) : (
                <div className="br3 pa3 ma2 grow bw1 shadow-5 v-top b--dashed b--black-10">
                    <h2><input type="text" placeholder="Task title" className="bb br2 b--black-10" onBlur={e => { this.props.add(e.target.value, status); e.target.value = ''; }} /></h2>
                    <p></p>
                </div>
            );
    }
}

export default Task;