import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

const CakeContainer = (props) => {
  return (
    <div>
      <h1>Number of cakes- {props.numOfCakes} </h1>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
};

// 1st step --> define a new function. this function gets the redux state as a parameter and return an object 
const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes
  }
}
// 2nd step --> also define a new function. This function gets the dispatch as parameter and return an object 
const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  }
}


export default connect(
  mapStateToProps,mapDispatchToProps
  )(CakeContainer);
