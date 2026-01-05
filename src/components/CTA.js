import React from 'react';
import './CTA.css';
import images from '../assets/images';

export default function CTA() {
    return (
        <section className="cta-band">
            <div className="cta-inner">
                <div className="cta-left">
                    <h1>Ready to take control of <br />your finances?</h1>
                    <p>Contact JDM today for a free consultation and see how we can<br /> streamline your business operations with our tailored financial <br />solutions.</p>
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
