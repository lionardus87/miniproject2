import { createContext, useContext, useReducer, useEffect } from "react";

const ExpenseContext = createContext();

export const useExpense = () => useContext(ExpenseContext);
const initialState = {
	expenses: [],
	editExpense: null,
	sortOption: null,
	filterOption: null,
	searchQuery: "",
	showModal: false,
};

const reducer = (state, action) => {
	switch (action.type) {
		case "SetExpenses":
			return { ...state, expenses: action.payload };
		case "SetEditExpense":
			return { ...state, editExpense: action.payload };
		case "SetSortOption":
			return { ...state, sortOption: action.payload };
		case "SetFilterOption":
			return { ...state, filterOption: action.payload };
		case "SetSearchQuery":
			return { ...state, searchQuery: action.payload };
		case "SetShowModal":
			return { ...state, showModal: action.payload };
		default:
			return state;
	}
};
export const ExpenseProvider = ({ children }) => {
	// const [expenses, setExpenses] = useState([]);
	// const [editExpense, setEditExpense] = useState(null);
	// const [sortOption, setSortOption] = useState(null);
	// const [filterOption, setFilterOption] = useState(null);
	// const [searchQuery, setSearchQuery] = useState("");
	// const [showModal, setShowModal] = useState(false);

	const [state, dispatch] = useReducer(reducer, initialState);

	const fetchExpenses = () => {
		fetch("http://localhost:3003/expenses")
			.then((res) => res.json())
			.then((data) => dispatch({ type: "SetExpenses", payload: data }));
	};

	useEffect(() => {
		fetchExpenses();
	}, []);

	return (
		<ExpenseContext.Provider
			value={{
				// expenses,
				// fetchExpenses,
				// editExpense,
				// setEditExpense,
				// sortOption,
				// setSortOption,
				// filterOption,
				// setFilterOption,
				// searchQuery,
				// setSearchQuery,
				// showModal,
				// setShowModal,
				...state,
				dispatch,
				fetchExpenses,
			}}
		>
			{children}
		</ExpenseContext.Provider>
	);
};
