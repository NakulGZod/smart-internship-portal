import { Link } from "react-router-dom";

export default function InternshipCard({ id, title, company, location, stipend }) {
  return (
    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20 hover:scale-105 transition duration-300">

      <h2 className="text-xl font-semibold mb-2">{title}</h2>

      <p className="text-purple-300">{company}</p>

      <p className="text-gray-300 mt-2">📍 {location}</p>

      <p className="text-green-400 mt-1">💰 {stipend}</p>

      <Link to={`/apply/${id}`}>
        <button className="mt-5 w-full bg-gradient-to-r from-purple-600 to-pink-500 py-2 rounded-lg font-semibold hover:from-pink-500 hover:to-purple-600 transition cursor-pointer">
          Apply Now
        </button>
      </Link>

    </div>
  );
}