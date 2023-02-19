import React from "react";
import AboutMe from "../src/pages/aboutMe";
import Featured from "../src/pages/featured";
import Portfolio from "../src/pages/portfolio";
import Vault from "../src/pages/vault";
import ContactMe from "../src/pages/contactMe";
import Header from "../src/components/header.js";
import Footer from "../src/components/footer.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<>
			<BrowserRouter>
				<main>
					<Header />
					<Routes>
						{" "}
						<Route
							exact
							path="/"
							element={<AboutMe />}
						/>
						<Route
							exact
							path="/featured"
							element={<Featured />}
						/>
						<Route
							exact
							path="/portfolio"
							element={<Portfolio />}
						/>
						<Route
							exact
							path="/vault"
							element={<Vault />}
						/>
						<Route
							exact
							path="/contactme"
							element={<ContactMe />}
						/>
					</Routes>
					<Footer />
				</main>
			</BrowserRouter>
		</>
	);
}

export default App;
