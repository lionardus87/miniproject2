import React, { Children } from "react";
import { Modal, Button } from "react-bootstrap";

export default function ExpenseModal({
	show,
	handleClose,
	children,
	onSubmit,
	title,
	submitLabel,
}) {
	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>{title}</Modal.Title>
			</Modal.Header>

			<Modal.Body>{children}</Modal.Body>

			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Close
				</Button>
				<button className="btn btn-primary" onClick={onSubmit}>
					{submitLabel}
				</button>
			</Modal.Footer>
		</Modal>
	);
}
