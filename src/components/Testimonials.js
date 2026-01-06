import React, { useEffect, useRef } from 'react';
import './Testimonials.css';
import images from '../assets/images';

// Placeholder client images - using available images as placeholders
const clientImages = [
    { name: 'Laura Simms', image: images['1'] || images['about'] },
    { name: 'Albert Lamont', image: images['2'] || images['about'] },
    { name: 'Sarah Johnson', image: images['3'] || images['about'] },
    { name: 'Michael Chen', image: images['4'] || images['about'] },
    { name: 'Emily Davis', image: images['about'] || images['1'] }
];

function QuoteCard({ quote, name, role }) {
    return (
        <div className="quote-card">
            <p className="quote">{quote}</p>
            <div className="quote-meta">
                <div className="meta-text">
                    <div className="meta-name">{name}</div>
                    <div className="meta-role">{role}</div>
                </div>
            </div>
        </div>
    )
}

export default function Testimonials() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const sectionEl = sectionRef.current;
        if (!sectionEl) return;

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

        observer.observe(sectionEl);

        return () => {
            if (sectionEl) observer.unobserve(sectionEl);
        };
    }, []);

    return (
        <section className="testimonials" ref={sectionRef}>
            <div className="test-inner">
                <h3>Hear What Our Clients Are Saying</h3>
                <p className="lead">At AccuTrust Financial, we take pride in delivering exceptional financial services that make a difference for our clients. Here's what some of them have to say about their experience with us</p>

                <div className="testimonials-clients-ring">
                    {clientImages.map((client, index) => (
                        <div
                            key={index}
                            className="client-avatar-ring"
                            style={{
                                '--index': index,
                                zIndex: clientImages.length - index
                            }}
                        >
                            <img src={client.image} alt={client.name} />
                        </div>
                    ))}
                    <div className="ring-accent" />
                </div>

                <div className="quote-row">
                    <QuoteCard quote={`"Incredible Support" AccuTrust Financial has been an incredible asset to our company. Their attention to detail and expertise in bookkeeping and financial reporting has saved us time and money.`} name="Laura Simms" role="Entrepreneur" />
                    <QuoteCard quote={`"Excellent Services" Working with AccuTrust Financial has completely transformed the way I handle my finances. Their payroll and tax services are seamless.`} name="Albert Lamont" role="Business Owner" />
                </div>
            </div>
        </section>
    )
}
