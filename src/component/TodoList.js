import React, { useState } from "react";
import TodoForm from "./Todoform";
import TodoItem from "./TodoItem";

const TodoList = () => {
	const [tasksItem, setTaskItem] = useState("");
	const [tasks, setTask] = useState([]);

	const AddTask = () => {
		let newItem = {
			name:tasksItem,
			isComplete:false,
		}
		let taskArr = [...tasks, newItem];
		setTask(taskArr);
		setTaskItem("");
	};

	const handleTask = (e) => {
		setTaskItem(e.target.value);
	};

	const handleDelete = (index) => {
		setTask(tasks.filter((item) => tasks.indexOf(item) !== index));
	};

	const handleCompletedTask = (index) =>{
		let newArr = [...tasks]
		newArr[index].isComplete = !newArr[index].isComplete
		setTask(newArr)
	}
	return (
		<div
			style={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center" ,
                flexDirection:"column",
                alignItems:"center"
        }}
		>
			<TodoForm
				setTask={AddTask}
				value={tasksItem}
				onChange={(e) => {
					handleTask(e);
				}}
			/>

			{tasks.map((item, index) => {
				return (
					<TodoItem
						key={index}
						onDelete={() => handleDelete(index)}
						name={item.name}
						isCompleted={item.isComplete}
						onClick={(e)=>{ 
							if(e.target.innerHTML !== "Delete"){
								handleCompletedTask(index)
							}
						 }
						}
					/>
				);
			})}
		</div>
	);
};

export default TodoList;
