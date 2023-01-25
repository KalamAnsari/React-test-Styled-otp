// import { Component } from 'react';
import React from 'react'
import { useSelector} from 'react-redux'
import { useDispatch } from 'react-redux';
// import { render , connect } from '@testing-library/react';
import Styles from '../components/Counter.module.css'


const Counter = () => {
  const counter = useSelector(state => state.counter);
  const show    =useSelector(state=>state.showCounter)
  const dispatch = useDispatch()

  const incrementHandler = () => {
    dispatch({ type: "increment" })
  }
  const dcrementHandler = () => {
    dispatch({ type: "dcrement" })
  }
  const increaseHandler = () => {
    dispatch({ type: "increase" ,amount:5 })
  }
  const toggleHandler = () => {
    dispatch({ type: "toggle" })
  }


  return (
    <div className={Styles.counter}>
      {show &&<h1>{counter}</h1>}
      <button onClick={incrementHandler}>increment</button>
      <button onClick={dcrementHandler}>dcrement</button>
      <button onClick={increaseHandler}>increase</button>
      <button onClick={toggleHandler}>toggle</button>

    </div>
  )
}
export default Counter


// class Counter extends Component() {
//   incrementHandler(){
//     this.props.increment();
//   }
//   dcrementHandler(){
//     this.props.dcrement();
//   }
//   render() {
//     return (
//       <div className='counter'>
//         <h1>{this.props.counter}</h1>
//         <button onClick={this.incrementHandler.bind(this)}>update</button>
//       </div>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   }
// }

// const mapDispatchToProps=dispatch=>{
//   return{

//     increment:()=>dispatch({type:"increment"}),
//     dcrement:()=>dispatch({type:"dcrement"})
//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Counter) 