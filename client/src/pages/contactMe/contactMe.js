import React from "react";
import styled from "styled-components";

const Required = styled.span`
	color: red;
`;

export default function ContactForm(props) {
	return (
		<>
			<label>
				Name (<Required>required</Required>):
			</label>{" "}
			<input
				type="text"
				name="name"
				id="contact-name"
			/>
			<br />
			<label>
				Email (<Required>required</Required>):
			</label>{" "}
			<input
				type="email"
				name="email"
				id="contact-email"
			/>
			<br />
			<label>Phone Number: </label>{" "}
			<input
				type="tel"
				name="phone"
				id="contact-phone"
			/>
			<br />
			<label>Business/Organization: </label>{" "}
			<input
				type="text"
				name="business"
				id="contact-business"
			/>
			<br />
			<label>
				Reason for Contact (<Required>required</Required>):
			</label>{" "}
			<select
				name="reason"
				id="contat-reason"
			>
				<option value="general">General Inquiry</option>
				<option value="career">Career Opportunity</option>
				<option value="business">Business Inquiry</option>
				<option value="personal">Personal Inquiry</option>
				<option value="project">Project Inquiry</option>
				<option value="other">Other</option>
			</select>
			<br />
		</>
	);
}
