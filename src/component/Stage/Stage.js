import React, { Component } from 'react';
import TaskList from '../TaskList/TaskList';
import { stageMapping } from '../../stageMapping'

class Stage extends Component {
    constructor({ tasks }) {
        super();
        this.state = { tasks : tasks.sort((n, v) => n.stageId - v.stageId)};
    }

    dropcallback = (event) => {
    }

    dropcallback1 = (event) => {
    }

    dragEnterCallback = (id) => {
        this.setState(Object.assign({}, this.state, { to: id}));
    }

    dropFinishCallback = (event, taskId) => {
        let val = this.state.tasks;//.tasks;
        let idx = this.state.tasks.findIndex(n => {
            return n.id === taskId
        });
        val[idx].stageId = this.state.to;
        this.setState({ tasks : val });
    }

    render() {
        console.log('render', this.state.tasks[2].stageId);
        let stages = {};
        this.state.tasks.forEach((item) => {
            let id = item.stageId;
            if (!stages[id]) {
                stages[id] = { id: id, taskList: [] };
            }
            stages[id]["taskList"].push(item);
        });

        const lists = [];
        for (let prop in stages) {
            console.log(stages[prop].taskList);
            lists.push((
                <div className="dib v-top stage" data-stage={stages[prop].id} onDrop={this.dropcallback} onDragOverCapture={this.dropcallback1} onDragEnter={e => this.dragEnterCallback(stages[prop].id)} >
                    <h1>{stageMapping[stages[prop].id]}</h1>
                    <TaskList tasks={stages[prop].taskList} callback={this.dropFinishCallback} stage={stages[prop]} />
                </div>
            ));
        }

        return (lists);
    }
}

export default Stage;