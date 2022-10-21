import {FaPlus} from "react-icons/fa"

const TaskAdd=({inputRef,addHandler})=>{
	return(
		<form className="input-group" id="todo-add" onSubmit={addHandler}>
			<input ref={inputRef} className="form-control form-control-lg" type="text" 
			placeholder="Got something todo ...." />
			<button className="btn btn-dark input-group-text" type="submit">
				<FaPlus/> <span className="fw-lighter">add</span>
			</button>
		</form>
	);
}

export default TaskAdd;