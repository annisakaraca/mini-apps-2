var React = require('react');
var Checkout = require('./Components/Checkout');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customerId: null,
      currentPage: 'homepage'
    }
    this.createNewRecord = this.createNewRecord.bind(this);  
  }

  createNewRecord() {
    console.log('clicked!')
  }

  render() {
    if (this.state.currentPage === 'homepage') {
      return <Checkout clickHandler={this.createNewRecord} />
    } else {
      return 'Hello';
    };
  }
}

module.exports = App;

