export default function ExpenseCard({ expense }) {
	return (
		<div class="col-12 col-sm-6 col-md-4 col-lg-3">
			<div class="card h-100">
				<div class="card-body d-flex flex-column">
					<h5 class="card-title mb-1" id="title">
						{expense.title}
					</h5>
					<p class="mb-1">
						<strong>ID:</strong> <span id="id">1</span>
					</p>
					<p class="mb-1">
						<strong>Date:</strong> <span id="date">{expense.date}</span>
					</p>
					<p class="mb-1">
						<strong>Description:</strong> <span id="desc">{expense.desc}</span>
					</p>
					<p class="mb-1">
						<strong>Category:</strong> <span id="category">{expense.category}</span>
					</p>
					<p class="mb-1">
						<strong>Amount:</strong> $<span id="amount">{expense.amount}</span>
					</p>
					{/* <div class="d-flex justify-content-end gap-2 mt-auto">
							<button class="btn btn-sm btn-outline-primary" id="editExpense">
								Edit
							</button>
							<button class="btn btn-sm btn-outline-danger" id="delExpense">
								Delete
							</button>
						</div> */}
				</div>
			</div>
		</div>
	);
}
