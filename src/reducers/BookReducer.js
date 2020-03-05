import {SEARCH_BY_NAME} from "../const/actionsTypes";

import { users } from "../const/data";
  
  const initState = {
    users,
    inputSearch: "",
  
  };
  
  const BookReducer = (state = initState, action) => {
    switch (action.type) {
     
  
      case SEARCH_BY_NAME:
        return { ...state, inputSearch: action.payload };
  
    
      default:
        return state;
    }
  };
  export default BookReducer;
  