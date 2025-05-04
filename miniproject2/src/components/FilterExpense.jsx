import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";

export default function FilterExpense({ setFilterOption }) {
	const handleFilter = (option) => {
		setFilterOption(option);
	};
	return (
		<div className="mb-3">
			<Dropdown as={ButtonGroup}>
				<Button variant="success">Category</Button>

				<Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

				<Dropdown.Menu>
					<Dropdown.Item onClick={() => handleFilter("utilities")}>
						Utilities
					</Dropdown.Item>
					<Dropdown.Item onClick={() => handleFilter("entertainment")}>
						Entertainment
					</Dropdown.Item>
					<Dropdown.Item onClick={() => handleFilter("groceries")}>
						Groceries
					</Dropdown.Item>

					<Dropdown.Divider />
					<Dropdown.Item onClick={() => handleFilter("allCategories")}>
						All Categories
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</div>
	);
}
