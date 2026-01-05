import React, { useEffect, useRef } from 'react';
import './About.css';
import images from '../assets/images';
import WhyChoose from '../components/WhyChoose';
import StatsStrip from '../components/StatsStrip';
import CTA from '../components/CTA';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

export default function About() {
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
        <section className="about-page">
            <div className="about-inner">
                <div className="about-left" ref={leftRef}>
                    <div className="eyebrow">OUR STORY</div>
                    <h1>About Us</h1>
                    <p className="about-copy">At JDM, we are dedicated to providing high-quality, personalized financial services to businesses and individuals. With years of expertise in bookkeeping, tax services, payroll management, and financial consulting, our mission is to help our clients achieve financial clarity and success. Our team of experienced professionals is committed to delivering solutions tailored to your unique needs. Trust JDM to support your financial journey with precision, reliability, and integrity.</p>
                </div>
                <div className="about-right" ref={rightRef}>
                    {images['about'] ? <img src={images['about']} alt="About" /> : <div className="about-fallback" />}
                </div>
            </div>
            <WhyChoose />
            <StatsStrip />
            <CTA />
            <Testimonials />
            <Newsletter />
        </section>
    )
}
