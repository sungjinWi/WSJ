import logo from './logo.svg';
import './App.css';
// import Jsxtest from './Jsxtest';
// import Jsxcss from './Jsxcss';
import Block4 from './Block4';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Jsxtest />
//       <Jsxcss />
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <div>
        <img src={logo} className='App-logo' alt='logo' />
      </div>
      <Block4 />
    </div>
  );
}

export default App;
