import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarLink = styled(Link)`
	text-decoration: none;

	&:focus,
	&:hover,
	&:visited,
	&:link,
	&:active {
		text-decoration: none;
	}

	display: block;
	padding-top: var(--bs-nav-link-padding-y);
	padding-bottom: var(--bs-nav-link-padding-y);
	padding-left: var(--bs-nav-link-padding-x);
	padding-right: var(--bs-nav-link-padding-x);

	color: var(--bs-nav-link-color);
	font-size: var(--bs-nav-link-font-size);
	font-weight: var(--bs-nav-link-font-weight);

	&:hover {
		color: var(--bs-nav-link-hover-color);
	}

	&:disabled {
		color: var(--bs-nav-link-disabled-color);
	}

	transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out;

	@media (min-width: 992px) {
		padding-right: var(--bs-navbar-nav-link-padding-x);
    	padding-left: var(--bs-navbar-nav-link-padding-x);
	}
}
`;

export default (props) => <NavbarLink {...props} />;
