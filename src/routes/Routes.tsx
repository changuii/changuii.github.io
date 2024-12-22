import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Main from "../pages/Main.tsx";
import Projects from "../pages/Projects.tsx";
import AboutMe from "../pages/AboutMe.tsx";

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/aboutme" element={<AboutMe/>}/>
        </Routes>
    );
}

export default AppRoutes;
