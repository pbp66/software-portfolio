import React from "react";
import AboutMe from "../src/pages/aboutMe";
import Featured from "../src/pages/featured";
import Portfolio from "../src/pages/portfolio";
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
							component={AboutMe}
						/>
						<Route
							exact
							path="/featured"
							component={Featured}
						/>
						{/* <Portfolio /> */}
						{/* <ContactMe /> */}
						{/* <Vault /> */}
					</Routes>
					<Footer />
				</main>
			</BrowserRouter>
		</>
	);
}

export default App;
