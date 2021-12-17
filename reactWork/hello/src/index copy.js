import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Gundamform from './Gundamform';
import Hordform from './Hordform'

//Gundamform.js
// ReactDOM.render(
//   <React.StrictMode>
//     <Gundamform />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

//Hordform.js
// ReactDOM.render( //enter누르면 form에서 state에 전송이된다
//   <React.StrictMode>
//     <Hordform />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

//Wow.js Counter.js app에 임포트해서 app만 건들면서 바꿀수 있다
ReactDOM.render( //enter누르면 form에서 state에 전송이된다
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();