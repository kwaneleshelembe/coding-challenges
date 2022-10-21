import {useState,createContext} from "react";

export const ValidContext=createContext();

const Form=(props)=>{

	const [valid,setValid]=useState(true);

	function handleSubmit(event){
		event.preventDefault();
		if(!valid){
			return;
		}else{
			event.target.submit();
		}
	}

	return(
		<form {...props} onSubmit={handleSubmit}>
			<ValidContext.Provider value={[valid,setValid]}>
				{props.children}
			</ValidContext.Provider>
		</form>
	)
}


export default Form;