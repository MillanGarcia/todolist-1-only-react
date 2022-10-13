import React, { useState } from "react";
import InputElem  from "./InputElem.jsx";
import ButtonElem  from "./ButtonElem.jsx";
import TodoList  from "./TodoList.jsx";
import Contador from "./Contador.jsx";

//create your first component
const Home = (props) => {

	const [counter, setCounter] = useState(0);
	const [taskValue, setTaskValue] = useState("");
	const [tasks, setTasks] = useState([]);
	

	const addTask = (event) => {
		event.preventDefault();
		const auxTasks = [...tasks]
		auxTasks.push({
		id: counter,
		text: taskValue,
		})
		console.log({ auxTasks })
		setTasks(auxTasks)
		setCounter(counter + 1)
		setTaskValue("")
	}
	const number="1";
	const myPlaceholder = (tasks.length===0) ? "Sin tareas, presione 'Enter' o clicke en 'Añadir tarea'" : "Escriba aqui su nueva tarea";

	const contador1 = tasks.length+" item left";
	
	const removeTask = (id) => {
		const auxTasks = [...tasks]
		const result = auxTasks.filter((tasks) => tasks.id !== id);
		setTasks(result);
		console.log({ result })
	}

	const handleSubmit = event => {
		event.preventDefault();
	
		console.log('form submitted ✅');
	  };

	

	return (
		<div className ="text-center">
			<div className="container bg-light tamaño">
				<h1 className="textouno ">todos</h1>
				<ButtonElem  onClick={addTask} value="Añadir tarea" />
				<div className="xtrashade" style={{backgroundColor:"white",width:"400px",height:"40px",margin:"auto",padding:"8px",boxShadow:"0px 0px 10px grey"}}>
				<form onSubmit={addTask}>
					<InputElem placeholder={myPlaceholder} value={taskValue} onChange={(e) => setTaskValue(e.target.value)} />
				</form>
				</div >
					<div style={{backgroundColor:"white",width:"400px",height:"35px",margin:"auto",border:"1px solid black",borderTopStyle:"none",borderLeftStyle:"none"}}>
						<TodoList tasks={tasks} removeTask={removeTask} numero={contador1} />
					</div>
			</div>
		</div>
		)

};


export default Home;
