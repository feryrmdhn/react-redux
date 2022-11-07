import axios from 'axios';
import { DELETE_DATA, GET_DATA, POST_DATA } from '../types';

const baseUrl = "https://retoolapi.dev/TpLcdd/data"

export const getData = () => {
    return async dispatch => {
        await axios.get(baseUrl)
            .then(res => {
                dispatch({
                    type: GET_DATA,
                    payload: res.data
                });
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const postData = (data) => {
    return async dispatch => {
        await axios.post(baseUrl, data)
            .then(() => {
                dispatch({
                    type: POST_DATA,
                });
            })
            .catch(err => {
                console.log(err);
            })
    };
};

export const delData = (id) => {
    return async dispatch => {
        await axios.delete(`${baseUrl}/${id}`)
            .then(() => {
                dispatch({
                    type: DELETE_DATA,
                    payload: id
                });
            })
            .catch(err => {
                console.log(err);
            })
    };
};