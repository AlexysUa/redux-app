import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, loggedIn } from './actions';

function App() {
  const counter = useSelector(state=> state.myCounter);
  const userLogged = useSelector(state=> state.isLogged);
  const dispatch = useDispatch();
  
  return (
    <>
      <h1>My state is {counter}</h1>
      <button onClick={()=> dispatch(increment(1))}>+</button>
      <button onClick={()=> dispatch(decrement())}>-</button>
      <button onClick={()=> dispatch(loggedIn())}>log in</button>
      {userLogged && <h1>Some text</h1>}
    </>    
  );
}

export default App;
