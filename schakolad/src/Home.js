import React, { useState, useEffect, useRef } from 'react';
import './css/Home.css';


function Home() {
    const [conceptIndex, setConceptIndex] = useState(1);
    const containerRef = useRef(null);

    const handleScroll = () => {
        const container = containerRef.current;
        if (!container) return;

        const scrollLeft = container.scrollLeft;
        const containerWidth = container.offsetWidth;

        // Round to nearest whole index
        const index = Math.round(scrollLeft / containerWidth);
        setConceptIndex(index);
    };

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        container.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <header id="splashpage">
                <video src={require('./img/splashscreen.mp4')} autoPlay loop muted={true} playsInline />
                <h1>Welcome to Schakolad Chocolate</h1>
                <p>We operate under "The Fresh Made Concept"</p>
            </header>
            <main>
                <article id="made-fresh">
                    <h2 style={{ color: '#D2B48C' }}>The Made Fresh Concept</h2>
                    <div className="concepts" ref={containerRef}>
                        <div className="concept">
                            <h3>Fresh Ingredients</h3>
                            <p>We use only the finest, freshest ingredients in our chocolates.</p>
                        </div>
                        <div className="concept">
                            <h3>Handcrafted Quality</h3>
                            <p>Each piece is handcrafted with care to ensure the highest quality.</p>
                        </div>
                        <div className="concept">
                            <h3>Daily Production</h3>
                            <p>Our chocolates are made fresh daily to guarantee optimal taste.</p>
                        </div>
                    </div>
                    <div className="tracker-dots">
                        {[-1, 0, 1].map((i) => (
                            <span
                                key={i}
                                className={`dot ${conceptIndex === i ? 'active' : ''}`}
                            />
                        ))}
                    </div>
                </article>
            </main>
        </>
    );
}

export default Home;
