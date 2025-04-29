import ExpenseCard from "./ExpenseCard";

export default function ExpenseList({ expenses, fetchExpenses }) {
	return (
		<div className="row">
			{expenses.map((expense) => {
				<ExpenseCard
					key={expense.id}
					expense={expense}
					fetchExpenses={fetchExpenses}
				/>;
			})}
		</div>
	);
}
