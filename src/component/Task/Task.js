import React from 'react';

const Task = ({ taskName, taskId, taskcontainer }) => {
    return (
        <div className="br3 pa3 ma2 grow bw2 shadow-5 v-top" draggable="true" onDragEnd={e => taskcontainer.dragEndCallback(e, taskId)}>
            <h2>{taskName}</h2>
            <p></p>
        </div>
    );
};

export default Task;