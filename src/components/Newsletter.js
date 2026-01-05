import React from 'react';
import './Newsletter.css';

export default function Newsletter() {
    return (
        <section className="newsletter">
            <div className="news-inner">
                <div className="news-left">
                    <div className="bell" />
                    <div>
                        <h4>Subscribe to our newsletter</h4>
                        <p className="muted">We'll keep you updated with the best new jobs.</p>
                    </div>
                </div>
                <div className="news-right">
                    <form className="news-form" onSubmit={e => e.preventDefault()}>
                        <input placeholder="Your email address" aria-label="email" />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
