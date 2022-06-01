import { createStore } from 'redux';
import allReducers from './reducers/index';
import thunk from 'redux-thunk';

const store = createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(thunk));


export default store;