import React from 'react'
import { buyIceCream } from './redux/iceCream/iceCreamActions'
import { connect } from 'react-redux'

const IceCreamContainer = (props) => {
  return (
    <>
    <h2>Number of IceCream - {props.numOfIceCreams}</h2>
    <button onClick={props.buyIceCream}>Buy IceCream</button>
    </>
  )
}

const mapStateToProps = (state) => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)