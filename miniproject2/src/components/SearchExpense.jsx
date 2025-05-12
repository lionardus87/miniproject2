import React, { useState } from "react";
import { useExpense } from "../contexts/ExpenseContext";

export default function SearchExpense() {
	const [searchOption, setSearchOption] = useState("");
	const { dispatch } = useExpense();

	const handleChange = (e) => {
		setSearchOption(e.target.value);
	};
	const handleSearch = (e) => {
		e.preventDefault();
		// onSearch(searchOption);
		dispatch({ type: "SetSearchQuery", payload: searchOption });
	};
	return (
		<form className="d-flex ms-auto" role="search" onSubmit={handleSearch}>
			<input
				className="form-control me-2"
				name="search"
				placeholder="Search"
				aria-label="Search"
				value={searchOption}
				onChange={handleChange}
			/>
			<button className="btn btn-outline-success" type="submit">
				Search
			</button>
		</form>
	);
}
