import { createContext, useContext, useState, useEffect } from "react";

const ExpenseContext = createContext();

export const useExpense = () => useContext(ExpenseContext);

export const ExpenseProvider = ({ children }) => {
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

	return (
		<ExpenseContext.Provider
			value={{
				expenses,
				fetchExpenses,
				editExpense,
				setEditExpense,
				sortOption,
				setSortOption,
				filterOption,
				setFilterOption,
				searchQuery,
				setSearchQuery,
				showModal,
				setShowModal,
			}}
		>
			{children}
		</ExpenseContext.Provider>
	);
};
