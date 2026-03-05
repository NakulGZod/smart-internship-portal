import React from "react";
import AdminNavbar from "./AdminNavbarPage";
import AdminSidebar from "./AdminSidebar";

export default function AdminLayout({ children }) {

  return (
    <div className="flex bg-[#020617] min-h-screen text-white">

      <AdminSidebar />

      <div className="flex-1 flex flex-col">

        <AdminNavbar />

        <div className="p-8">
          {children}
        </div>

      </div>

    </div>
  );
}