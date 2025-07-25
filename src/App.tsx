import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Overview from './components/Overview';
import ProductCatalog from './components/ProductCatalog';
import Footer from './components/Footer';
// Fix these import paths - remove file extensions and use correct case
import VillageStories from './Pages/village-stories';
import SejarahDusunSidomulya from './Pages/SejarahDusunSidomulya';
import EtnografiDusunSidomulya from './Pages/EtnografiDusunSidomulya';

function HomePage() {
    return (
        <>
            <section id="home">
                <Hero />
            </section>
            <section id="about">
                <Overview />
            </section>
            <section id="products">
                <ProductCatalog />
            </section>
        </>
    );
}

function App() {
    return (
        <Router>
            <div className="min-h-screen">
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/village-stories" element={<VillageStories />} />
                    <Route path="/village-stories/sejarah-dusun-sidomulya" element={<SejarahDusunSidomulya />} />
                    <Route path="/village-stories/etnografi-dusun-sidomulya" element={<EtnografiDusunSidomulya />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;