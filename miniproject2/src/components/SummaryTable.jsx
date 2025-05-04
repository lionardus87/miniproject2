import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { CalculateExpenses } from "../utilities/CalculateExpenses";

export default function SummaryTable({ expenses, fetchExpenses }) {
	const { paid, unpaid, totalPaid, totalUnpaid } = CalculateExpenses(expenses);

	const togglePaidStatus = async (expense) => {
		const updatedExpense = { ...expense, paid: !expense.paid };

		await fetch(`http://localhost:3003/expenses/${expense.id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedExpense),
		});

		fetchExpenses(); // refresh list after updating
	};

	const renderTable = (list) => {
		return list.map((exp, index) => (
			<tr key={exp.id}>
				<td>{index + 1}</td>
				<td>{exp.date}</td>
				<td>{exp.title}</td>
				<td>{exp.desc}</td>
				<td>${parseFloat(exp.amount).toFixed(2)}</td>
				<td>{exp.category}</td>
				<td>
					<InputGroup.Checkbox
						checked={exp.paid}
						onChange={() => togglePaidStatus(exp)}
						aria-label="Mark as paid/unpaid"
					/>
				</td>
			</tr>
		));
	};
	return (
		<>
			<h1>Summary Table</h1>
			<div className="container mt-4">
				<h3 className="text-start">Unpaid Expenses</h3>
				<table className="table table-bordered text-center table-hover">
					<thead className="table-dark">
						<tr>
							<th scope="col">No</th>
							<th scope="col">Date</th>
							<th scope="col">Title</th>
							<th scope="col">Description</th>
							<th scope="col">Amount</th>
							<th scope="col">Category</th>
							<th scope="col">Paid</th>
						</tr>
					</thead>
					<tbody>{renderTable(unpaid)}</tbody>
					<tfoot>
						<tr className="table-secondary">
							<td colSpan="4">
								<strong>Total</strong>
							</td>
							<td>${totalUnpaid.toFixed(2)}</td>
							<td colSpan="2"></td>
						</tr>
					</tfoot>
				</table>
			</div>

			<div className="container">
				<h3 className="text-start">Paid Expenses</h3>
				<table className="table table-bordered text-center table-hover">
					<thead className="table-dark">
						<tr>
							<th scope="col">No</th>
							<th scope="col">Date</th>
							<th scope="col">Title</th>
							<th scope="col">Description</th>
							<th scope="col">Amount</th>
							<th scope="col">Category</th>
							<th scope="col">Paid</th>
						</tr>
					</thead>
					<tbody>{renderTable(paid)}</tbody>
					<tfoot>
						<tr className="table-secondary">
							<td colSpan="4">
								<strong>Total</strong>
							</td>
							<td>${totalPaid.toFixed(2)}</td>
							<td colSpan="2"></td>
						</tr>
					</tfoot>
				</table>
			</div>
		</>
	);
}
