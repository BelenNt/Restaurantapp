import React from 'react'
import { BrowserRouter as Routes, Route, BrowserRouter } from "react-router-dom";
import CrudPages from '../pages/CrudPages';
import HomePages from '../pages/HomePages'
import NuestroMenu from '../pages/NuestroMenu'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePages />} />
                <Route path="/nuestromenu" element={<NuestroMenu />} />
                <Route path="/crud" element={<CrudPages/>} />
            </Routes>
        </BrowserRouter>

    )
}

export default AppRouter