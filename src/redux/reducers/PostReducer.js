import {
    INIT ,
    SAVE
  } from "../actions/actionTypes" ; //No I18N
  
  const initState = {
    posts : [] ,
    status : INIT 
  } ;
  
  function PostReducer(state = initState , action) {
  
    switch (action.type) {
  
      case SAVE:
        return { posts: action.payload , status : SAVE };
  
      case INIT:
        return { post : state.posts , status : INIT };
  
      default:
        return state;
    }
  };
  
  export default PostReducer;