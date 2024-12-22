import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from "../pages/Main.tsx";

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
        </Routes>
    );
}

export default AppRoutes;
