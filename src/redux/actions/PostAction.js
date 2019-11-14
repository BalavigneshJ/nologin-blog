import { SAVE } from "./actionTypes"; 
import { NoLoginRef } from "../../firebase" ;

console.log("NoLoginRef=======",NoLoginRef);

export const postBlog = newPost => async dispatch => {
  var s = {"bala" : [{"msg" : "hi" ,"title":"test"}]}
  //NoLoginRef.push().set(s);
  NoLoginRef.ref("bala").set({"msg" : "hi" ,"title":"test"})
};

export const fetchBlog = () => async dispatch => {
  NoLoginRef.on("value", snapshot => {
    dispatch({
      type: SAVE,
      payload: snapshot.val()
    });
  });
};  

  
  
  
  