import { useEffect, useState } from "react";
import "./App.css";
import Button from "react-bootstrap/esm/Button";
import ExpenseList from "./components/ExpenseList";
import AddExpense from "./components/AddExpense";
import SortExpense from "./components/SortExpense";
import FilterExpense from "./components/FilterExpense";
import SearchExpense from "./components/SearchExpense";
import SummaryTable from "./components/SummaryTable";
import { sortedExpenses } from "./utilities/sortedExpenses";

function App() {
	const [expenses, setExpenses] = useState([]);
	const [editExpense, setEditExpense] = useState(null);
	const [sortOption, setSortOption] = useState(null);
	const [filterOption, setFilterOption] = useState(null);
	const [searchQuery, setSearchQuery] = useState("");
	const [showModal, setShowModal] = useState(false);

	const fetchExpenses = () => {
		fetch("http://localhost:3003/expenses")
			.then((res) => res.json())
			.then(setExpenses);
	};

	useEffect(() => {
		fetchExpenses();
	}, []);
	const handleSearchInput = (query) => {
		setSearchQuery(query);
	};

	const handleAddClick = () => {
		setShowModal(true);
		setEditExpense(null);
	};

	const handleEditClick = (expense) => {
		setEditExpense(expense);
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
		setEditExpense(null);
	};

	const filteredExpenses = sortedExpenses(expenses, {
		sortOption,
		filterOption,
		searchQuery,
	});

	return (
		<>
			<div className="container">
				<h1 className="mb-4">Expense Tracker</h1>
				<Button variant="primary" onClick={handleAddClick}>
					Add Expense
				</Button>
			</div>

			<AddExpense
				show={showModal}
				handleClose={handleCloseModal}
				fetchExpenses={fetchExpenses}
				editExpense={editExpense}
			/>

			<div>
				<div className="d-flex flex-wrap gap-3 align-items-center mb-4">
					<SortExpense setSortOption={setSortOption} />
					<FilterExpense setFilterOption={setFilterOption} />
					<SearchExpense onSearch={handleSearchInput} />
				</div>

				<div className="container mt-4">
					<ExpenseList
						expenses={filteredExpenses}
						setEditExpense={handleEditClick}
						fetchExpenses={fetchExpenses}
					/>
				</div>
			</div>
			<SummaryTable expenses={filteredExpenses} fetchExpenses={fetchExpenses} />
		</>
	);
}

export default App;
