import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarLink from "./navbarLink.js";

export default function Navigation(props) {
	return (
		<Navbar
			bg="dark"
			variant="dark"
			expand="lg"
		>
			<Container>
				<div>
					<h1 className="text-light">James Perry</h1>
				</div>
				<div>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="navbar-nav">
						<Nav className="me-auto">
							<NavbarLink to="/">About Me</NavbarLink>
							<NavbarLink to="/featured">Featured</NavbarLink>
							<NavbarLink to="/portfolio">Portfolio</NavbarLink>
							<NavbarLink to="/contactme">Contact Me</NavbarLink>
							<NavbarLink to="/vault">Vault</NavbarLink>
						</Nav>
					</Navbar.Collapse>
				</div>
			</Container>
		</Navbar>
	);
}
