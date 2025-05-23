import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { ExpenseProvider } from "./contexts/ExpenseContext.jsx";
import AppRouter from "./App.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ExpenseProvider>
			<BrowserRouter>
				<AppRouter />
			</BrowserRouter>
		</ExpenseProvider>
	</StrictMode>
);
