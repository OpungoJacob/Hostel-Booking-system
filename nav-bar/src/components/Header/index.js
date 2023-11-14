import React from "react";
import logo from "../../assets/logo/logo.png";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, InputGroup,FormControl,Button}from 'react-bootstrap';


export default function Header(){
    return(
        <div className="nav-contents">
            <div className="navbar">
                <img src={logo} className="logo" />
                <h3 className="logo-text">Hostel Booking system</h3>
                <span className="links">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Rooms</a>
                    <a href="#">Contact</a>
                </span>
                
        </div>
        <div className="search">
                    <Container>
                        <InputGroup size="sm" className="mb-3" >
                            <FormControl 
                                size="sm"
                                placeholder="Search for hostel"
                                className="text-field"
                            />
                            <Button>Search</Button>
                        </InputGroup>
                    </Container>
                </div>
        </div>
    )
} 
