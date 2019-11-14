import React from "react" ;
import draftToHtml from 'draftjs-to-html';
import renderHTML from  'react-render-html';

function Blog(props){

    let post = props.location.post ;
    let msgConst = {
        data: {} ,
        depth: 0 ,
        entityRanges: [] ,
        inlineStyleRanges: [] ,
        key: "" ,
        text: "" ,
        type: ""
    }

    let msg = post.msg ;
    for(let i = 0 ; i < msg.blocks.length ; i++){
        msg.blocks[i] = { ...msgConst, ...msg.blocks[i] }
    }

    return(
        <div className="blog">

            <h1 className="blog-title">
               {post.title}
            </h1> 
            <div className="blog-content">
             {renderHTML(draftToHtml(msg))}
            </div> 
        
        </div>
    );

}

export default Blog ;