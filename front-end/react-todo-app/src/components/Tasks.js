import {createContext,useContext} from "react";
import {DraggedTaskContext} from "./App.js"
import Task from "./Task.js"

export const TasksContext=createContext();

const Tasks=({id,title,tasks,setTasks,otherTasks,setOtherTasks})=>{

	const [draggedTask,setDraggedTask]=useContext(DraggedTaskContext);

	function handleDragOver(event){
		if(tasks.find(t=>t==draggedTask)){
			return;
		}else{
			setTasks([...tasks,draggedTask]);
			setOtherTasks(otherTasks.filter(o=>o!=draggedTask));
		}
	}

	let text="";
	if(title=="Complete"){
		text="alert-warning"
	}else{
		text="alert-primary"
	}

	return(
		<div id={id} className="col-6 p-3" onDragOver={handleDragOver}>
			<h1 className="text-center display-3">{title}</h1>
			<hr/>
			<TasksContext.Provider value={[tasks,setTasks]}>
				<div className="tasks-container">
					{tasks.map(t=><Task text={t} key={t} textStyle={text}/>)}
				</div>
			</TasksContext.Provider>
		</div>
	);
}

export default Tasks;