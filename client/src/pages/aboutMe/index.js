import React from "react";
import Education from "./education";
import Career from "./career";
import Personal from "./personal";

export default function AboutMe(props) {
	return (
		<>
			<h3>Introduction:</h3>
			<h4>Education</h4>
			<Education />
			<h4>Career</h4>
			<Career />
			<h4>Personal</h4>
			<Personal />
		</>
	);
}
