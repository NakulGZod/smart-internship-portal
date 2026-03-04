import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Apply() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    skills: "",
    linkedin: "",
    portfolio: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Later this will send data to backend API
    console.log(formData);

    // Redirect to home
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white pt-24 px-6">

      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-xl">

        <h1 className="text-3xl font-bold text-center mb-6">
          Internship Application
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            onChange={handleChange}
            className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            onChange={handleChange}
            className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-400"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            onChange={handleChange}
            className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-400"
          />

          <input
            type="text"
            name="college"
            placeholder="College / University"
            onChange={handleChange}
            className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-400"
          />

          <input
            type="text"
            name="skills"
            placeholder="Skills (React, Python, AI...)"
            onChange={handleChange}
            className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-400"
          />

          <input
            type="text"
            name="linkedin"
            placeholder="LinkedIn Profile"
            onChange={handleChange}
            className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-400"
          />

          <input
            type="text"
            name="portfolio"
            placeholder="Portfolio / GitHub"
            onChange={handleChange}
            className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-400"
          />

          <textarea
            name="message"
            placeholder="Why should we hire you?"
            rows="4"
            onChange={handleChange}
            className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-400"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 rounded-lg font-semibold hover:from-pink-500 hover:to-purple-600 transition duration-300"
          >
            Submit Application
          </button>

        </form>

      </div>
    </div>
  );
}