import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
// import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { ExpenseProvider } from "./contexts/ExpenseContext.jsx";

createRoot(document.getElementById("root")).render(
	<ExpenseProvider>
		<Router>
			<StrictMode>
				<App />
			</StrictMode>
		</Router>
	</ExpenseProvider>
);
