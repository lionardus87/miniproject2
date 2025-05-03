import React from "react";
import { useState, useEffect } from "react";

export default function AddExpense({ fetchExpenses, editExpense }) {
	const [formData, setFormData] = useState({
		title: "",
		amount: "",
		desc: "",
		category: "",
	});
	useEffect(() => {
		if (editExpense) setFormData(editExpense);
	}, [editExpense]);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const url = editExpense
			? `http://localhost:3003/expenses/${editExpense.id}`
			: "http://localhost:3003/expenses/new";

		const method = editExpense ? "PUT" : "POST";
		await fetch(url, {
			method,
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(formData),
		});
		setFormData({ title: "", amount: "", desc: "", category: "" });
		console.log(formData);
		fetchExpenses();
	};

	return (
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

			<button className="btn btn-primary" type="submit">
				{editExpense ? "Update" : "Add"} Expense
			</button>
		</form>
	);
}
