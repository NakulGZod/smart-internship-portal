import { useNavigate } from "react-router-dom";

export default function AdminNavbarPage() {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();   // remove JWT token
    navigate("/");          // redirect to role selection page
  };

  return (
    <div className="flex justify-between items-center bg-[#020617] border-b border-gray-800 px-8 py-4">

      <h1 className="text-xl font-bold text-purple-400">
        SmartInterns Admin
      </h1>

      <div className="flex items-center gap-6">

        <span className="text-gray-300">
          Admin Panel
        </span>

        <button
          onClick={handleLogout}
          className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg text-white font-semibold transition"
        >
          Logout
        </button>

      </div>

    </div>
  );
}