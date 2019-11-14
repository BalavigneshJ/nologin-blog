import React , {useState} from 'react';
import Textarea from "./Textarea" ;
import { connect } from "react-redux" ;
import { postBlog } from './redux/actions/PostAction';
//import Blog from './Blog';

function Create(props) {
	const [title , setTitle] = useState("") ;
	const [msg , setMsg] = useState("") ;

	const post = function() {
		let name = document.getElementsByClassName("name-value")[0].value  ;
		let data = [{name:name , title:title , msg:msg}];
		props.onPost(data);
		redirect();
	}

	const redirect = function(){
        props.history.push("/list");
    }

	const getMsgFromTextarea = function(val , title){
		setMsg(val) ;
		setTitle(title);
	}

	return (
	<div className="App">
			
			<div className="get-details">

				<div className="name">
					<input className="name-value" placeholder="name"></input>
				</div>
				
				<div className="msg">
					<Textarea getMsg={getMsgFromTextarea}/>
				</div>
			
				<button onClick={post}>POST</button>

			</div>

			{/* <Blog msg={msg} name={name} title={title}/> */}
	</div>
	);
}

const mapDispatchToProps = dispatch => {
	return {
	  onPost : data => {
		dispatch(postBlog(data));
	  } 
	};
  };

export default connect (null ,mapDispatchToProps)(Create);
