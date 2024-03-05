import React from "react";
import {
	Summary,
	TechnicalSkills,
	Experience,
	EducationCertifications,
} from "../../components";

export default function ResumeDoc(props) {
	// TODO: Make a process that stores the resume in the public/assets/resume folder until a 3rd party data storage solution is used.
	return (
		<>
			<div>
				<a
					href="/assets/resume/PerryJames.pdf"
					download="PerryJames.pdf"
				>
					Click Here to Download My Resume!
				</a>
			</div>
			<Summary></Summary>
			<TechnicalSkills></TechnicalSkills>
			<Experience></Experience>
			<EducationCertifications></EducationCertifications>
		</>
	);
}
