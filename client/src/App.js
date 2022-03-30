import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Head from "./components/Head";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Booking from "./pages/booking";

export default function App() {

    return (
        <BrowserRouter>
            <Head />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/booking" element={<Booking />} />
            </Routes>
        </BrowserRouter >
    );
}