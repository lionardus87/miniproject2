import { useExpense } from "../contexts/ExpenseContext";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

function ChartPage() {
	const { expenses } = useExpense();

	const data = {
		labels: expenses.map((e) => e.title),
		datasets: [
			{
				label: "Expense Amount",
				data: expenses.map((e) => parseFloat(e.amount)),
				backgroundColor: expenses.map((e) => {
					const colour = {
						Utilities: "hsla(84, 83.50%, 45.30%, 0.98)",
						Groceries: "rgba(83, 62, 244, 0.831)",
						Entertainment: "rgb(236, 203, 40)",
					};
					return colour[e.category] || "#888";
				}),
			},
		],
	};

	const options = {
		responsive: true,
		plugins: {
			legend: { position: "top" },
			title: { display: true, text: "Expense Chart" },
		},
	};

	return (
		<div className="container mt-4">
			<h2 className="text-center mb-4">Expense Charts</h2>
			<Bar options={options} data={data} />
		</div>
	);
}
export default ChartPage;
