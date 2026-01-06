import React from 'react';
import './CTA.css';
import images from '../assets/images';

export default function CTA() {
    return (
        <section className="cta-band">
            <div className="cta-inner">
                <div className="cta-left">
                    <h1>Ready to take control of <br />your finances?</h1>
                    <p>Contact AccuTrust Financial today for a free consultation and discover how we can<br /> streamline your business operations with our comprehensive financial <br />solutions tailored to your needs.</p>
                </div>
                <div className="cta-right">
                    <div className="cta-photo">
                        {images['ready'] ? <img src={images['ready']} alt="cta" /> : null}
                    </div>
                </div>
            </div>
        </section>
    )
}
