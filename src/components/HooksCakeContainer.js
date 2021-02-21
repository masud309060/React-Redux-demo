import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from '../redux';

const HooksCakeContainer = () => { 
  const numOfCakes = useSelector(state => state.cake.numOfCakes)
  const dispatch = useDispatch()

  const style = {
    color: "green",
    border: "1px solid red",
    padding: "10px",
    margin: "10px"
  }
  return (
    <div style={style}>
      <h2>Number of cake- {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy cake</button>
    </div>
  );
};

export default HooksCakeContainer;