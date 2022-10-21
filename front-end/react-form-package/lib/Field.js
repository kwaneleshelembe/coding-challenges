import {useRef,useState,useContext} from "react";
import {ValidContext} from "./Form.js";

const Field=(props)=>{

	const [valid,setValid]=useContext(ValidContext);
	const [message,setMessage]=useState("");
	const options=props.options;

	function checkOption(option,condition,errMessage){
		if(option){
			if(condition){
				setValid(false);
				setMessage(errMessage);
				return false;
			}else{
				setValid(true);
				setMessage("");
				return true;
			}
		}
	}

	function checkRequired(value){
		const option=options.required;
		const condition=value=="";
		const message=`field is required`;
		return checkOption(option,condition,message);
	}

	function checkMinLength(value){
		const option=options.minLength;
		const condition=value.length<options.minLength;
		const message=`must not be shorter than ${options.minLength} letters.`;
		return checkOption(option,condition,message);
	}

	function checkMaxLength(value){
		const option=options.maxLength;
		const condition=value.length>options.maxLength;
		const message=`must not be longer than ${options.maxLength} letters.`;
		return checkOption(option,condition,message);
	}

	function checkNumber(value){
		const option=options.number;
		const condition=!/\d+/.test(value);
		const message=`must contain atleast one number.`;
		return checkOption(option,condition,message);
	}

	function checkSpecialCharacter(value){
		const option=options.specialChar;
		const condition=!/[!@#\$%\^&\*\?]/.test(value);
		const message=`must contain atleast one special character.`;
		return checkOption(option,condition,message);
	}

	function checkPattern(value){
		const option=options.pattern;
		const condition=new RegExp(options.pattern).test(value);
		const message=`must follow this ||${options.pattern}|| format`;
		return checkOption(option,condition,message);
	}

	function handleChange(event){
		if(!options){
			return;
		}
		const value=event.target.value;

		if(!checkRequired(value)){
			return;
		}
		if(!checkMinLength(value)){
			return;
		}
		if(!checkMaxLength(value)){
			return;
		}

		if(!checkPattern(value)){
			return;
		}

		if(!checkNumber(value)){
			return;
		}
		if(!checkSpecialCharacter(value)){
			return;
		}		
	}

	function handler(){
		if(options){
			return handleChange;
		}else{
			return (e)=>{};
		}
	}

	function addRequired(){
		if(props.options){
			return props.options.required||false;
		}
	}

	return(
		<>	
			<p className="message">
			{message}</p>
			<input {...props} required={addRequired()} onChange={handler()}/>
		</>
	)
}

export default Field;