import React, { useRef, useEffect } from 'react'
import './StatsStrip.css'

function animateValue(node, start, end, duration) {
    let startTime = null
    const step = (timestamp) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)
        const value = Math.floor(progress * (end - start) + start)
        node.textContent = value + (end >= 10 ? '+' : '')
        if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
}

export default function StatsStrip() {
    const items = [
        { label: 'Experience', value: 10 },
        { label: 'Employees', value: 150 },
        { label: 'Projects', value: 200 }
    ]

    const wrapperRef = useRef(null)

    useEffect(() => {
        const el = wrapperRef.current
        if (!el) return

        const nodes = Array.from(el.querySelectorAll('.stat-value'))
        let triggered = false

        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !triggered) {
                    triggered = true
                    nodes.forEach((n, i) => {
                        // animate each number; slight stagger
                        setTimeout(() => animateValue(n, 0, items[i].value, 1200 + i * 200), i * 120)
                    })
                    io.disconnect()
                }
            })
        }, { threshold: 0.4 })

        io.observe(el)
        return () => io.disconnect()
    }, [])

    return (
        <div className="stats-strip" role="region" aria-label="Company statistics">
            <div className="stats-inner" ref={wrapperRef}>
                {items.map((it, idx) => (
                    <div className="stat-item" key={it.label}>
                        <div className="stat-label">{it.label}</div>
                        <div className="stat-value">0</div>
                        {idx < items.length - 1 && <div className="stat-sep" aria-hidden />}
                    </div>
                ))}
            </div>
        </div>
    )
}
