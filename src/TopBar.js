import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./TopBar.css";
import { withRouter } from "react-router-dom";

function TopBar({location}) {
    const {pathname} = location;

    return (
        <Navbar expand="lg" variant="dark" className="navbar">
            <Navbar.Brand href="#home" className="navtitle">Edit Me</Navbar.Brand>
            <Navbar.Toggle aria-controls = "basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link className="home" href="/" active={pathname === "/"}>
                        Home
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default withRouter(TopBar);
