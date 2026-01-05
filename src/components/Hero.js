import React, { useEffect, useRef } from 'react';
import './Hero.css';
import images from '../assets/images';

export default function Hero() {
    const heroRef = useRef(null);
    const leftRef = useRef(null);
    const rightRef = useRef(null);

    useEffect(() => {
        const leftEl = leftRef.current;
        const rightEl = rightRef.current;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (leftEl) observer.observe(leftEl);
        if (rightEl) observer.observe(rightEl);

        return () => {
            if (leftEl) observer.unobserve(leftEl);
            if (rightEl) observer.unobserve(rightEl);
        };
    }, []);

    return (
        <section className="hero" id="home" ref={heroRef}>
            <div className="hero-inner">
                <div className="hero-left" ref={leftRef}>
                    <h1>Effortless Bookkeeping Services</h1>
                    <p className="lead"><span className="check">✓</span> Accurate, reliable, and efficient financial records for your peace of mind.</p>
                    <h2 className="subhead">Comprehensive Tax Solutions</h2>
                    <p className="muted">Simplifying tax preparation and filing for individuals and corporations alike.</p>
                </div>

                <div className="hero-right" ref={rightRef} aria-hidden>
                    <div className="card large">{images['2'] ? <img src={images['2']} alt="hero" /> : null}</div>
                    <div className="card med">{images['1'] ? <img src={images['1']} alt="hero" /> : null}</div>
                    <div className="card small">{images['3'] ? <img src={images['3']} alt="hero" /> : null}</div>
                    <div className="decor-dot" />
                </div>
                <div className="decor-dot" />
            </div>

        </section >
    );
}
