import React from "react";
import AboutMe from "../src/pages/aboutMe";
import Featured from "../src/pages/featured";
import Blog from "../src/pages/blog";
import Portfolio from "../src/pages/portfolio";
import Vault from "../src/pages/vault";
import ContactMe from "../src/pages/contactMe";
import Header from "../src/components/header.js";
import Footer from "../src/components/footer.js";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

function App() {
	return (
		<>
			<BrowserRouter>
				<main>
					<Header />
					<Routes>
						<Route
							path="/"
							element={<Featured />}
						/>
						<Route
							path="/aboutMe"
							element={<AboutMe />}
						/>
						<Route
							path="/blog"
							element={<Blog />}
						/>
						<Route
							path="/portfolio"
							element={<Portfolio />}
						/>
						<Route
							path="/vault"
							element={<Vault />}
						/>
						<Route
							path="/contactMe"
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
