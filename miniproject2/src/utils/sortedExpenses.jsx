export function sortedExpenses(
	expenses,
	{ filterOption, searchQuery, sortOption }
) {
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
}
