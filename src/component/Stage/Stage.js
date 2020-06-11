import React, { Component } from 'react';
import TaskList from '../TaskList/TaskList';
import {stageMapping} from  '../../stageMapping'

class Stage extends Component {
    constructor({ tasks }) {
        super();
        this.tasks = tasks.sort((n, v) => n.stageId - v.stageId);
    }

    dropcallback = (event) => {
        // debugger;
        // console.log(event);
        console.log(1);
    }

    dropcallback1 = (event) => {
        // debugger;
        console.log(2);
    }

    dragEnterCallback = (event, id) => {
        this.setState({ to: id });
    }

    render() {
        let stages = {};
        this.tasks.forEach((item) => {
            let id = item.stageId;
            if (!stages[id]) {
                stages[id] = { id: id, taskList: [] };
            }
            stages[id]["taskList"].push(item);
        });

        const lists = [];
        for (let prop in stages) {
            lists.push((
                <div className="dib v-top" onDrop={this.dropcallback} onDragOverCapture={this.dropcallback1} onDragEnter={e => this.dragEnterCallback(e, stages[prop].id) } >
                    <h1>{stageMapping[stages[prop].id]}</h1>
                    <TaskList tasks={stages[prop].taskList} />
                </div>
            ));
        }

        return (lists);
    }
}

export default Stage;