import {createStore,combineReducers,applyMiddleware} from 'redux';
//import createLogger from 'redux-logger';
import {Contador} from './reducer/reducer-count';

//const logger = createLogger();

const rootReducer = combineReducers({ Contador }); 

export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

/*store.subscribe(()=>{
    console.log(store.getState());
});*/
