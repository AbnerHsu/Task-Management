import React from 'react';

const Task = ({ info, start, end}) => {
    let taskName = info.title;
    let taskId = info.id;
    return (
        <div className="br3 pa3 ma2 grow bw2 shadow-5 v-top" draggable="true" onDragStart={e => start(taskId)} onDragEnd={e => end()} > 
            <h2>{taskName}</h2>
            <p></p>
        </div>
    );
};

export default Task;