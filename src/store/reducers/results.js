import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

//state
const initialState = {
  results: [],
};

const deleteResult = (state, action) => {
  return state.results.filter((result) => result.id !== action.value);
};

//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updateObject(state, {
        results: state.results.concat({
          id: new Date(),
          value: action.value * 2,
        }),
      });
    case actionTypes.DELETE_RESULT:
      return updateObject(state, { results: deleteResult(state, action) });

    default:
      return state;
  }
};

export default reducer;
