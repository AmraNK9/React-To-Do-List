import React from "react";

const TodoForm = ({ setTask, onChange, value }) => {
	return (
		<div
			style={{
				marginBottom: "10px",
				backgroundColor: "#fff",
				padding: "10px",
				borderRadius: "10px",
			}}
		>
			<input
				type="text"
				value={value}
				onChange={onChange}
				placeholder="Add New Task"
			/>
			<button
				style={
                    {
                        backgroundColor:"green"
                    }
                }
				onClick={setTask}
			>
				Add
			</button>
		</div>
	);
};

export default TodoForm;
