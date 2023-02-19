import React from "react";

export default function Navbar(props) {
	const navbarOptions = [
		"About Me",
		"Featured",
		"Portfolio",
		"Contact Me",
		"Vault",
	];
	return (
		<>
			<nav>
				<ul>
					{navbarOptions.map((option) => {
						return (
							<li key={option.replace(" ", "-").toLowerCase()}>
								{option}
							</li>
						);
					})}
				</ul>
			</nav>
		</>
	);
}
