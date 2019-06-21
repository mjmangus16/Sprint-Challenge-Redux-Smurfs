import React, { Component } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions/index";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addSmurf = e => {
    e.preventDefault();
    const smurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };

    const status = Object.values(smurf).every(value => value !== "");

    if (status) {
      this.props.addSmurf(smurf);
      this.setState({
        name: "",
        age: "",
        height: ""
      });
      this.props.history.push("/");
    }
  };

  render() {
    return (
      <div className="SmurfForm" style={{ marginTop: 100 }}>
        <form
          onSubmit={this.addSmurf}
          style={{
            display: "flex",
            flexDirection: "column",
            width: 300,
            margin: "auto"
          }}
        >
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
            style={{ fontSize: "1.5rem", marginTop: 10 }}
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
            style={{ fontSize: "1.5rem", marginTop: 10 }}
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
            style={{ fontSize: "1.5rem", marginTop: 10 }}
          />
          <button type="submit" style={{ fontSize: "1.5rem", marginTop: 10 }}>
            Add to the village
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.smurfsReducer.error,
    fetching: state.smurfsReducer.loggingIn,
    smurfs: state.smurfsReducer.smurfs
  };
};

export default connect(
  mapStateToProps,
  {
    addSmurf
  }
)(SmurfForm);
