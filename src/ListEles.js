import React , {useEffect} from "react" ;
import { connect } from "react-redux" ;
import ListNew from "./ListNew";
import { fetchBlog } from './redux/actions/PostAction';


function ListEles(props){

  useEffect(() => props.getPost(), []);
  
  if(props.posts && props.posts.length){
    return(
      <div>
        {
          props.posts.map((post , index) => {
              return(
                <ListNew {...props} key={index} index={index} post={post}/>
            );
          })
        }
      </div>
    )
  }else{
    return(
      <div>This is fully anonymous blog creation website. Try creating your own blog !!! </div>
    );
  }

}

const mapDispatchToProps = dispatch => {
	return {
	  getPost : () => {
		  dispatch(fetchBlog());
	  } 
	};
  };

const mapStateToProps = (state)=> {
    return {
      posts: state.Posts.posts ,
      postStatus : state.Posts.status 
    };
  };

export default connect(mapStateToProps ,mapDispatchToProps)(ListEles) ;