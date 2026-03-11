import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

function RoleSelection() {

  const navigate = useNavigate();

  return (
    <div className="role-container">

      <div className="role-card">

        <h1 className="title">SmartInterns Portal</h1>
        <p className="subtitle">Choose how you want to login</p>

        <div className="role-buttons">

          <button
            className="admin-btn"
            onClick={() => navigate("/admin/login")}
          >
            Login as Admin
          </button>

          <button
            className="candidate-btn"
            onClick={() => navigate("/candidate/login")}
          >
            Login as Candidate
          </button>

        </div>

      </div>

    </div>
  );
}

export default RoleSelection;