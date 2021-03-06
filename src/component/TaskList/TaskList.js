import React from 'react';
import Task from '../Task/Task';

const TaskList = (props) => {
    var tasks = props.tasksList.map((task) =>
        <Task key={task.id}
            info={task}
            start={props.start}
            end={props.end}
            changeTaskTitle={props.changeTastTitle}
            />);
    tasks.push(<Task add={props.add} key={props.status + "_new"} status={props.status} />);

    return (
        <div className="taskList br3 v-top fl w-100" >
            {tasks}
        </div>
    );
};

export default TaskList;