import React from "react";
import ExpenseCard from "./ExpenseCard";

export default function ExpenseList({
	expenses,
	setEditExpense,
	fetchExpenses,
}) {
	return (
		<div className="row">
			{expenses.map((expense) => (
				<ExpenseCard
					key={expense.id}
					data={expense}
					setEditExpense={setEditExpense}
					fetchExpenses={fetchExpenses}
				/>
			))}
		</div>
	);
}
