import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import TodoApp from './TodoApp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter,
  Switch,
  // Routes,
  Route
} from "react-router-dom";
import Nav from './Nav';
import Home from './Home';
import React from 'react';
import ListUser from './ListUsers';
import DetailUser from './DetailUser';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <Routes> */}
        <Switch>
          {/* <Route path='/' element={<Home />} />
          <Route path='/TodoApp' element={<TodoApp />} />
          <Route path='/ListUser' exact element={<ListUser />}/>
          <Route path='/ListUser/:id' element={<DetailUser />} /> --v6 */}
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/TodoApp'>
            <TodoApp />
          </Route>
          <Route path='/ListUser' exact>
            <ListUser />
          </Route>
          <Route path='/ListUser/:id'>
            <DetailUser />
          </Route>
          {/* <Route path='/' component={<Home />} />
          <Route path='/TodoApp' component={<TodoApp />} />
          <Route path='/ListUser' component={<ListUser />} /> */}
        {/* </Routes> -v6*/}
        </Switch>
        <ToastContainer />
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
