import React from 'react';

const Task = ({ info, start, end, add, status}) => {
    let taskName = (info) ? info.title : '';
    let taskId = (info) ? info.id : '';
    return (info) ? (
        <div className="br3 pa3 ma2 grow bw2 shadow-5 v-top" draggable="true" onDragStart={e => start(taskId)} onDragEnd={e => end()} > 
            <h2>{taskName}</h2>
            <p></p>
        </div>
    ) : (
        <div className="br3 pa3 ma2 grow bw1 shadow-5 v-top b--dashed b--black-10"> 
            <h2><input type="text" placeholder="Task title" className="bb br2 b--black-10" onBlur={ e => { add(e.target.value, status); e.target.value='';} } /></h2>
            <p></p>
        </div>
    );
};

export default Task;