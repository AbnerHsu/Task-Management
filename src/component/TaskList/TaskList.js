import React, {Component} from 'react';
import Task from '../Task/Task';

class TaskList extends Component
{
    constructor({tasks}){
        super();
        this.state = { "tasks" : tasks};
    }

    dragEndCallback(event, id) {
        let final = this.state.tasks.filter(n => n.id !== id);
        this.setState({ "tasks" : final });
    }

    render() {
        return (
            <div className="taskList br3 v-top">
            { 
                this.state.tasks.map((task) => <Task key={task.id} taskName={task.name} taskId={task.id} taskcontainer={this} />)
            }
            </div>
        );
    }
} 

export default TaskList;