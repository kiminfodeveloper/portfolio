import Home from "./pages/Home";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { GlobalStyles } from "./styles/GlobalStyle";
import WhatsAppButton from "./components/WhatsAppButton";
import Loading from "./components/Loading";

function App() {
    return (
        <HelmetProvider>
            <Router>
                <GlobalStyles />
                <Navbar />
                <WhatsAppButton />
                <Suspense fallback={<Loading />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </Suspense>
                <Footer />
            </Router>
        </HelmetProvider>
    );
}

export default App;
