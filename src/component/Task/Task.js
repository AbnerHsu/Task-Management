import React, { Component } from 'react';
import InputText from '../InputText/InputText';

class Task extends Component {
    constructor({ info, status, start, end, changeTaskTitle }) {
        super();
        let name = (info) ? info.title : '';
        let id = (info) ? info.id : '';
        this.state = { isEditMode: false, "name": name, "id": id, "status": status, "start": start, "end": end, changeTitle: changeTaskTitle };
    }

    changeMode() {
        this.setState({ isEditMode: !this.state.isEditMode });
    }

    changeTitle(v) {
        this.state.changeTitle(this.state.id, v);
        this.setState({name: v});
    }

    finishEditingTaskTitle(v) {
        if(v) {
            this.changeTitle(v);
        }
        this.changeMode();
    }

    render() {
        const { id, name, isEditMode, status, start, end } = this.state;
        let content = (isEditMode) ?
            (<span>
                <InputText 
                    className="bb br2 b--black-10" 
                    onFinishInput={(v) => this.finishEditingTaskTitle(v)}
                    autoFocus={true}
                    defaultValue={name} />
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
                    <h2>
                        <InputText 
                            placeholder="task title" 
                            classValue="bb br2 b--black-10" 
                            isReset={true}
                            onFinishInput={(v) => this.props.add(v, status)}
                            />
                    </h2>
                    <p></p>
                </div>
            );
    }
}

export default Task;