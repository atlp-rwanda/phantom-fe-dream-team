import React, { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { publicRoutes, privateRoutes } from "./routes";
import Dashboard from "./layout";

const token = localStorage.getItem("token");
const App = () => {
	const [isLoggedIn] = useState(token);

	return (
		<>
			{!isLoggedIn ? (
				<div>
					<Navbar />
					<BrowserRouter>
						<Routes>
							{publicRoutes.map((route) => (
								<Route
									key={route.id}
									exact={route.exact}
									path={route.path}
									element={<route.element />}
								/>
							))}
						</Routes>
					</BrowserRouter>
				</div>
			) : (
				<Dashboard>
					<BrowserRouter>
						<Routes>
							{privateRoutes.map((route) => (
								<Route
									key={route.id}
									exact={route.exact}
									path={route.path}
									element={<route.element />}
								/>
							))}
						</Routes>
					</BrowserRouter>
				</Dashboard>
			)}
		</>
	);
};

export default App;
