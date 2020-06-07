import React from 'react';
import Task from '../Task/Task';

const TaskList = ({ tasks }) => {
    return (
        <div className="taskList">
            { 
                tasks.map((task) => <Task key={task.id} taskName={task.name} />)
            }
        </div>
        );
};

export default TaskList;