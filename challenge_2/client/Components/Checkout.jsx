var React = require('react');

function Checkout(props){
  return (
    <button onClick={() => this.props.clickHandler()}>Checkout</button>
  )
}

module.exports = Checkout;