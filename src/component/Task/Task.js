import React, { Component } from 'react';
import InputText from '../InputText/InputText';

class Task extends Component {
    constructor({ info, status, start, end, changeTaskTitle }) {
        super();
        let { title, id } = (info || { title: '', id: '' });
        this.state = { isEditMode: false, name: title, id: id, status: status, start: start, end: end, changeTitle: changeTaskTitle };
    }

    changeMode() {
        let { isEditMode } = this.state;
        this.setState({ isEditMode: !isEditMode });
    }

    changeTitle(newTitle) {
        let { id } =  this.state;
        this.state.changeTitle(id, newTitle);
        this.setState({name: newTitle});
    }

    finishEditingTaskTitle(title) {
        if(title) {
            this.changeTitle(title);
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
            <div className="br3 pa3 ma2 grow bw2 shadow-5 v-top task" draggable="true" onDragStart={e => start(id)} onDragEnd={e => end()} >
                <h2>
                    {content}
                </h2>
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
                </div>
            );
    }
}

export default Task;