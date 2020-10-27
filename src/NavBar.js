import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

class NavBar extends React.Component {

    componentDidMount() {
        const nav = document.getElementById('main-nav')
        const topOfNav = nav.offsetTop
        window.addEventListener('scroll', ()=> {
            this.handleScroll(topOfNav, nav)
        })
    }

    handleScroll = (topOfNav, nav) => {
        if(window.scrollY >= topOfNav) {
            document.body.style.paddingTop = nav.offsetHeight + 'px'
            document.body.classList.add('fixed-nav')
          } else {
            document.body.classList.remove('fixed-nav')
            document.body.style.paddingTop = 0
          }
    }

    render() {
        return (
            <Navbar id="main-nav" expand="lg" >
                <Navbar.Brand className="home-logo" href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#about">My Profile</Nav.Link>
                        <Nav.Link href="#about">Skills</Nav.Link>
                        <Nav.Link href="#about">Resume</Nav.Link>
                        <Nav.Link href="#about">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavBar;