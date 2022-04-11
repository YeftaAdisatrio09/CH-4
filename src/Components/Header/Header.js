import React from "react";

import SearchBar from "../SearchBar/SearchBar";

import test from "./header.module.css";

const Header = () => {
    return (
        <div className={test.nav}>
            <ul>
                <li>
                    <a href="#home">Our Service</a>
                </li>
                <li>
                    <a href="#news">Why Us</a>
                </li>
                <li>
                    <a href="#contact">Testimonial</a>
                </li>
                <li>
                    <a href="#about">FAQ</a>
                </li>
                <li>
                    <button>Registrer</button>
                </li>
            </ul>
        </div>
    );
};

export default Header;
