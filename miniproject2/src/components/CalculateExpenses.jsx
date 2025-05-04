import React from "react";

export function CalculateExpenses(expenses) {
	const unpaid = expenses.filter((exp) => !exp.paid);
	const paid = expenses.filter((exp) => exp.paid);
	const totalPaid = paid.reduce((sum, exp) => sum + parseFloat(exp.amount), 0);
	const totalUnpaid = unpaid.reduce(
		(sum, exp) => sum + parseFloat(exp.amount),
		0
	);
	return { paid, unpaid, totalPaid, totalUnpaid };
}
