import React, { useState } from 'react';

export const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav id="menu" className="navbar navbar-expand-lg fixed-top bg-body-tertiary">
            <div className="container">

                <a className="navbar-brand" href="#">
                    React Landing Page
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleNavbar}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#features" className="nav-link">
                                Features
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-link">
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#services" className="nav-link">
                                Services
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#portfolio" className="nav-link">
                                Portfolio
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#testimonials" className="nav-link">
                                Testimonials
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#team" className="nav-link">
                                Team
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
