import React from "react";
import {
	Heading,
	Summary,
	TechnicalSkills,
	Experience,
	EducationCertifications,
} from "../../components";

export default function ResumeDoc(props) {
	return (
		<>
			<div>
				<a href="/">Click Me to Download My Resume!</a>
			</div>
			<Summary></Summary>
			<TechnicalSkills></TechnicalSkills>
			<Experience></Experience>
			<EducationCertifications></EducationCertifications>
		</>
	);
}
