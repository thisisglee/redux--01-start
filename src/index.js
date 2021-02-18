import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers } from 'redux';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/results';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//state-reducer-  it was imported from store folder but technically they just come first
//combinig reducersd
const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer,
});
//store
const store = createStore(rootReducer);

//subscription

//action

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
