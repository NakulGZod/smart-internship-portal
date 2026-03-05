import AdminLayout from "../components/AdminLayout";

export default function DashboardPage() {

  const stats = [
    {
      title: "Total Applications",
      value: "120",
      color: "text-blue-400"
    },
    {
      title: "Pending Reviews",
      value: "34",
      color: "text-yellow-400"
    },
    {
      title: "Approved",
      value: "52",
      color: "text-green-400"
    },
    {
      title: "Rejected",
      value: "18",
      color: "text-red-400"
    }
  ];

  const recentApplications = [
    {
      name: "Rahul Sharma",
      role: "Frontend Intern",
      status: "Pending"
    },
    {
      name: "Anjali Verma",
      role: "Backend Intern",
      status: "Approved"
    },
    {
      name: "Rohan Patel",
      role: "AI/ML Intern",
      status: "Rejected"
    }
  ];

  return (

    <AdminLayout>

      <div className="p-10 bg-[#020617] min-h-screen text-white">

        {/* Page Title */}
        <h1 className="text-3xl font-bold mb-8">
          Dashboard
        </h1>


        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-10">

          {stats.map((item, index) => (

            <div
              key={index}
              className="bg-[#0f172a] p-6 rounded-xl border border-gray-800 hover:border-purple-500 transition duration-300 shadow-lg"
            >

              <p className="text-gray-400 mb-2">
                {item.title}
              </p>

              <h2 className={`text-3xl font-bold ${item.color}`}>
                {item.value}
              </h2>

            </div>

          ))}

        </div>


        {/* Recent Applications */}
        <div className="bg-[#0f172a] rounded-xl border border-gray-800 p-6 shadow-lg">

          <h2 className="text-xl font-semibold mb-6">
            Recent Applications
          </h2>

          <table className="w-full">

            <thead className="border-b border-gray-700 text-gray-400">

              <tr>
                <th className="text-left py-3">Candidate</th>
                <th className="text-left py-3">Role</th>
                <th className="text-left py-3">Status</th>
              </tr>

            </thead>

            <tbody>

              {recentApplications.map((app, index) => (

                <tr
                  key={index}
                  className="border-b border-gray-800 hover:bg-[#1e293b] transition"
                >

                  <td className="py-4">
                    {app.name}
                  </td>

                  <td>
                    {app.role}
                  </td>

                  <td>

                    <span className="px-3 py-1 rounded-full text-sm bg-gray-800">
                      {app.status}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </AdminLayout>

  );
}