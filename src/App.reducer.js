import {
    REQUEST_PENDING, REQUEST_SUCCESS, REQUEST_FAILED,
    DRAG_START, DRAG_END, DRAG_ENTER
} from './constants.js'

const initState = {
    taskUpdate: {},
    tasks: [],
    error: ''
}

export const requestTasks = (state=initState, action={}) => {
    switch (action.type) {
        case DRAG_START:
            return Object.assign({}, state, { dragTask: action.payload });
        case DRAG_ENTER:
            return Object.assign({}, state, { changeTo: action.payload });
        case DRAG_END:
            console.log(DRAG_END, state);
            // return state;
            var newTasks = state.tasks.map(item => {
                if (item.id === state.dragTask && item.taskGroupid !== state.changeTo){
                    return Object.assign({}, item, { taskGroupid : state.changeTo });
                }
                return item;
            });
            return Object.assign({}, state, { tasks: newTasks, changeTo: undefined, dragTask: undefined });
        case REQUEST_SUCCESS:
            return Object.assign({}, state, { tasks: action.payload });
        case REQUEST_FAILED:
            return Object.assign({}, state, { error: action.payload });
        case REQUEST_PENDING:
        default:
            return state;
    }
}