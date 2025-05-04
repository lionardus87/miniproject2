import React, { useState } from "react";

export default function SearchExpense({ onSearch }) {
	const [searchOption, setSearchOption] = useState("");
	const handleChange = (e) => {
		setSearchOption(e.target.value);
	};
	const handleSearch = (e) => {
		e.preventDefault();
		onSearch(searchOption);
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
