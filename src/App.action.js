import {
    REQUEST_PENDING,
    REQUEST_SUCCESS,
    STATUS_REQUEST_SUCCESS,
    REQUEST_FAILED,
    ADD_TASK_REQUEST_SUCCESS,
    DRAG_START,
    DRAG_ENTER,
    DRAG_END
} from './constants';
import { apiServer } from './config';

export const requestTasks = () => (dispatch) => {
    dispatch({ type: REQUEST_PENDING });
    fetch(apiServer + "/status")
        .then(response => response.json())
        .then(data => dispatch({ type: STATUS_REQUEST_SUCCESS, payload: data }));

    fetch(apiServer + "/task")
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: REQUEST_FAILED, payload: error }));
};

export const addTask = (taskTitle, statusId) => (dispatch) => {
    dispatch({ type: REQUEST_PENDING });
    if (taskTitle) {
        var postData = { title: taskTitle, statusId: statusId };
        let requestObj = {
            body: JSON.stringify(postData),
            method: 'POST',
            cache: 'no-cache',
            headers: {
                'content-type': 'application/json'
            }
        };

        fetch(apiServer + "/task", requestObj)
            .then(response => response.json())
            .then(data => dispatch({ type: ADD_TASK_REQUEST_SUCCESS, payload: data }))
            .catch(error => dispatch({ type: REQUEST_FAILED, payload: "Failed on task addtion. error:" + error }));
    }
};

export const startDragTask = (taskId) => {
    return { type: DRAG_START, payload: taskId };
};

export const finishDragTask = () => {
    return { type: DRAG_END };
};

export const dragTaskEnter = (id) => ({ type: DRAG_ENTER, payload: id });