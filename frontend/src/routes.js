import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

export default function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Logon />} />
                <Route path="/register" element={<Register />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/incidents/new' element={<NewIncident />} />
            </Routes>
        </BrowserRouter>
    );
} 