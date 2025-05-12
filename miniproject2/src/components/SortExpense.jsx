import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { useExpense } from "../contexts/ExpenseContext";

export default function SortExpense() {
	const { dispatch } = useExpense();
	const handleSort = (option) => {
		// setSortOption(option);
		dispatch({ type: "SetSortOption", payload: option });
	};
	return (
		<div className="mb-3">
			<Dropdown as={ButtonGroup}>
				<Button variant="success">Sort By</Button>

				<Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

				<Dropdown.Menu>
					<Dropdown.Item onClick={() => handleSort("default")}>
						Default
					</Dropdown.Item>
					<Dropdown.Item onClick={() => handleSort("price-asc")}>
						Low to High
					</Dropdown.Item>
					<Dropdown.Item onClick={() => handleSort("price-desc")}>
						Hight to Low
					</Dropdown.Item>
					<Dropdown.Item onClick={() => handleSort("title-asc")}>
						A - Z
					</Dropdown.Item>
					<Dropdown.Item onClick={() => handleSort("title-desc")}>
						Z - A
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</div>
	);
}
