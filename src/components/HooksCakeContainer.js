import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from './redux/cake/cakeActions'

const HooksCakeContainer = () => {
  const numberOfCakes = useSelector(state => state.cake.numberOfCakes)
  const dispatch = useDispatch()
    return (
    <>
    <h1>Number of Cakes - {numberOfCakes}</h1>
    <button onClick={ () => dispatch(buyCake()) }>Buy Cake</button>
    </>
  )
}

export default HooksCakeContainer