import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
	return (
		<Navbar bg="light" expand="lg" className="mb-4">
			<Container>
				<Navbar.Brand as={Link} to="/">
					Expense Tracker
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link as={Link} to="/">
							Home
						</Nav.Link>
						<Nav.Link as={Link} to="/summary">
							Summary
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
