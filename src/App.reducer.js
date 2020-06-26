import {
    REQUEST_PENDING, REQUEST_SUCCESS, REQUEST_FAILED,
    DRAG_START, DRAG_END, DRAG_ENTER,
    STATUS_REQUEST_SUCCESS,
    ADD_TASK_REQUEST_SUCCESS
} from './constants.js'
import { apiServer } from './config';

const initState = {
    status: [],
    taskUpdate: {},
    tasks: [],
    error: ''
}

export const requestTasks = (state = initState, action = {}) => {
    switch (action.type) {
        case DRAG_START:
            return Object.assign({}, state, { dragTask: action.payload });
        case DRAG_ENTER:
            return Object.assign({}, state, { changeTo: action.payload });
        case DRAG_END:
            console.log(DRAG_END, state);
            // return state;
            var newTasks = state.tasks.map(item => {
                if (item.id === state.dragTask && item.statusId !== state.changeTo) {
                    var postData = { statusId: state.changeTo};
                    let requestObj = {
                        body: JSON.stringify(postData),
                        method: 'PATCH',
                        cache: 'no-cache',
                        headers: { 'content-type': 'application/json' }
                        
                    };
                    fetch(apiServer + '/task/' + state.dragTask, requestObj).catch(err => console.log(err));
                    return Object.assign({}, item, { statusId: state.changeTo });
                }
                return item;
            });
            return Object.assign({}, state, { tasks: newTasks, changeTo: undefined, dragTask: undefined });
        case REQUEST_SUCCESS:
            return Object.assign({}, state, { tasks: action.payload });
        case REQUEST_FAILED:
            return Object.assign({}, state, { error: action.payload });
        case STATUS_REQUEST_SUCCESS:
            return Object.assign({}, state, { status: action.payload });
        case ADD_TASK_REQUEST_SUCCESS:
            if (action.payload) {
                let newTasks = state.tasks.slice();
                newTasks.push(action.payload);
                return Object.assign({}, state, { tasks: newTasks });
            }
            return state;
        case REQUEST_PENDING:
        default:
            return state;
    }
}