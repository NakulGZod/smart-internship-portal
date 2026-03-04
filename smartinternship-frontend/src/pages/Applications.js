export default function Applications() {

  const applications = [
    {
      role: "Frontend Developer Intern",
      company: "Google",
      status: "Pending"
    },
    {
      role: "Backend Developer Intern",
      company: "Amazon",
      status: "Approved"
    },
    {
      role: "AI/ML Intern",
      company: "TCS",
      status: "Rejected"
    }
  ];

  const statusStyle = (status) => {
    if (status === "Approved")
      return "bg-green-500/20 text-green-400";
    if (status === "Rejected")
      return "bg-red-500/20 text-red-400";
    return "bg-yellow-500/20 text-yellow-400";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white pt-28 px-6">

      <h1 className="text-4xl font-bold text-center mb-12">
        My Applications
      </h1>

      <div className="max-w-3xl mx-auto space-y-6">

        {applications.map((app, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl flex justify-between items-center"
          >
            <div>
              <h2 className="text-lg font-semibold">{app.role}</h2>
              <p className="text-gray-300">{app.company}</p>
            </div>

            <span
              className={`px-4 py-2 rounded-lg text-sm font-semibold ${statusStyle(
                app.status
              )}`}
            >
              {app.status}
            </span>
          </div>
        ))}

      </div>
    </div>
  );
}