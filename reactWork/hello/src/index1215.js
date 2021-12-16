import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Car from './Car'; //Car.js
// import Gundam from './Gundam';
import Gundam from './Gundamcopy';
import Archangel from './Archangel';
import Headercomp from './Headercomp';
import Container from './Container';
import reportWebVitals from './reportWebVitals';


//Car.js
// ReactDOM.render( // virtual dom
//   <React.StrictMode>
//     <Car color="blue"/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// Gundam.js 
// ReactDOM.render(
//   <React.StrictMode>
//     <Gundam model="Freedom"/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );


//app.js없이 사용; import gundam 막으셈
// class Gundam extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     render() { 
//         return <h1>This Gundam is {this.props.model}!!!</h1>
//     }
// }
// ReactDOM.render(
//   <React.StrictMode>
//     <Gundam />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// Archangel.js
// ReactDOM.render(
//   <React.StrictMode>
//     <Archangel />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


//Gundamcopy.js
// ReactDOM.render(
//   <React.StrictMode>
//     <Gundam cargo="Archangel" />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

//Header.js
// ReactDOM.render(
//   <React.StrictMode>
//     <Headercomp newTitle="New title!!!!" />
//   </React.StrictMode>,
//   document.getElementById('header')
// );

//Container.js
ReactDOM.render(
  <React.StrictMode>
    <Container  />
  </React.StrictMode>,
  document.getElementById('header')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();