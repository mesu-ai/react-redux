import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import counterReducer from '../reducer/CounterReducer';
import todosReducer from '../reducer/TodosReducer';

const rootReducer=combineReducers({
    counterR:counterReducer,
    todosR:todosReducer,

})

const store=createStore(rootReducer,applyMiddleware(thunk));
export default store;