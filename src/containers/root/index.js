import React  from 'react'
import { Provider } from 'react-redux'

import App from '../../components/App';
import Modal from '../modal';

import { preloadedStore } from '../../preloadedStore';
import configureStore from '../../configurestore'

import '../../index.css';

const store = configureStore(preloadedStore);

const Root = () => {
    return (
      <Provider store={store}>
        <App />
        <Modal />
      </Provider>
    )
}

export default Root;
