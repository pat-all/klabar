import { createStore } from 'redux';
import rootReducer from './reducers';
 
const configureStore = (initialStore) => {
    return(createStore(
        rootReducer, 
        initialStore,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));
}

export default configureStore;