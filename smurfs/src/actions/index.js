import axios from "axios";

export const FETCHING = "FETCHING";
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS";
export const GET_SMURFS_FAILURE = "GET_SMURFS_FAILURE";

export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";

export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS";
export const DELETE_SMURF_FAILURE = "DELETE_SMURF_FAILURE";

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      dispatch({
        type: GET_SMURFS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => dispatch({ type: GET_SMURFS_FAILURE }));
};

export const addSmurf = data => dispatch => {
  dispatch({ type: FETCHING });
  axios
    .post("http://localhost:3333/smurfs", data)
    .then(res => {
      dispatch({
        type: ADD_SMURF_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => dispatch({ type: ADD_SMURF_FAILURE }));
};

export const deleteSmurf = data => dispatch => {
  dispatch({ type: FETCHING });
  axios
    .delete(`http://localhost:3333/smurfs/${data}`)
    .then(res => {
      dispatch({
        type: DELETE_SMURF_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => dispatch({ type: DELETE_SMURF_FAILURE }));
};
