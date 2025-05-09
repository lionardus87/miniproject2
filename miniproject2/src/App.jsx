import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SummaryPage from "./pages/SummaryPage";
import NavBar from "./components/NavBar";

function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/summary" element={<SummaryPage />} />
			</Routes>
		</>
	);
}

export default App;
