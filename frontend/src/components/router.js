import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home'
import Join from '../pages/join'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/join" element={<Join />} />
            </Routes>
        </BrowserRouter>
    )
}
