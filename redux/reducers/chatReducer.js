const initialState = {};
// Redux: Counter Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CHATS':
      return {
        ...state,
        chats: action.payload,
      };
    default:
      return state;
  }
};
