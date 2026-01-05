import React from 'react';
import './Loader.css';

export default function Loader() {
    return (
        <div className="site-loader" role="status" aria-label="Loading">
            <div className="loader-center">
                <div className="fancy-loader">
                    <div className="diamond" />
                    <div className="diamond" />
                    <div className="diamond" />
                </div>
                <div className="loader-brand">AccuTrust</div>
            </div>
        </div>
    )
}
