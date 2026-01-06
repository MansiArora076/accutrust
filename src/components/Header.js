import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPhone, FaTimes } from 'react-icons/fa';
import { HiMenuAlt3 } from 'react-icons/hi';
import './Header.css';
import images from '../assets/images';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const headerRef = useRef(null);
    const location = useLocation();

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    // Toggle body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('mobile-menu-open');
        } else {
            document.body.classList.remove('mobile-menu-open');
        }

        // Cleanup function
        return () => {
            document.body.classList.remove('mobile-menu-open');
        };
    }, [isMenuOpen]);

    // Close menu when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (headerRef.current && !headerRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        }

        // Add event listener when menu is open
        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        // Cleanup
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    // Toggle mobile menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Handle phone click
    const handlePhoneClick = (e) => {
        e.preventDefault();
        window.location.href = 'tel:+1234567890';
    };

    return (
        <>
            <header className={`site-header ${isMenuOpen ? 'mobile-menu-open' : ''}`} ref={headerRef}>
                <div className="header-inner">
                    <div className="header-left">
                        <Link to="/" className="logo" onClick={() => setIsMenuOpen(false)}>
                            {/* {images['acculogo'] ? (
                                <img src={images['acculogo']} alt="AccuTrust" className="logo-img" />
                            ) : (
                                <span className="logo-text">AccuTrust</span>
                            )} */}

                            <h1 className="logo-heading">AccuTrust</h1>

                        </Link>
                    </div>

                    <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
                        <div className="nav-links">
                            <Link
                                to="/"
                                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                to="/about"
                                className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About Us
                            </Link>
                            <Link
                                to="/services"
                                className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Services
                            </Link>
                            <Link
                                to="/contact"
                                className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </Link>
                        </div>

                        <div className="header-cta">
                            <a
                                href="tel:+1234567890"
                                className="call-btn"
                                onClick={handlePhoneClick}
                            >
                                <FaPhone className="call-icon" /> Call Us
                            </a>
                        </div>
                    </nav>

                    <button
                        className="mobile-toggle"
                        onClick={toggleMenu}
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? (
                            <FaTimes className="menu-icon" />
                        ) : (
                            <HiMenuAlt3 className="menu-icon" />
                        )}
                    </button>
                </div>
            </header>

            {/* Mobile call button - only visible on mobile */}
            <a
                href="tel:+1234567890"
                className="mobile-call-btn"
                onClick={handlePhoneClick}
                aria-label="Call us"
            >
                <FaPhone className="call-icon" />
            </a>
        </>
    );
}