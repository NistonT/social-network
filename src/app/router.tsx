import { Route, Routes } from "react-router";
import { App } from "../pages/App";

// const AuthorIdPage = lazy(() => import("@/pages/AuthorIdPage"));

export const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<App />} />
		</Routes>
	);
};
