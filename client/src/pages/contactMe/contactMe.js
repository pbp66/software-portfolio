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
			/>
			<br />
			<label>
				Email (<Required>required</Required>):
			</label>{" "}
			<input
				type="email"
				name="email"
			/>
			<br />
			<label>Phone Number: </label>{" "}
			<input
				type="tel"
				name="phone"
			/>
			<br />
			<label>Business/Organization: </label>{" "}
			<input
				type="text"
				name="business"
			/>
			<br />
			<label>
				Reason for Contact (<Required>required</Required>):
			</label>{" "}
			<input
				type="dropdown"
				name="reason"
			/>
			<br />
		</>
	);
}
