import {
    REQUEST_PENDING,
    REQUEST_SUCCESS,
    REQUEST_FAILED,
    DRAG_START,
    DRAG_ENTER,
    DRAG_END
} from './constants';
import { apiServer } from './config';

export const requestTasks = () => (dispatch) => {
    dispatch({type: REQUEST_PENDING });
    fetch(apiServer + "/task")
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: REQUEST_FAILED, payload: error}));
};

export const startDragTask = (taskId) => {
    return { type: DRAG_START, payload: taskId };
};

export const finishDragTask = () => {
    return { type: DRAG_END };
};

export const dragTaskEnter = (id) => ({ type: DRAG_ENTER, payload: id });