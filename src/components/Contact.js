import React from 'react';
import './Contact.css';

export default function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="contact-card">
                <h2>Contact Us</h2>
                <ul className="contact-list">
                    <li><strong>Phone:</strong> (212) 555-0100</li>
                    <li><strong>Email:</strong> info@accutrustfinancial.com</li>
                    <li><strong>Address:</strong> 123 Financial District, Suite 100<br />New York, NY 10004</li>
                </ul>
            </div>
        </section>
    )
}
