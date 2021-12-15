import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //require 아니고 자바스크립트의 import
import reportWebVitals from './reportWebVitals';

//기존 스크립트
// ReactDOM.render(
//   <React.StrictMode>
//     <App /> 
//   </React.StrictMode>,
//   document.getElementById('root') //index.html의 div id
// );

//Car-function
// ReactDOM.render(
//   <React.StrictMode>
//     <Car color="red"/> 
//   </React.StrictMode>,
//   document.getElementById('root') //index.html의 div id
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

//2번째 실습
// class HelloMessage extends React.Component {//reactcomponent에서 확장 받아서 component구성한다
//     render() {
//         return (
//             <h1>
//                 Hello {this.props.name}
//             </h1>
//         );
//     }
// }
// ReactDOM.render(
//     <HelloMessage name="React" />, // render의 첫번째 구성요소는 react component class 자체도 component이다
//     document.getElementById('root')
// );


// 3번째 실습
// const myElement = <h1>I Love React</h1>; //JSX type
// const myElement = React.createElement('h1', {}, 'Did not use jsx'); //React Element type
// const myElement = <h1>React is {5+5} times better with JSX!!!</h1>; //백쿼트 안쓰고 연산이 되는구만
// const myElement= (
//     <ul>
//         <li>Apple</li>
//         <li>Google</li>
//         <li>Amazon</li>
//         <li>Facebook</li>
//     </ul>
// );
// const myElement= (
//     <div>
//         <h1>Hello World</h1>
//         <p>I Love React and nodejs !!!</p>
//     </div>
// );
// const myElement = (
//     <input type="text"/>
// )
// const myElement = (<h1 className="myClass">Hello World!!!</h1>)

// const x = 8;
// let txt = "Hello World!!!";
// if(x < 10) {
//     txt = "Hello"
// }
// const myElement = <h1>{txt}</h1>;

const x = 11;
const myElement = <h1>{(x) < 10 ? "Hello" : "Hello World!!!"}</h1>

ReactDOM.render(myElement, document.getElementById('root'));

//1번째 실습
// const myelement = (
//     <table>
//         <tr>
//             <th>Name</th>
//         </tr>
//         <tr>
//             <td>John</td>
//         </tr>
//         <tr>
//             <td>Elsa</td>
//         </tr>
//     </table>
// )
// ReactDOM.render(myelement, document.getElementById('root'));

//0번쨰 실습
// ReactDOM.render(<p>Hello</p>, document.getElementById('root'));