import { useExpense } from "../contexts/ExpenseContext";
import ExpenseList from "../components/ExpenseList";
import AddingExpense from "../components/AddingExpense";
import SortExpense from "../components/SortExpense";
import FilterExpense from "../components/FilterExpense";
import SearchExpense from "../components/SearchExpense";
import { sortedExpenses } from "../utils/sortedExpenses";
import Button from "react-bootstrap/Button";

function ExpensesPage() {
	const {
		expenses,
		showModal,
		setShowModal,
		editExpense,
		setEditExpense,
		fetchExpenses,
		sortOption,
		setSortOption,
		filterOption,
		setFilterOption,
		searchQuery,
		setSearchQuery,
	} = useExpense();

	const handleSearchInput = (query) => setSearchQuery(query);
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
		<div className="container mt-4">
			<Button variant="primary" onClick={handleAddClick}>
				Add Expense
			</Button>

			<AddingExpense
				show={showModal}
				handleClose={handleCloseModal}
				fetchExpenses={fetchExpenses}
				editExpense={editExpense}
			/>

			<div className="d-flex flex-wrap gap-3 align-items-center my-3">
				<SortExpense setSortOption={setSortOption} />
				<FilterExpense setFilterOption={setFilterOption} />
				<SearchExpense onSearch={handleSearchInput} />
			</div>

			<ExpenseList
				expenses={filteredExpenses}
				setEditExpense={handleEditClick}
				fetchExpenses={fetchExpenses}
			/>
		</div>
	);
}

export default ExpensesPage;
