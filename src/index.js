import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
yield takeEvery('GET_PROJECTS',getProjects);
yield takeEvery('GET_TAGS',getTags);
yield takeEvery('ADD_PROJECT', addProject);
}

function* addProject(action) {
    try {
        yield axios.post('/admin', action.payload);
        const nextAction = { type: 'GET_PROJECTS' };
        yield put(nextAction);
    }
    catch (error) {
        yield console.log('error in addProject', error);
    }
}
function* getProjects(action){
    try{
        const serverResponse = yield axios.get('/project');
        const nextAction ={type:'SET_PROJECTS', payload:serverResponse.data};
        yield put(nextAction);
    }catch(error){
        console.log(error,'in get projects');
    }
}

function* getTags(action){
    try{
        const serverResponse = yield axios.get('/admin');
        const nextAction ={type:'SET_TAGS', payload:serverResponse.data};
        yield put(nextAction);
    }catch(error){
        console.log(error,'in get Tags saga');
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store projects returned from the server
const projects = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROJECTS':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the project tags (e.g. 'React', 'jQuery', 'Angular', 'Node.js')
const tags = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        projects,
        tags,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
