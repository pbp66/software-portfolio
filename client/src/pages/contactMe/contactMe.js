import React from "react";
import Required from "../../components/styles";

export default function ContactForm(props) {
	return (
		<>
			<form
				// method="post" // Need to determine graphql routing
				name="contact-me"
				id="contact-me-form"
			>
				<div
					class="form-div-flex"
					id="form-name"
				>
					<label class="form-item-flex form-label">
						Name (<Required>required</Required>)
					</label>{" "}
					<input
						class="form-item-flex form-input"
						type="text"
						name="name"
						id="contact-name"
					/>
				</div>
				<div
					class="form-div-flex"
					id="form-email"
				>
					<label class="form-item-flex form-label">
						Email (<Required>required</Required>)
					</label>{" "}
					<input
						class="form-item-flex form-input"
						type="email"
						name="email"
						id="contact-email"
					/>
				</div>
				<div
					class="form-div-flex"
					id="form-phone"
				>
					<label class="form-item-flex form-label">
						Phone Number
					</label>{" "}
					<input
						class="form-item-flex form-input"
						type="tel"
						name="phone"
						id="contact-phone"
					/>
				</div>
				<div
					class="form-div-flex"
					id="form-business"
				>
					<label class="form-item-flex form-label">
						Business/Organization{" "}
					</label>{" "}
					<input
						class="form-item-flex form-input"
						type="text"
						name="business"
						id="contact-business"
					/>
				</div>
				<div
					class="form-div-flex"
					id="form-reason"
				>
					<label class="form-item-flex form-label">
						Reason for Contact (<Required>required</Required>)
					</label>{" "}
					<select
						class="form-item-flex form-input"
						name="reason"
						id="contact-reason"
					>
						<option value="general">General Inquiry</option>
						<option value="career">Career Opportunity</option>
						{/* <option value="business">Business Inquiry</option> */}
						{/* <option value="personal">Personal Inquiry</option>
				<option value="project">Project Inquiry</option> */}
						<option value="other">Other</option>
					</select>
				</div>
				<div id="form-submit">
					<input
						type="submit"
						value="Submit"
					/>
				</div>
			</form>
		</>
	);
}
