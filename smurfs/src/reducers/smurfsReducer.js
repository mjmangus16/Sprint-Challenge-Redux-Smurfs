import {
  FETCHING,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAILURE,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAILURE
} from "../actions";
const initialState = {
  smurfs: [],
  fetching: false,
  error: ""
};
export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING: {
      return {
        ...state,
        error: "",
        fetching: true
      };
    }
    case GET_SMURFS_SUCCESS: {
      return {
        ...state,
        error: "",
        fetching: false,
        smurfs: action.payload
      };
    }
    case GET_SMURFS_FAILURE: {
      return {
        ...state,
        error: "Something Went Wrong!",
        fetching: false
      };
    }
    case ADD_SMURF_SUCCESS: {
      return {
        ...state,
        error: "",
        fetching: false,
        smurfs: action.payload
      };
    }
    case ADD_SMURF_FAILURE: {
      return {
        ...state,
        error: "WE COULD NOT ADD THAT SMURF TO THE DATABASE!",
        fetching: false
      };
    }
    case DELETE_SMURF_SUCCESS: {
      return {
        ...state,
        error: "",
        fetching: false,
        smurfs: action.payload
      };
    }
    case DELETE_SMURF_FAILURE: {
      return {
        ...state,
        error: "WE COULD NOT DELETE THAT SMURF TO THE DATABASE!",
        fetching: false
      };
    }
    default:
      return state;
  }
};
