import { Link } from "react-router-dom";

export default function AdminSidebar() {

  return (
    <div className="w-64 bg-[#020617] border-r border-gray-800 min-h-screen p-6">

      <h1 className="text-2xl font-bold text-purple-400 mb-10">
        SmartInterns
      </h1>

      <nav className="space-y-4 text-gray-400">

        <Link
          to="/admin"
          className="block px-3 py-2 rounded-lg hover:bg-[#1e293b] hover:text-white transition"
        >
          Dashboard
        </Link>

        <Link
          to="/admin/applications"
          className="block px-3 py-2 rounded-lg hover:bg-[#1e293b] hover:text-white transition"
        >
          Applications
        </Link>

        <Link
          to="/admin/internships"
          className="block px-3 py-2 rounded-lg hover:bg-[#1e293b] hover:text-white transition"
        >
          Internships
        </Link>

        <Link
          to="/admin/users"
          className="block px-3 py-2 rounded-lg hover:bg-[#1e293b] hover:text-white transition"
        >
          Users
        </Link>

      </nav>

    </div>
  );
}