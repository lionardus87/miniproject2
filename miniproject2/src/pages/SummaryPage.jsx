import { useExpense } from "../contexts/ExpenseContext";
import SummaryTable from "../components/SummaryTable";
import SortExpense from "../components/SortExpense";
import FilterExpense from "../components/FilterExpense";
import SearchExpense from "../components/SearchExpense";
import { sortedExpenses } from "../utils/sortedExpenses";

function SummaryPage() {
	const {
		expenses,
		fetchExpenses,
		setSortOption,
		setFilterOption,
		setSearchQuery,
		sortOption,
		filterOption,
		searchQuery,
	} = useExpense();

	const handleSearchInput = (query) => setSearchQuery(query);

	const filteredExpenses = sortedExpenses(expenses, {
		sortOption,
		filterOption,
		searchQuery,
	});

	return (
		<div className="container mt-4">
			<div className="d-flex flex-wrap gap-3 align-items-center my-3">
				<SortExpense setSortOption={setSortOption} />
				<FilterExpense setFilterOption={setFilterOption} />
				<SearchExpense onSearch={handleSearchInput} />
			</div>
			<SummaryTable expenses={filteredExpenses} fetchExpenses={fetchExpenses} />
		</div>
	);
}

export default SummaryPage;
