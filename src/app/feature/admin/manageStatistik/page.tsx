import Link from "next/link";
import React from "react";

const Dashboard = () => {
  return (
    <div className="p-8">
      <nav className="bg-blue-500 p-4 shadow-md">
        <Link
          href="../../../dashboard/admin"
          className="text-white text-lg font-semibold hover:text-blue-200"
        >
          Kembali ke halaman utama
        </Link>
      </nav>
      <h1 className="text-2xl font-bold mb-4">
        Dashboard Statistik Penduduk Desa
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-blue-100 p-4 rounded-lg shadow-md">
          <h3 className="font-semibold mb-2">Jumlah Penduduk</h3>
          <p className="text-lg text-blue-700">1.250</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg shadow-md">
          <h3 className="font-semibold mb-2">Laki-laki</h3>
          <p className="text-lg text-green-700">650</p>
        </div>
        <div className="bg-red-100 p-4 rounded-lg shadow-md">
          <h3 className="font-semibold mb-2">Perempuan</h3>
          <p className="text-lg text-red-700">600</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
