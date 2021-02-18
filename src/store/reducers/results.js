import * as actionTypes from '../actions';

//state
const initialState = {
  results: [],
};

//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.value }),
      };
    case actionTypes.DELETE_RESULT:
      const updatedArray = state.results.filter(
        (result) => result.id !== action.resultId
      );
      return {
        ...state,
        results: updatedArray,
      };

    default:
      break;
  }
  return state;
};

export default reducer;
