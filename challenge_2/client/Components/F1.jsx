var React = require('react');

class F1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
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
    this.props.clickHandler(this.props.id, infoObj, 'f2');
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Name:
            <input type="text" id="name" value={this.state.name} onChange={this.handleChange} />
          </label><br/>
          <label>
            Email:
            <input type="text" id="email" value={this.state.email} onChange={this.handleChange} />
          </label><br/>
          <label>
            Password:
            <input type="password" id="password" value={this.state.password} onChange={this.handleChange} />
          </label><br/>
        </form>
        <button onClick={()=>{this.handleSubmit()}}>Next</button>
      </div>
    )
  }
}

module.exports = F1;