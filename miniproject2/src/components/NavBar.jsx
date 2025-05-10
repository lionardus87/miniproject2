import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/ExpenseTrackerLogo.jpg";

function NavBar() {
	return (
		<Navbar className="navbar navbar-expand-lg navbar-dark bg-dark">
			<Container>
				<Navbar.Brand
					as={Link}
					to="/about"
					className="d-flex align-items-center gap-2"
				>
					<img
						src={logo}
						alt="Expense Tracker Logo"
						className="rounded-circle"
						height="40"
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link as={Link} to="/">
							Expenses
						</Nav.Link>
						<Nav.Link as={Link} to="/summary">
							Summary
						</Nav.Link>
						<Nav.Link as={Link} to="/chart">
							Charts
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
