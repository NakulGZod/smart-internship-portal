import { useState, useContext } from "react";
import { InternshipContext } from "../../context/InternshipContext";
import AdminLayout from "../components/AdminLayout";

export default function Internships() {

  const { internships, addInternship } = useContext(InternshipContext);

  const [showForm, setShowForm] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    stipend: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newInternship = {
      id: Date.now(),
      ...form
    };

    addInternship(newInternship);

    setSuccessMsg(true);
    setShowForm(false);

    setForm({
      title: "",
      company: "",
      location: "",
      stipend: ""
    });

    setTimeout(() => {
      setSuccessMsg(false);
    }, 2000);
  };

  return (

    <AdminLayout>

      <div className="p-10 bg-[#020617] min-h-screen text-white">

        <h1 className="text-3xl font-bold mb-6">
          Manage Internships
        </h1>

        {/* Add Internship Button */}
        <button
          onClick={() => setShowForm(true)}
          className="bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition mb-6"
        >
          + Add Internship
        </button>

        {/* Success Message */}
        {successMsg && (
          <div className="mb-6 bg-green-600 px-6 py-3 rounded-lg w-fit">
            Internship Added Successfully ✅
          </div>
        )}

        {/* Internship List */}
        <div className="bg-[#0f172a] border border-gray-700 p-6 rounded-xl shadow-lg">

          {internships.length === 0 ? (

            <p className="text-gray-400">
              No internships added yet
            </p>

          ) : (

            internships.map((intern) => (

              <div
                key={intern.id}
                className="border-b border-gray-700 py-3 flex justify-between"
              >

                <div>

                  <h3 className="font-semibold">
                    {intern.title}
                  </h3>

                  <p className="text-sm text-gray-400">
                    {intern.company} • {intern.location}
                  </p>

                </div>

                <span className="text-green-400">
                  {intern.stipend}
                </span>

              </div>

            ))

          )}

        </div>

        {/* Modal Form */}
        {showForm && (

          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">

            <div className="bg-[#0f172a] border border-gray-700 shadow-2xl rounded-2xl p-8 w-[420px]">

              <h2 className="text-2xl font-bold mb-6 text-white">
                Add Internship
              </h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                <input
                  name="title"
                  placeholder="Internship Title"
                  value={form.title}
                  onChange={handleChange}
                  className="p-3 rounded-lg bg-[#1e293b] border border-gray-600 focus:border-purple-500 outline-none"
                  required
                />

                <input
                  name="company"
                  placeholder="Company Name"
                  value={form.company}
                  onChange={handleChange}
                  className="p-3 rounded-lg bg-[#1e293b] border border-gray-600 focus:border-purple-500 outline-none"
                  required
                />

                <input
                  name="location"
                  placeholder="Location"
                  value={form.location}
                  onChange={handleChange}
                  className="p-3 rounded-lg bg-[#1e293b] border border-gray-600 focus:border-purple-500 outline-none"
                  required
                />

                <input
                  name="stipend"
                  placeholder="Stipend"
                  value={form.stipend}
                  onChange={handleChange}
                  className="p-3 rounded-lg bg-[#1e293b] border border-gray-600 focus:border-purple-500 outline-none"
                  required
                />

                <div className="flex gap-4 mt-4">

                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-500 py-3 rounded-lg font-semibold hover:scale-105 transition"
                  >
                    Add Internship
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="flex-1 bg-gray-700 py-3 rounded-lg hover:bg-gray-600 transition"
                  >
                    Cancel
                  </button>

                </div>

              </form>

            </div>

          </div>

        )}

      </div>

    </AdminLayout>

  );
}