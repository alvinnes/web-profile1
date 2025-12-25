import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import HomePage from "./pages/Home/HomePage";
import Dashboard from "./pages/Dashboard/Dashboard";
import LoginPage from "./pages/Auth/LoginPage";
import "./assets/css/style.css";
import FormProjects from "./pages/Form/FormProjects/FormProjects";
import DashboardCertifications from "./pages/Dashboard/DashboardCertifications";
import DashboardMessages from "./pages/Dashboard/DashboardMessages";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/dashboard/certifications"
          element={<DashboardCertifications />}
        />
        <Route path="/dashboard/messages" element={<DashboardMessages />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/addProjects" element={<FormProjects />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
