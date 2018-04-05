import React from 'react';
import Checkout from './Components/Checkout';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customerId: null,
      currentPage: 'homepage'
    }
  }
  render() {
    if (this.state.currentPage === 'homepage') {
      return <Checkout />
    } else {
      return 'Hello';
    };
  }
}

module.exports = App;

