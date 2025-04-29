import { useEffect, useState } from "react";
import "./App.css";
import ExpenseList from "./components/ExpenseList";

function App() {
	const [expenses, setExpenses] = useState([]);

	const fetchExpenses = () => {
		fetch("http://localhost:3002/expenses")
			.then((res) => res.json())
			.then(setExpenses);
	};

	useEffect(() => {
		fetchExpenses();
	}, []);

	return (
		<>
			<div className="container mt-4">
				<h1 className="mb-4">Expense Tracker</h1>

				<ExpenseList expenses={expenses} fetchExpenses={fetchExpenses} />
			</div>
		</>
	);
}

export default App;
