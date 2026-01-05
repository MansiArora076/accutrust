import React from 'react';
import './Services.css';
import images from '../assets/images';

const services = [
    { title: 'Bookkeeping Services', highlight: 'keeping', text: 'Stay on top of your financial transactions with our reliable bookkeeping services. We handle daily transactions, reconciliation, and preparing accurate financial statements.', img: 'book' },
    { title: 'Tax Services', highlight: 'Tax', text: 'Simplify your tax season with our expert preparation and filing services for both personal and corporate clients.', img: 'tax' },
    { title: 'Payroll Services', highlight: 'Payroll', text: 'Let us take care of your payroll, ensuring timely and accurate processing while keeping you compliant.', img: 'payroll' },
    { title: 'Financial Reporting', highlight: 'Reporting', text: 'We offer in-depth financial reporting services, providing you with clear statements and insights to run your business.', img: 'financial' },
    { title: 'Consulting Services', highlight: 'Consulting', text: 'Unlock your business potential with our consulting services covering strategy, tax planning, and process improvements.', img: 'consult' },
    { title: 'Audit and Assurance', highlight: 'Audit', text: 'Our audit and assurance services give you confidence in your financials and help ensure regulatory compliance.', img: 'audit' }
];

function ServiceRow({ service, index }) {
    // flip alternation so first row shows image on left (matches reference)
    const isEven = index % 2 === 1;
    return (
        <div className={`service-row ${isEven ? 'row-right-img' : 'row-left-img'}`}>



            <div className="service-media">
                <div className={`blob ${isEven ? 'blob-right' : 'blob-left'}`} />
                <div className={`dot-grid ${isEven ? 'dots-right' : 'dots-left'}`} />
                <div className={`media-box ${service.img} ${isEven ? 'tilt-right' : 'tilt-left'}`}>
                    {images[service.img] ? (
                        <img className="media-img" src={images[service.img]} alt={service.title} />
                    ) : null}
                </div>
                <div className="accent-ring" />
                <div className={`cube ${isEven ? 'cube-right' : 'cube-left'}`} />
            </div>
            <div className="service-content">
                <h3 className="service-title">{
                    (() => {
                        const { title, highlight } = service;
                        if (!highlight) return title;
                        const idx = title.indexOf(highlight);
                        if (idx === -1) return title;
                        const before = title.slice(0, idx);
                        const match = title.slice(idx, idx + highlight.length);
                        const after = title.slice(idx + highlight.length);
                        return (
                            <>
                                {before}
                                <span className="accent">{match}</span>
                                {after}
                            </>
                        )
                    })()
                }</h3>
                <p className="service-desc">{service.text}</p>
            </div>
        </div>
    )
}

export default function Services() {
    return (
        <section className="services" id="services">
            <div className="services-inner">
                {services.map((s, i) => <ServiceRow key={s.title} service={s} index={i} />)}
            </div>
        </section>
    )
}
