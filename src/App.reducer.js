import {
    REQUEST_PENDING,
    REQUEST_SUCCESS,
    REQUEST_FAILED,
} from './constants.js'

const initState = {
    tasks: [],
    error: ''
}

export const requestTasks = (state=initState, action={}) => {
    console.log(action.payload);
    switch (action.type) {
        case REQUEST_SUCCESS:
            return Object.assign({}, state, { tasks: action.payload });
        case REQUEST_FAILED:
            return Object.assign({}, state, { error: action.payload });
        case REQUEST_PENDING:
        default:
            return state;
    }
}