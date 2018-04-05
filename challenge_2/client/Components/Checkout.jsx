var React = require('react');

function Checkout(props){
  return (
    <button onClick={() => props.clickHandler()}>Checkout</button>
  )
}

module.exports = Checkout;