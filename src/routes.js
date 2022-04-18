import React from "react";
import { Routes, Route } from "react-router";
import AboutMe from "./components/aboutMe/AboutMe";
import Details from "./components/details/Details";
import Gallery from "./components/gallery/Gallery";

export const useRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Gallery />} />
            <Route path="/aboutMe" element={<AboutMe />} />
            <Route path="/details" element={<Details />} />
        </Routes>
    )
}