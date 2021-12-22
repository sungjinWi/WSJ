import logo from './logo.svg';
import './App.css';
// import InputExam from './InputExam';
// import UserList from './UserList';
// import UserManage from './UserManage';
import Reactcss from './Reactcss'
import CircleDiv from './CircleDiv'


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

function App() {
  return (
    <>
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          {/* <InputExam /> */}
          {/* <UserList /> */}
          {/* <UserManage /> */}
          {/* <Box /> */}
          <Reactcss />
          <CircleDiv color='blue'>              무야호        </CircleDiv>
        </header>
      </div>
    </>
  );
}

export default App;
