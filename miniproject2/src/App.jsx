import { useEffect, useState } from "react";
import "./App.css";
import ExpenseList from "./components/ExpenseList";
import AddExpense from "./components/AddExpense";
import ExpenseSort from "./components/ExpenseSort";

function App() {
	const [expenses, setExpenses] = useState([]);
	const [editExpense, setEditExpense] = useState(null);
	const [sortOption, setSortOption] = useState(null);

	const fetchExpenses = () => {
		fetch("http://localhost:3003/expenses")
			.then((res) => res.json())
			.then(setExpenses);
	};

	useEffect(() => {
		fetchExpenses();
	}, []);

	const sortedExpenses = () => {
		let sorted = [...expenses];
		if (sortOption === "price-asc") {
			sorted.sort((a, b) => parseFloat(a.amount) - parseFloat(b.amount));
		} else if (sortOption === "price-desc") {
			sorted.sort((a, b) => parseFloat(b.amount) - parseFloat(a.amount));
		} else if (sortOption === "title-asc") {
			sorted.sort((a, b) => a.title.localeCompare(b.title));
		} else if (sortOption === "title-desc") {
			sorted.sort((a, b) => b.title.localeCompare(a.title));
		}
		return sorted;
	};

	return (
		<>
			<div className="container mt-4">
				<h1 className="mb-4">Expense Tracker</h1>
				<AddExpense fetchExpenses={fetchExpenses} editExpense={editExpense} />
				<ExpenseSort setSortOption={setSortOption} />
				<ExpenseList
					expenses={sortedExpenses()}
					setEditExpense={setEditExpense}
					fetchExpenses={fetchExpenses}
				/>
			</div>
		</>
	);
}

export default App;
