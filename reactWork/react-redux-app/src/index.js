import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './modules'
import { composeWithDevTools } from 'redux-devtools-extension'


const store = createStore(rootReducer, composeWithDevTools()); //make store
// console.log(store.getState());// store state print to console

ReactDOM.render( // app을 프로바이더로 감싸게 되면 모두 store에 접근 가능하다
  // strictmode는 error message 띄우려고
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
