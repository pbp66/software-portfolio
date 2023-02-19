import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Navigation(props) {
	const navbarOptions = [
		"About Me",
		"Featured",
		"Portfolio",
		"Contact Me",
		"Vault",
	];
	return (
		<Navbar
			bg="dark"
			expand="lg"
		>
			<Container>
				<Navbar.Brand href="#aboutme">Test</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#link">Link</Nav.Link>
						<NavDropdown
							title="Dropdown"
							id="basic-nav-dropdown"
						>
							<NavDropdown.Item href="#action/3.1">
								Action
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">
								Another action
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">
								Something
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">
								Separated link
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
				<nav>
					<ul>
						{navbarOptions.map((option) => {
							return (
								<li
									key={option.replace(" ", "-").toLowerCase()}
								>
									{option}
								</li>
							);
						})}
					</ul>
				</nav>
			</Container>
		</Navbar>
	);
}
