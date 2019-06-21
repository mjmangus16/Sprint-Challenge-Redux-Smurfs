import React from "react";
import { connect } from "react-redux";
import { deleteSmurf } from "../actions/index";

const Smurf = props => {
  console.log(props);
  return (
    <div
      className="Smurf"
      style={{
        border: "1px solid black",
        margin: "20px auto auto",
        padding: "25px 0px",
        width: "75%"
      }}
    >
      <h3>{props.data.name}</h3>
      <strong>{props.data.height} tall</strong>
      <p>{props.data.age} smurf years old</p>
      <button onClick={() => props.deleteSmurf(props.data.id)}>
        DELETE SMURF
      </button>
    </div>
  );
};

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
    deleteSmurf
  }
)(Smurf);
