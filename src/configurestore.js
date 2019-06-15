import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
 
 const configureStore = (initialStore) => {
    return(createStore(initialStore, rootReducer));
}

export default configureStore;