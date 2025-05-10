import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/ExpenseTrackerLogo.jpg";

function AboutPage() {
	return (
		<>
			<header className="bg-light py-5 text-center">
				<div className="container d-flex">
					<div className="col-6 my-auto me-3">
						<h1 className="display-3">Manage Easily Your Finances</h1>
						<p className="lead">
							Easily manage, sort, and track your expenses. Mark bills as paid, filter
							by category, and see where your money goes.
						</p>
						<Button as={Link} to="/" className="btn btn-primary btn-lg mt-3">
							Start Tracking
						</Button>
					</div>
					<div className="col-6 border bg-white">
						<img src={logo} />
					</div>
				</div>
			</header>

			<section className="py-5 bg-white">
				<div className="container">
					<div className="row text-center">
						<div className="card col-md-4 py-5 bg-light">
							<h3>💸 Add & Edit Expenses</h3>
							<p>
								Add new expenses, edit details, and keep everything organized with
								categories.
							</p>
						</div>
						<div className="card col-md-4 py-5 bg-light">
							<h3>✅ Mark as Paid</h3>
							<p>
								Track paid and unpaid expenses separately. One click to mark them as
								settled.
							</p>
						</div>
						<div className="card col-md-4 py-5 bg-light">
							<h3>🔍 Search & Filter</h3>
							<p>
								Quickly find expenses using search, sort by price or title, or filter by
								category.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-light py-5">
				<div className="container text-center">
					<h2 className="mb-4">Why Use This App?</h2>
					<p className="lead">
						This app is perfect for freelancers, students, or anyone who wants a
						simple and fast way to manage expenses without spreadsheets or complex
						tools.
					</p>
					<p>
						Built with a clean interface and real-time updates, it's both powerful and
						easy to use.
					</p>
				</div>
			</section>
		</>
	);
}

export default AboutPage;
