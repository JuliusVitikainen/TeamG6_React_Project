export default (state, action) => {
    //
    return {
      ...state,
      transactions: [action.payload, ...state.transactions],
    };
  };