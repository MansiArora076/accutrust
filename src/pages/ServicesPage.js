import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesPage.css';
import images from '../assets/images';
import Newsletter from '../components/Newsletter';

const servicesData = [
    { 
        title: 'Bookkeeping Services', 
        text: 'Stay on top of your financial transactions with our reliable bookkeeping services. We handle daily transactions, reconciliation, and preparing accurate financial statements.', 
        icon: 'book',
        color: '#0fa07a'
    },
    { 
        title: 'Tax Services', 
        text: 'Simplify your tax season with our expert preparation and filing services for both personal and corporate clients.', 
        icon: 'tax',
        color: '#e6b64a'
    },
    { 
        title: 'Payroll Services', 
        text: 'Let us take care of your payroll, ensuring timely and accurate processing while keeping you compliant.', 
        icon: 'payroll',
        color: '#083241'
    },
    { 
        title: 'Financial Reporting', 
        text: 'We offer in-depth financial reporting services, providing you with clear statements and insights to run your business.', 
        icon: 'financial',
        color: '#0fa07a'
    },
    { 
        title: 'Consulting Services', 
        text: 'Unlock your business potential with our consulting services covering strategy, tax planning, and process improvements.', 
        icon: 'consult',
        color: '#e6b64a'
    },
    { 
        title: 'Audit and Assurance', 
        text: 'Our audit and assurance services give you confidence in your financials and help ensure regulatory compliance.', 
        icon: 'audit',
        color: '#083241'
    }
];

function ServiceCard({ service, index }) {
    return (
        <div className="service-card" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="service-card-icon" style={{ backgroundColor: service.color }}>
                {images[service.icon] ? (
                    <img src={images[service.icon]} alt={service.title} />
                ) : (
                    <div className="service-icon-fallback" />
                )}
            </div>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <Link to="/contact" className="service-card-link">Learn More →</Link>
        </div>
    );
}

export default function ServicesPage() {
    return (
        <section className="services-page">
            <div className="services-page-content">
                <div className="services-page-header">
                    <div className="eyebrow">OUR SERVICES</div>
                    <h1>Comprehensive Financial Solutions</h1>
                    <p className="services-subtitle">Expert services tailored to your business needs</p>
                </div>
                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <ServiceCard key={service.title} service={service} index={index} />
                    ))}
                </div>
            </div>

            <Newsletter />
        </section>
    );
}

