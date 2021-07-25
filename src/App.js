import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Redux is awesome!!!</h1>
        <h2>Counter: {counter}</h2>
        <br />
        <button onClick={() => dispatch(increment(5))}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </header>
    </div>
  );
}

export default App;
