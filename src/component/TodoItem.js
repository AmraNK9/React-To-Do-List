import React from "react";
import "./TodoItem.css";
const TodoItem = ({ name, onDelete, isCompleted, onClick }) => {
	return (
		
			<div onClick={onClick}
				 className="container"
				 style={style.container}
			>
				<li className={isCompleted? "completed": null}  style={style.li}>{name}</li>
				<button onClick={onDelete}>Delete</button>
			</div>
		
	);
};

const style = {
	li: {
		backgroundColor: "#fff",
		color: "#000",
		listStyle: "none",
	},
	container: {
		backgroundColor: "#fff",
		display: "flex",
	},
};

export default TodoItem;
