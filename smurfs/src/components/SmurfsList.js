import React, { Component } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions/index";

import Smurf from "./Smurf";

class SmurfsList extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  renderSmurfs = () => {};

  render() {
    let content;

    if (this.props.smurfs.length > 0) {
      content = this.props.smurfs.map(smurf => (
        <Smurf data={smurf} key={smurf.id} />
      ));
    }

    return <div>{content}</div>;
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
    getSmurfs
  }
)(SmurfsList);
