import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Gundam from './gd';
// import Archangel from './GundamObject';
// import Archangel from './ArchangelObject';
// import Archangel from './ArchangelList';
import Archangel from './ArchangelObjectList';
// import Football from './Football';
// import Goal from './Goal';
// import Fate from './Fate';





// GundamObject.js , ArchangelObject.js , ArchangelList.js , ArchangelObjectList.js
ReactDOM.render(
  <React.StrictMode>
    <Archangel />
  </React.StrictMode>,
  document.getElementById('root')
);

// gd.js
// ReactDOM.render(
//   <React.StrictMode>
//     <Gundam model="ZGMF-X10A" />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

//Football.js
// ReactDOM.render(
//   <React.StrictMode>
//     <Football />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

//Goal.js isGoal="false"로 하면 안됨
// ReactDOM.render(
//   <React.StrictMode>
//     <Goal isGoal={true} />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

//Fate.js
// const characters = ['siro', 'Saber', 'Archer', 'Tosaka Lyn', 'Verserker']

// ReactDOM.render(
//   <React.StrictMode>
//     <Fate chracters={characters} />
//   </React.StrictMode>,
//   document.getElementById('root')
// );




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();