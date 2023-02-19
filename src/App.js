import React from "react";
import AboutMe from "../src/pages/aboutMe/index.js";
import Header from "../src/components/header.js";
import Footer from "../src/components/footer.js";

function App() {
	return (
		<>
			<main>
				<Header />
				<AboutMe />
				<Footer />
			</main>
		</>
	);
}

export default App;
