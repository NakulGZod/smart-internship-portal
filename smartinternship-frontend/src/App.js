import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Apply from "./pages/Apply";
import Applications from "./pages/Applications";

import DashboardPage from "./admin/pages/DashboardPage";
import AdminInternships from "./admin/pages/Internships";
import Users from "./admin/pages/Users";

function Layout() {

  const location = useLocation();

  // Hide candidate navbar on admin pages
  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdmin && <Navbar />}

      <Routes>

        {/* Candidate Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/applications" element={<Applications />} />

        {/* Admin Pages */}
        <Route path="/admin" element={<DashboardPage />} />
        <Route path="/admin/internships" element={<AdminInternships />} />
        <Route path="/admin/users" element={<Users />} />

      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}