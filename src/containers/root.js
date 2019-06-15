import React  from 'react'
import { Provider } from 'react-redux'
import configureStore from '../configurestore'
import App from '../App';
import preloadedStore from '../preloadedStore';

import '../index.css';

const store = configureStore(preloadedStore);

const Root = () => {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
}

export default Root;
