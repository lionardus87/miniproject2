import React from "react";

export default function ExpenseCard({ data, setEditExpense, fetchExpenses }) {
	const handleDelete = async () => {
		await fetch(`http://localhost:3003/expenses/${data.id}`, {
			method: "DELETE",
		});
		fetchExpenses();
	};
	return (
		<div className="card shadow-sm ">
			<div className="card-body d-flex flex-column ">
				<h2 className="card-title">{data.title}</h2>
				<p>
					<strong>Description:</strong> {data.desc}
				</p>
				<p>
					<strong>Category:</strong> {data.category}
				</p>
				<p>
					<strong>Amount:</strong> ${parseFloat(data.amount).toFixed(2)}
				</p>
				<p>
					<strong>Date:</strong> {data.date}
				</p>
				<div className="d-flex justify-content-end gap-2 mt-auto">
					<button
						className="btn btn-sm btn-outline-primary"
						onClick={() => setEditExpense(data)}
					>
						Edit
					</button>
					<button className="btn btn-sm btn-outline-danger" onClick={handleDelete}>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
}
