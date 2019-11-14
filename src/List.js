import React from "react" ;
import ListEles from "./ListEles" ;
function List(props){

    const redirect = function(){
        props.history.push("/create");
    }

    return(
        <div className="list">
           <input onClick={redirect} className="input-list" placeholder="create new blog"></input>
           <ListEles {...props}/>
        </div>
    );

}

export default List ;