import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import CrudPages from '../pages/CrudPages';
import HomePages from '../pages/HomePages'
import NuestroMenu from '../pages/NuestroMenu'
import SobreNosotros from '../pages/SobreNosotros';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePages />} />
                <Route path="/sobrenosotros" element={<SobreNosotros/>} />
                <Route path="/nuestromenu" element={<NuestroMenu />} />
                <Route path="/crud" element={<CrudPages/>} /> 
                <Route path="*" element={<h1>Eror 404</h1>}/> 
            </Routes>
        </Router>

    )
}

export default AppRouter