import "../css/App.css";
import "../css/bootstrap-5.2.0-dist/css/bootstrap.min.css";
import {FaClipboardList,FaTimes} from "react-icons/fa";
import {useState,useRef,createContext,useContext} from "react";
import TaskAdd from "./TaskAdd.js"
import Tasks from "./Tasks.js";



export const CompleteTasksContext=createContext();
export const IncompleteTasksContext=createContext();
export const DraggedTaskContext=createContext();



const App=()=>{

	const [incompleteTasks,setIncompleteTasks]=useState([]);
	const [completeTasks,setCompleteTasks]=useState([]);
	const [draggedTask,setDraggedTask]=useState("");

	const taskInput=useRef();

	function addTaskHandler(event){
		event.preventDefault()
		const text=taskInput.current.value;
		if(text==""){
			return;
		}
		taskInput.current.value="";
		setIncompleteTasks([...incompleteTasks,text]);
	}

	return (
		<>
			<header className="bg-dark text-light p-1">
				<h2 className="display-6"><FaClipboardList 
				style={{width:20,height:20,margin:5}}/>Task App</h2>
			</header>
			<main className="container mt-4 p-2">
				<div className="row justify-content-center m-2">
					<TaskAdd inputRef={taskInput} addHandler={addTaskHandler}/>
				</div>
				<CompleteTasksContext.Provider value={[completeTasks,setCompleteTasks]}>
					<IncompleteTasksContext.Provider value={[incompleteTasks,setIncompleteTasks]}>
						<DraggedTaskContext.Provider value={[draggedTask,setDraggedTask]}>
							<div id="master-task-container"className="row border mt-3 rounded-2">
								<Tasks id="incomplete" title="Tasks" 
								tasks={incompleteTasks} setTasks={setIncompleteTasks}
								otherTasks={completeTasks} setOtherTasks={setCompleteTasks}/>

								<Tasks id="complete" title="Complete" 
								tasks={completeTasks} setTasks={setCompleteTasks}
								otherTasks={incompleteTasks} setOtherTasks={setIncompleteTasks}/>
							</div>
						</DraggedTaskContext.Provider>
					</IncompleteTasksContext.Provider>
				</CompleteTasksContext.Provider>
			</main>
		</>
	);
}

export default App;
