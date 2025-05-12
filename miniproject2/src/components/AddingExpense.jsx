import React, { useReducer, useEffect } from "react";
import ExpenseModal from "./ExpenseModal";

const initialData = [
	{
		title: "",
		amount: "",
		desc: "",
		category: "",
	},
];

const formReducer = (state, action) => {
	switch (action.type) {
		case "Set_Data":
			return { ...state, [action.field]: action.value };
		case "Set_Form":
			return action.load;
		case "Reset_Form":
			return initialData;
		default:
			return state;
	}
};

export default function AddingExpense({
	fetchExpenses,
	editExpense,
	show,
	handleClose,
}) {
	const [formData, dispatch] = useReducer(formReducer, initialData);

	useEffect(() => {
		if (editExpense) {
			dispatch({ type: "Set_Form", load: editExpense });
		} else {
			dispatch({ type: "Reset_Form" });
		}
	}, [editExpense]);

	const handleChange = (e) => {
		dispatch({ type: "Set_Data", field: e.target.name, value: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log("");
		const url = editExpense
			? `http://localhost:3003/expenses/${editExpense.id}`
			: "http://localhost:3003/expenses/new";
		const method = editExpense ? "PUT" : "POST";

		await fetch(url, {
			method,
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(formData),
		});

		fetchExpenses();
		handleClose();
	};

	return (
		<ExpenseModal
			show={show}
			handleClose={handleClose}
			onSubmit={handleSubmit}
			title={editExpense ? "Edit Expense" : "Add Expense"}
			submitLabel={editExpense ? "Update Expense" : "Add Expense"}
		>
			<form onSubmit={handleSubmit}>
				<input
					name="title"
					placeholder="Title"
					className="form-control mb-2"
					value={formData.title}
					onChange={handleChange}
				/>

				<input
					name="desc"
					placeholder="Description"
					className="form-control mb-2"
					value={formData.desc}
					onChange={handleChange}
				/>
				<input
					type="number"
					name="amount"
					placeholder="Amount"
					className="form-control mb-2"
					value={formData.amount}
					onChange={handleChange}
				/>
				<select
					name="category"
					className="form-control mb-2"
					value={formData.category}
					onChange={handleChange}
				>
					<option>Category</option>
					<option value="Utilities">Utilities</option>
					<option value="Entertainment">Entertainment</option>
					<option value="Groceries">Groceries</option>
				</select>
			</form>
		</ExpenseModal>
	);
}
