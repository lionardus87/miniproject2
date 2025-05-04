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
				<div className="col-12 col-sm-5 col-md-4 col-lg-3 mb-4 " key={expense.id}>
					<ExpenseCard
						key={expense.id}
						data={expense}
						setEditExpense={setEditExpense}
						fetchExpenses={fetchExpenses}
					/>
				</div>
			))}
		</div>
	);
}
