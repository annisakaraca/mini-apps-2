var React = require('react');
var Checkout = require('./Components/Checkout');
var axios = require('axios');

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
    axios.post('/customer', {})
    .then((response) => {
      console.log(response);
      this.setState({customerId: response.data});
      this.setState({currentPage: 'f1'});
    })
    .catch((error) => {
      console.log(error);
    })
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

