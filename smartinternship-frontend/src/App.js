import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Apply from "./pages/Apply";
import Applications from "./pages/Applications";

function App() {
  return (
    <Router>

      {/* Navbar visible on all pages */}
      <Navbar />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/applications" element={<Applications />} />
      </Routes>

    </Router>
  );
}

export default App;