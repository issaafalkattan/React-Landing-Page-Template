export const reducer = (state, action) => {
  switch (action.type) {
    case 'toggle':
      return {
        ...state,
        isOpen: !state.isOpen
      };
    case 'setNotification':
      return {
        ...state,
        notification: action.payload
      };
    default:
      return state;
  }
}; 