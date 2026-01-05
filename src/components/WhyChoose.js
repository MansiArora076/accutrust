import React, { useState, useEffect, useRef } from 'react';
import './WhyChoose.css';
import images from '../assets/images';

function SmallCard({ title, text, icon, index }) {
    const [isClicked, setIsClicked] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const cardEl = cardRef.current;
        if (!cardEl) return;

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

        observer.observe(cardEl);

        return () => {
            if (cardEl) observer.unobserve(cardEl);
        };
    }, []);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <div 
            ref={cardRef}
            className={`why-card ${isClicked ? 'clicked' : ''}`}
            onClick={handleClick}
            onMouseLeave={() => setIsClicked(false)}
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            <div className="why-icon">
                {icon && (
                    // try to render provided image icon, otherwise fallback to simple svg
                    icon.startsWith('img-') ? (
                        <img src={require(`../assets/images/${icon}.jpg`)} alt="icon" />
                    ) : (
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L15 8H9L12 2Z" fill="#f6bf2f" />
                            <circle cx="12" cy="15" r="5" fill="#eaeaea" />
                        </svg>
                    )
                )}
            </div>
            <h4>{title}</h4>
            <p>{text}</p>
            <a className="read-more" href="#" onClick={(e) => e.preventDefault()}>read more</a>
        </div>
    )
}

export default function WhyChoose() {
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
        <section className="why-choose" ref={sectionRef}>
            <div className="why-inner">
                <h3 className="why-title">Why Choose Us?</h3>
                <div className="why-cards">
                    <SmallCard icon="icon-1" title="Expertise You Can Trust" text="With years of experience in bookkeeping, tax, payroll and financial consulting, JDM provides you financial expertise tailored to your unique needs." index={0} />
                    <SmallCard icon="icon-2" title="Tailored Solutions" text="We understand that every business is different. Services are designed to meet the specific goals and challenges of your business." index={1} />
                    <SmallCard icon="icon-3" title="Accuracy & Compliance" text="We ensure your financial records are accurate and comply with legal and regulatory standards, giving you peace of mind." index={2} />
                </div>

                <div className="why-feature">
                    <div className="why-text">
                        <h4>Focus on growing your business while we handle your accounting needs with precision</h4>
                        <p>At JDM, we provide daily, monthly, and annual financial reports along with detailed expense summaries, empowering you to effectively manage your finances.</p>
                    </div>
                    <div className="why-media">
                        <div className="circle-photo">
                            {images['focus'] ? <img src={images['focus']} alt="team" /> : null}
                        </div>
                        <div className="dot-accent" />
                    </div>
                </div>
            </div>
        </section>
    )
}
