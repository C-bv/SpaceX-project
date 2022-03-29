import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

import About from "./pages/about";

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Link to="/about">About</Link>
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter >
    );
}