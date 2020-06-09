import React, { Component } from 'react';
import TaskList from '../TaskList/TaskList';

class Stage extends Component {
    constructor({ tasks }) {
        super();
        this.tasks = tasks;
        let stages = {};
        tasks.forEach((item) => {
            if (!stages[item.stageId]) {
                stages[item.stageId] = { id: item.stageId, taskList: [] };
            }
            stages[item.stageId]["taskList"].push(item);
        });

        this.stages = stages;
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

    render() {
        const lists = [];
        for (let prop in this.stages) {
            lists.push(this.stages[prop].taskList);
        }
        return (
            lists.map((list) => {
                return (
                    <div className="dib v-top" onDrop={this.dropcallback} onDragOverCapture={this.dropcallback1}>
                        <h1>Todo</h1>
                        <TaskList tasks={list} />
                    </div>
                );
            })
        );
    }
}

export default Stage;