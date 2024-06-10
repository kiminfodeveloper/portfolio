import Home from "./pages/Home";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { GlobalStyles } from "./styles/GlobalStyle";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
    return (
        <Router>
            <GlobalStyles />
            <Navbar />
            <WhatsAppButton />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
