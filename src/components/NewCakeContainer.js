import React, { useState } from 'react'
import { buyCake } from './redux/cake/cakeActions'
import { connect } from 'react-redux'

const NewCakeContainer = (props) => {
    const [number, setNumber] = useState(1);
  return (
    <>
    <h1>Number of cakes - {props.numberOfCakes}</h1>
    <input typeof='text' value={number} onChange={e => setNumber(e.target.value)}/>
    <button onClick={() => props.buyCake(number)} >Buy {number} Cake</button>
    </>
  )
}

const mapStateToProps = state => {
  return {
    numberOfCakes: state.cake.numberOfCakes
    }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: number => dispatch(buyCake(number))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer)