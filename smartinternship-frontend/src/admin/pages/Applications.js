import AdminLayout from "../components/AdminLayout";

export default function Applications() {

  const applications = [
    {
      name: "Rahul Sharma",
      internship: "Frontend Intern",
      status: "Pending"
    },
    {
      name: "Anjali Verma",
      internship: "Backend Intern",
      status: "Approved"
    },
    {
      name: "Rohan Patel",
      internship: "AI/ML Intern",
      status: "Rejected"
    }
  ];

  return (
    <AdminLayout>

      <h1 className="text-3xl font-bold mb-8">Applications</h1>

      <div className="bg-[#0f172a] rounded-xl overflow-hidden">

        <table className="w-full">

          <thead className="border-b border-gray-700">
            <tr className="text-left text-gray-400">
              <th className="p-4">Candidate</th>
              <th className="p-4">Internship</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>

          <tbody>

            {applications.map((app, index) => (

              <tr key={index} className="border-b border-gray-800">

                <td className="p-4">{app.name}</td>
                <td className="p-4">{app.internship}</td>
                <td className="p-4">{app.status}</td>

                <td className="p-4 space-x-2">

                  <button className="bg-green-500 px-3 py-1 rounded">
                    Approve
                  </button>

                  <button className="bg-red-500 px-3 py-1 rounded">
                    Reject
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </AdminLayout>
  );
}