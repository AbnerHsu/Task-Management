import {
    REQUEST_PENDING,
    REQUEST_SUCCESS,
    REQUEST_FAILED
} from './constants';
import { apiServer } from './config';

export const requestTasks = () => (dispatch) => {
    dispatch({type: REQUEST_PENDING });
    fetch(apiServer + "/task")
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: REQUEST_FAILED, payload: error}));
};