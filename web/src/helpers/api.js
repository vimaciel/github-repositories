import axios from 'axios';
import { put as putSaga } from 'redux-saga/effects';
import { updateLoadingStore } from '../actions/loading';

const apiUrl = 'http://localhost:3001/api'//process.env.API_URL;
console.log(apiUrl);


axios.create({
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE'
    }
});

export function* get(source) {
    try {
        yield putSaga(updateLoadingStore(true));
        return yield axios.get(`${apiUrl}/${source}`, { withCredentials: true });
    } catch (error) {
        return error.response;
    }
    finally {
        yield putSaga(updateLoadingStore(false));
    }
}