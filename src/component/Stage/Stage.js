import React, { Component } from 'react';
import TaskList from '../TaskList/TaskList';

class Stage extends Component{
    constructor({tasks}){
        super();
        this.tasks = tasks;
        let stages = {};
        tasks.forEach((item) => {
            if(!stages[item.stageId]) {
                stages[item.stageId] = { id: item.stageId, taskList: [] };
            }
            stages[item.stageId]["taskList"].push(item);
        });

        this.stages = stages;
    }

    render(){
        const lists = [];
        for (let prop in this.stages){
            lists.push(this.stages[prop].taskList);
        }
        return (
            lists.map((list) => <TaskList tasks={list} />)
        );
    }
}

export default Stage;