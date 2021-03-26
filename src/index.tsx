import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, Store } from "redux"
import { Provider } from "react-redux"
import './index.css';
import App from './App';
import {IAppState} from './store/reducer';
import reducerr from './store/reducer';
import reportWebVitals from './reportWebVitals';
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension';

const store: Store<IAppState>  = createStore(reducerr,  composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
