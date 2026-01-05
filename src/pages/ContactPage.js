import React from 'react';
import './ContactPage.css';
import images from '../assets/images';

export default function ContactPage() {
    return (
        <section className="contact-page">
            <div className="contact-inner">
                <h2>Contact Us</h2>
                <p className="contact-sub">Have a question or need more information? Just drop us a line!</p>

                <div className="contact-grid">
                    <div className="contact-info">
                        <div className="info-block">
                            <h4>Phone number</h4>
                            <div className="info">204-869-0020</div>
                        </div>
                        <div className="info-block">
                            <h4>Email address</h4>
                            <div className="info">accounting@jdmtax.ca</div>
                        </div>
                        <div className="info-block">
                            <h4>Location 1</h4>
                            <div className="info">Unit 9a-1099 Kingsbury Ave, Winnipeg</div>
                        </div>
                    </div>

                    <div className="contact-form">
                        <h4>Send us a message</h4>
                        <form onSubmit={e => e.preventDefault()}>
                            <input placeholder="Your name" />
                            <input placeholder="Your email" />
                            <input placeholder="Subject" />
                            <textarea placeholder="Your message (optional)" rows="8" />
                            <button className="btn-submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
