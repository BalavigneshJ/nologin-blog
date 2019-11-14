import React , {useState} from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState , convertToRaw } from 'draft-js';
import "./texteditor.css";



function Textarea(props){

	const [value , setValue] = useState(EditorState.createEmpty());
	const handleChange = function(editorState){
		setValue(editorState)
	}

	const sendData = function(){
		props.getMsg(convertToRaw(value.getCurrentContent()) , document.getElementsByClassName("title")[0].value);
	}

	return(
		<div onBlur={sendData} className="text-editor">
			<input className="title" placeholder="Title"></input>
			<Editor
  				editorState={value}
				toolbarClassName="toolbarClassName"
				wrapperClassName="wrapperClassName"
				editorClassName="editorClassName"
				onEditorStateChange={handleChange}
				placeholder="Content"
			/>
		</div>
	)
}

export default Textarea ;