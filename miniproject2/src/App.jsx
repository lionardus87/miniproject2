import { Routes, Route } from "react-router-dom";
import ExpensesPage from "./pages/ExpensesPage";
import SummaryPage from "./pages/SummaryPage";
import AboutPage from "./pages/AboutPage";
import NavBar from "./components/NavBar";
import ChartPage from "./pages/ChartPage";

function AppRouter() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/" element={<ExpensesPage />} />
				<Route path="/summary" element={<SummaryPage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/chart" element={<ChartPage />} />
			</Routes>
		</>
	);
}

export default AppRouter;
