
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "../Pages/Contact/Contact";
import Curriculum from "../Pages/Curriculum/Curriculum";
import HomePage from "../Pages/HomePage/HomePage";
import ProjectDetails from "../Pages/ProjectDetails/ProjectDetails";
import Projects from "../Pages/Projects/Projects";

const Routers_ = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="resume" element={<Curriculum />} />
                <Route path="projects" element={<Projects />} />
                <Route path="contact-me" element={<Contact />} />
                <Route path="/:id/details" element={<ProjectDetails />} />
                <Route path="/*" element={<h1>Página não encontrada</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers_




