import React, { useState, useEffect, useRef } from 'react';
import './css/Home.css';


function Home() {
    const [conceptIndex, setConceptIndex] = useState(0);
    const containerRef = useRef(null);

    const handleScroll = () => {
        const container = containerRef.current;
        if (!container) return;

        const scrollLeft = container.scrollLeft;
        const containerWidth = container.offsetWidth;

        // Round to nearest whole index
        const index = Math.min(2, Math.max(0, Math.round(scrollLeft / containerWidth)));
        setConceptIndex(index);
    };

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Reset scroll to the first concept after layout
        requestAnimationFrame(() => {
            container.scrollLeft = 0;
        });

        container.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        console.log('Concept index changed:', conceptIndex);
    }, [conceptIndex]);

    return (
        <>
            {/* Hero Section */}
            <header id="splashpage" className="hero">
                <video
                    src={require('./img/splashscreen.mp4')}
                    autoPlay
                    loop
                    muted={true}
                    playsInline
                />
                <div className="hero-content">
                    <h1>Schakolad Chocolate Factory</h1>
                    <p>We operate under "The Fresh Made Concept"</p>
                </div>
            </header>

            <main>
                {/* Made Fresh Concept Section */}
                <article id="made-fresh">
                    <h2 style={{ color: '#D2B48C' }}>The Made Fresh Concept</h2>
                    <div className="concepts" ref={containerRef}>
                        {/* First Concept */}
                        <div className="concept">
                            <h3>Made Fresh On Premises</h3>
                            <p>
                                The "Made Fresh On Premises" concept means that chocolate items do not come pre-packaged from headquarters,
                                rather that items are prepared and dipped at each individual retail location allowing our franchise owners
                                the flexibility to be creative and customize our fresh products to the customer's request
                            </p>
                        </div>

                        {/* Second Concept */}
                        <div className="concept">
                            <h3>Schakolad Chocolate Factory</h3>
                            <p>
                                Schakolad Chocolate Factory (Pronounced Shaq-Oh-Lad) is one of the truly custom retail chocolate boutiques in the business.
                            </p>
                        </div>

                        {/* Third Concept */}
                        <div className="concept">
                            <h3>Three Generations</h3>
                            <p>
                                Our chocolates are "made fresh on premises" using a tried and true three-generation European style
                                family recipe that calls for the highest quality ingredients and attention to design detail.
                            </p>
                        </div>
                    </div>

                    {/* Concept Navigation Dots */}
                    <div className="tracker-dots">
                        {[0, 1, 2].map((i) => (
                            <span
                                key={i}
                                className={`dot ${conceptIndex === i ? 'active' : ''}`}
                            />
                        ))}
                    </div>
                </article>

                <section className="product-gallery">
                    <h2>Our Signature Chocolates</h2>
                    <div className="product-grid">
                        <div className="product-card">
                            <img src={require('./img/box.jpg')} alt="Handmade Chocolate Truffles" />
                            <h3>Chocolate Truffles</h3>
                            <p>Rich, creamy, and dusted with cocoa — a timeless classic.</p>
                        </div>
                        <div className="product-card">
                            <img src={require('./img/strawberries.jpg')} alt="Chocolate Covered Strawberries" />
                            <h3>Strawberries</h3>
                            <p>Juicy strawberries dipped in our finest melted chocolate.</p>
                        </div>
                        <div className="product-card">
                            <img src={require('./img/tray.jpg')} alt="Chocolate Collections" />
                            <h3>Chocolate Collections</h3>
                            <p>Simple, elegant, and beatifully arranged collections of chocolate.</p>
                        </div>
                    </div>
                </section>

                {/* Health Benefits Section */}
                <article id="why-chocolate">
                    <h2 style={{ color: '#D2B48C' }}>What Makes Chocolate Great?</h2>
                    <p>Chocolate is not just a treat; it can have some health benefits too!</p>
                    <ul>
                        <li><strong>1: </strong>A Harvard study showed that chocolate, in moderation, may help people live longer.</li>
                        <li><strong>2: </strong>Dark chocolate can improve heart health by increasing blood flow and lowering blood pressure.</li>
                        <li><strong>3: </strong>Chocolate is full of vitamins like iron, calcium, magnesium, etc.</li>
                        <li><strong>4: </strong>Chocolate releases the same chemicals as when you fall in love.</li>
                        <li><strong>5: </strong>It is rich in antioxidants, which can help reduce inflammation and protect against chronic diseases.</li>
                        <li><strong>6: </strong>Chocolate contains seratonin, which is a natural pick-me-up.</li>
                        <li><strong>7: </strong>Cocoa helps to prevent cavities.</li>
                        <li><strong>8: </strong>Chocolate can boost mood and cognitive function and lower LDL cholesterol due to its flavonoid content.</li>
                        <li><strong>9: </strong>Chocolate can be a natural cough suppressant.</li>
                        <li><strong>10: </strong>Chocolate can increase blood circulation to the brain.</li>
                    </ul>
                </article>
            </main>
        </>
    );
}

export default Home;
