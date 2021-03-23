import React, { Component } from 'react';
import {Link} from "react-router-dom";
import logo from "../logo.svg";
import { ButtonContainer } from "./Button";
import styled from 'styled-components';
import { AiOutlineShoppingCart } from "react-icons/ai";



class Navbar extends Component {
    render() {
        return (
            <NavWraber className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
                <Link to="/" className="nav-item" > 
                <img  src={logo} />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                         products
                        </Link>
                    </li>
                </ul>
               <Link to="/cart" className="ml-auto text-white">
               <ButtonContainer  className="text-white">
                  <span className="mr-2 icon">
                  <AiOutlineShoppingCart />
                  </span>
                   my cart
               </ButtonContainer>
               </Link>
            </NavWraber>
        );
    }
}


export default Navbar;

const NavWraber = styled.nav`
background:var(--mainColor) !important;
.nav-link{
    color:var(--white) !important;
    font-size:1.2rem;
    text-transform:capitalize
}
`
