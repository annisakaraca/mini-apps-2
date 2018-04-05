var React = require('react');
var Checkout = require('./Components/Checkout');
var F1 = require('./Components/F1');
var F2 = require('./Components/F2');
var axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customerId: null,
      currentPage: 'homepage'
    }
    this.createNewRecord = this.createNewRecord.bind(this);  
    this.updateRecord = this.updateRecord.bind(this);
  }

  createNewRecord() {
    axios.post('/customer', {})
    .then((response) => {
      this.setState({customerId: response.data});
      this.setState({currentPage: 'f1'});
    })
    .catch((error) => {
      console.log(error);
    })
  }

  updateRecord(id, info, nextPage) {
    axios.patch(`/customer/${id}`, info)
    .then((response) => {
      this.setState({currentPage: nextPage});
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    if (this.state.currentPage === 'homepage') {
      return <Checkout clickHandler={this.createNewRecord} />
    } else if (this.state.currentPage === 'f1') {
      return <F1 clickHandler={this.updateRecord} id={this.state.customerId}/>
    } else if (this.state.currentPage === 'f2') {
      return <F2 clickHandler={this.updateRecord} id={this.state.customerId}/>
    } else {
      return 'Hello';
    };
  }
}

module.exports = App;

