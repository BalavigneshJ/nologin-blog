import React from "react" ;

function ListNew(props){

    const redirect = function(){
        props.history.push({pathname:"/blog" , post:props.posts[props.index]});
    }

    return(
        <div className="post-list" onClick={redirect}>
            
            <h1 className="post-title">{props.post.title} </h1> 
            <div className="post-name">{props.post.name}</div> 

            {/* <div className="post-title">
               {renderHTML(draftToHtml(props.post.msg))}
            </div> */}
        </div>
    );

}

export default ListNew ;