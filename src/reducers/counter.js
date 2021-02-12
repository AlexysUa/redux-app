const counterReducer = (state=1, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.payLoad;
    case 'DECREMENT':  
      return state - 1;
    default:
      return state;
  }
}

export default counterReducer;