import {FaTimes} from "react-icons/fa";
import {useContext} from "react"
import {TasksContext} from "./Tasks.js";
import {DraggedTaskContext} from "./App.js"

const Task=({text,textStyle})=>{

	const [tasks,setTasks]=useContext(TasksContext);
	const [draggedTask,setDraggedTask]=useContext(DraggedTaskContext);

	function handleDelete(){
		setTasks(tasks.filter(t=>t!=text));
	}

	function handleDragStart(event){
		setDraggedTask(text);
	}

	return(
		<div draggable="true" onDrag={(e)=>{
			e.preventDefault();
		}
		} onDragStart={handleDragStart} className={"container mb-2 alert "+textStyle}>
			<div className="row align-items-center">
				<p className="pt-2 col-10">{text}</p>
				<div className="col-2">
					<FaTimes onClick={(e)=>{handleDelete(text)}}/>
				</div>
			</div>
		</div>
	);
}

export default Task;