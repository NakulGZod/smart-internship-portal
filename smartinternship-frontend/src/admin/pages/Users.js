import AdminLayout from "../components/AdminLayout";

export default function Users() {

  return (
    <AdminLayout>

      <h1 className="text-3xl font-bold mb-8">
        Users
      </h1>

      <div className="bg-[#0f172a] p-6 rounded-xl">

        <p>All registered users will appear here.</p>

      </div>

    </AdminLayout>
  );
}