var React = require('react');

class F2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addr1: '',
      addr2: '',
      city: '',
      state: '',
      zipcode: '',
      phone: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let stateObject = {};
    stateObject[event.target.id] = event.target.value;
    this.setState(stateObject);
  }

  handleSubmit(event) {
    let infoObj = {};
    for (var val in this.state) {
      infoObj[`${val}`] = this.state[val];
    };
    this.props.clickHandler(this.props.id, infoObj, 'f3');
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Street Address:
            <input type="text" id="addr1" value={this.state.name} onChange={this.handleChange} />
          </label><br/>
          <label>
            Apt Number:
            <input type="text" id="addr2" value={this.state.email} onChange={this.handleChange} />
          </label><br/>
          <label>
            City:
            <input type="text" id="city" value={this.state.city} onChange={this.handleChange} />
          </label><br/>
          <label>
            State:
            <input type="text" id="state" value={this.state.state} onChange={this.handleChange} />
          </label><br/>
          <label>
            Zip Code:
            <input type="text" id="zipcode" value={this.state.zipcode} onChange={this.handleChange} />
          </label><br/>
          <label>
            Phone Number:
            <input type="text" id="phone" value={this.state.phone} onChange={this.handleChange} />
          </label><br/>
        </form>
        <button onClick={()=>{this.handleSubmit()}}>Next</button>
      </div>
    )
  }
}

module.exports = F2;