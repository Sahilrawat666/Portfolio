import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage.jsx";
import AboutPage from "./components/pages/AboutPage.jsx";
import ProjectPage from "./components/pages/ProjectPage.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
