import {SEARCH_BY_NAME} from "../const/actionsTypes";
  

  
  export function searchName(payload) {
    return { type: SEARCH_BY_NAME, payload };
  }
 