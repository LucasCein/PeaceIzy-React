import {  Nav, Navbar } from "react-bootstrap"
import { CartWidget } from "../CartWidget/CartWidget"
import { Link, NavLink} from "react-router-dom"
import './navbar.css'
export const NavBar = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
            <section >
                <Link to="/" className="marginNav">
                    <img src="https://i.ibb.co/YPc679g/logo.jpg" alt="" />
                </Link>
            </section>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" >
                <section className="mx-auto">
                    <Nav className="me-auto marginSections">
                        <NavLink to="/" className={({isActive})=> isActive ? "sectionActive" : "sectionStyle"} >Inicio</NavLink>
                        <NavLink to="/category/buzo" className={({isActive})=> isActive ? "sectionActive" : "sectionStyle"}>Buzos</NavLink>
                        <NavLink to="/category/pantalon" className={({isActive})=> isActive ? "sectionActive" : "sectionStyle"}>Pantalones</NavLink>
                        {/* <Nav.Link href="#pricing">Productos</Nav.Link>
                        <Nav.Link href="#Aboutus">Nosotros</Nav.Link>
                        <Nav.Link href="#contact">Contacto</Nav.Link>*/}
                    </Nav>
                </section>

                <Nav>
                    <Nav.Link eventKey={2} href="" className="marginCart">
                        <CartWidget />
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>

        </Navbar>

    )
}

