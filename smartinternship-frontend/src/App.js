import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import CandidateLogin from "./pages/candidate/CandidateLogin";
import AdminLogin from "./pages/admin/AdminLogin";
import Navbar from "./components/Navbar";
import CandidateSignup from "./pages/candidate/CandidateSignup";
import Home from "./pages/Home";
import Apply from "./pages/Apply";
import Applications from "./pages/Applications";

import DashboardPage from "./admin/pages/DashboardPage";
import AdminInternships from "./admin/pages/Internships";
import Users from "./admin/pages/Users";
import AdminApplications from "./admin/pages/AdminApplications";

import RoleSelection from "./pages/RoleSelection";

function Layout() {

  const location = useLocation();

  const isAdmin = location.pathname.startsWith("/admin");
const isRoleSelection = location.pathname === "/";
const isCandidateAuth =
  location.pathname === "/candidate/login" ||
  location.pathname === "/candidate/signup";
 

  return (
    <>
      {/* Show Navbar only for candidate pages */}
     {!isAdmin && !isRoleSelection && !isCandidateAuth && <Navbar />}

      <Routes>

        {/* Role Selection */}
        <Route path="/" element={<RoleSelection />} />

        {/* Candidate Pages */}
        <Route path="/candidate/login" element={<CandidateLogin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/apply/:id" element={<Apply />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/candidate/signup" element={<CandidateSignup />} />

        {/* Admin Pages */}
         <Route path="/admin/login" element={<AdminLogin />} />
        <Route
  path="/admin"
  element={
    <ProtectedRoute>
      <DashboardPage />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/internships"
  element={
    <ProtectedRoute>
      <AdminInternships />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/users"
  element={
    <ProtectedRoute>
      <Users />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/AdminApplications"
  element={
    <ProtectedRoute>
      <AdminApplications />
    </ProtectedRoute>
  }
/>

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