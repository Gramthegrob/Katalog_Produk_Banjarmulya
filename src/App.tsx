import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Overview from './components/Overview';
import ProductCatalog from './components/ProductCatalog';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen">
            <Header />
            <section id="home">
                <Hero />
            </section>
            <section id="about">
                <Overview />
            </section>
            <section id="products">
                <ProductCatalog />
            </section>
            <Footer />
        </div>
    );
}

export default App;