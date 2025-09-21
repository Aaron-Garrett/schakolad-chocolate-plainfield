import React, { useState, useEffect, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
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
        const step = Math.floor(scrollLeft / containerWidth);  // Determine the current step
        const newIndex = Math.min(3, Math.max(0, step));       // Clamp between 0 and 2
        setConceptIndex(newIndex);
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

    const navVisibility = async (e) => {
        e.preventDefault();
        const navbar = document.querySelector('.navbar');

        if (navbar) {
            navbar.classList.toggle('visible')
        }
    };

    const makeActive = async (e) => {
        e.preventDefault();
        const navItems = document.querySelectorAll('.navItem');

        navItems.forEach(item => {
            item.classList.remove('active');
        });

        e.currentTarget.classList.add('active');
    }

    return (
        <>
            <nav>
                <FaBars  className="navToggle" size={24} onClick={(e) => navVisibility(e)} />
                <div className="navbar">
                    <div className="navItem active" onClick={(e) => makeActive(e)}>
                        <p>Home</p>
                    </div>
                    <div className="navItem" onClick={(e) => makeActive(e)}>
                        <p>Products</p>
                    </div>
                    <div className="navItem" onClick={(e) => makeActive(e)}>
                        <p>Contact Us/Order</p>
                    </div>
                    <div className="navItem" onClick={(e) => makeActive(e)}>
                        <p>About Us</p>
                    </div>
                    <div className="navItem" onClick={(e) => makeActive(e)}>
                        <p>Chocolate Classes</p>
                    </div>
                </div>
            </nav>
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
                    <h2>Schakolad Chocolate Factory</h2>
                    <h3>Chocolates to Live By</h3>
                    <p>One of the truly custom retail chicolate boutiques thanks
                        to our "Made Fresh Concept!"</p>
                </div>
            </header>
            <main>
                {/* Made Fresh Concept Section */}
                <article id="made-fresh">
                    <h2 style={{ color: '#D2B48C' }}>The Made Fresh Concept</h2>
                    <div className="concepts" ref={containerRef}>
                        {/* First Concept */}
                        <div className="concept">
                            <h3>No Pre-Packaged Goods</h3>
                            <p>
                                Our Made Fresh Concept means we don't sell pre-packaged goodies.
                                They tend to be full of junk that detracts from the pureness of chocolate.
                                We believe in doing chocolate right, so we make sure everything we sell
                                fulfills that promise.
                            </p>
                        </div>

                        {/* Second Concept */}
                        <div className="concept">
                            <h3>All Hand-Crafted</h3>
                            <p>
                                To fulfill our promise, all of our chocolates are hamd-crafted!
                                That means hand-dipped, hand-molded, and hand-wrapped!
                                This ensures the highest quality chocolate is given the highest quality care.
                            </p>
                        </div>

                        {/* Third Concept */}
                        <div className="concept">
                            <h3>Customization</h3>
                            <p>
                                Our hand-made policy means that we are easily able to accomodate customizations!
                                It is our pleasure to make your hand-crafted chocolate experience not just delicious,
                                but personal as well!
                            </p>
                        </div>

                        {/* Fourth Concept */}
                        <div className="concept">
                            <h3>Flexibility</h3>
                            <p>
                                We provide our owners the flexibility to stretch and master our trade! we welcome them
                                to try new things and see what kind of creative genius they can come up with!
                            </p>
                        </div>
                    </div>

                    {/* Concept Navigation Dots */}
                    <div className="tracker-dots">
                        {[0, 1, 2, 3].map((i) => (
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
                    <h3>First off, have you tried it?! 😄</h3>
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
