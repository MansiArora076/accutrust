import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import images from '../assets/images';


export default function Header() {
    const [open, setOpen] = useState(false);
    const [headerHeight, setHeaderHeight] = useState(null);
    const headerRef = useRef(null);
    const location = useLocation();

    // close mobile menu on navigation
    useEffect(() => { setOpen(false); }, [location.pathname]);

    // lock header height when menu opens to avoid content jump
    useEffect(() => {
        const headerEl = headerRef.current
        if (!headerEl) return
        if (open) {
            if (headerHeight) headerEl.style.minHeight = `${headerHeight}px`
        } else {
            headerEl.style.minHeight = ''
        }
        return () => { if (headerEl) headerEl.style.minHeight = '' }
    }, [open, headerHeight]);

    // prevent page shift when mobile menu opens by locking body scroll and compensating for scrollbar
    useEffect(() => {
        const body = document.body
        if (open) {
            const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth
            if (scrollBarWidth > 0) body.style.paddingRight = `${scrollBarWidth}px`
            body.style.overflow = 'hidden'
        } else {
            body.style.overflow = ''
            body.style.paddingRight = ''
        }
        return () => {
            body.style.overflow = ''
            body.style.paddingRight = ''
        }
    }, [open]);

    const handleToggle = () => {
        if (!open && headerRef.current) {
            setHeaderHeight(headerRef.current.offsetHeight)
        }
        setOpen(v => !v)
    }

    return (
        <header className="site-header" ref={headerRef}>
            <div className="header-inner">
                <div className="header-left">
                    <div className="logo">
                        {images['acculogo'] ? (
                            <img src={images['acculogo']} alt="AccuTrust" className="logo-img" />
                        ) : (
                            <div className="logo-text">AccuTrust</div>
                        )}
                    </div>
                </div>

                <button
                    className={`mobile-toggle ${open ? 'is-open' : ''}`}
                    aria-expanded={open}
                    aria-label="Toggle navigation"
                    onClick={handleToggle}
                >
                    <span />
                    <span />
                    <span />
                </button>

                <nav className={`header-center ${open ? 'open' : ''}`}>
                    <Link className="nav-link" to="/" onClick={() => setOpen(false)}>Home</Link>
                    <Link className="nav-link" to="/about" onClick={() => setOpen(false)}>About Us</Link>
                    <Link className="nav-link" to="/services" onClick={() => setOpen(false)}>Our Services</Link>
                    <Link className="nav-link" to="/contact" onClick={() => setOpen(false)}>Contact Us</Link>
                </nav>

                <div className="header-right">
                    <a className="call-btn" href="tel:+15551234567">Call Now</a>
                </div>
            </div>

            <div className={`mobile-backdrop ${open ? 'visible' : ''}`} onClick={() => setOpen(false)} />
        </header>
    );
}
