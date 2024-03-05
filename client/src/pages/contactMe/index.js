import React from "react";
import ContactForm from "./contactMe";

export default function ContactMe(props) {
	return (
		<>
			<h4 id="contact-me-intro">
				{"Thank you for your interest in contacting me. "}
				<br />
				{
					"Please fill out the form below and I will get back to you as soon as possible. "
				}
			</h4>

			<ContactForm></ContactForm>
		</>
	);
}
