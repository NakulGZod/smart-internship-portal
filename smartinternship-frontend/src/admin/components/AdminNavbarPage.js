export default function AdminNavbarPage() {

  return (
    <div className="flex justify-between items-center bg-[#020617] border-b border-gray-800 px-8 py-4">

      <h1 className="text-xl font-bold text-purple-400">
        SmartInterns Admin
      </h1>

      <div className="flex items-center gap-6">

        <span className="text-gray-300">
          Admin Panel
        </span>

        <button className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-500">
          Logout
        </button>

      </div>

    </div>
  );
}