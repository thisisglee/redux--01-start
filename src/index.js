import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
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

//middleware
const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log(`[Middleware] Disptaching`, action);
      const result = action;
      console.log(`[Middleware] next State`, store.getState());
      next(result);
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//store
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);

//subscription

//action

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
