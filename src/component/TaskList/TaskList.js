import React, {Component} from 'react';
import Task from '../Task/Task';

class TaskList extends Component
{
    constructor({tasks, callback, stage}){
        super();
        this.state = { "tasks" : tasks};
        this.callback = callback;
        this.stage = stage;
    }

    render() {
        return (
            <div className="taskList br3 v-top">
            { 
                this.props.tasks.map((task) => <Task key={task.id} taskName={task.name} taskId={task.id} taskcontainer={this} />)
            }
            </div>
        );
    }
} 

export default TaskList;