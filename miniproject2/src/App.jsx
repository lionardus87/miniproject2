import { useEffect, useState } from "react";
import "./App.css";
import Button from "react-bootstrap/esm/Button";
import ExpenseList from "./components/ExpenseList";
import AddExpense from "./components/AddExpense";
import SortExpense from "./components/SortExpense";
import FilterExpense from "./components/FilterExpense";
import SearchExpense from "./components/SearchExpense";
import SummaryTable from "./components/SummaryTable";

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

	const sortedExpenses = () => {
		let sorted = [...expenses];

		if (filterOption && filterOption !== "allCategories") {
			sorted = sorted.filter(
				(expense) => expense.category.toLowerCase() === filterOption.toLowerCase()
			);
		}

		if (searchQuery !== "") {
			sorted = sorted.filter((expense) => {
				const query = searchQuery.toLocaleLowerCase();
				return (
					expense.title.toLowerCase().includes(query) ||
					expense.desc.toLowerCase().includes(query) ||
					expense.amount.toString().includes(query) ||
					expense.category.toLowerCase().includes(query)
				);
			});
		}

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
						expenses={sortedExpenses()}
						setEditExpense={handleEditClick}
						fetchExpenses={fetchExpenses}
					/>
				</div>
			</div>
			<SummaryTable expenses={expenses} fetchExpenses={fetchExpenses} />
		</>
	);
}

export default App;
