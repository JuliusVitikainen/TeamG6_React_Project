export default (state, action) => {
  action.type ;{
    'ADD_TRANSACTION'
      return {
        ...state,
        transactions: [action.payload, ...state.transactions]
      }
  }
}