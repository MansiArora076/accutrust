import React from 'react';
import './Contact.css';

export default function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="contact-card">
                <h2>Contact Us</h2>
                <ul className="contact-list">
                    <li><strong>Phone:</strong> (555) 123-4567</li>
                    <li><strong>Email:</strong> info@jdmtax.example</li>
                    <li><strong>Address:</strong> 123 Main St, Your City</li>
                </ul>
            </div>
        </section>
    )
}
