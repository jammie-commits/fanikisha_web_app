import React from "react";
import { useRoutes } from "react-router-dom";   
import LandingPage from "pages/LandingPage";

const ProjectRoutes = () => {
    let element = useRoutes([
        { path: "dhiwise-dashboard", element: <Home /> },
        { path: "*", element: <NotFound /> },
        {
            path: "/",
            element: <LandingPage />,
        },
    ]);

    return element;
};

export default ProjectRoutes;
    