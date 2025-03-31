type State = {
    isOpen: boolean;
    isDelay: boolean;
    isNotification: boolean;
  };
  
  type Action =
    | { type: "open" }
    | { type: "close" }
    | { type: "delay" }
    | { type: "notification" };
  
  export function reducer(state: State, action: Action): State {
    switch (action.type) {
      case "open":
        return {
          ...state,
          isOpen: true,
          isNotification: false
        };
      case "close":
        return {
          ...state,
          isOpen: false
        };
  
      case "delay":
        return {
          ...state,
          isDelay: false
        };
      case "notification":
        return {
          ...state,
          isNotification: true
        };
  
      default:
        return state;
    }
  }
  