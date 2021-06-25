import logo from './logo.svg';
import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllUsers } from './actions';

function App() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users)
  useEffect(() => {
    dispatch(getAllUsers)
  }, [dispatch])

  console.log(users);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
