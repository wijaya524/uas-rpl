import Link from "next/link";
import React from "react";

const PerangkatForm = () => {
  return (
    <form className="p-6 bg-gray-200 rounded-lg shadow-md">
      <nav className="bg-blue-500 p-4 shadow-md">
        <Link
          href="../../../dashboard/admin"
          className="text-white text-lg font-semibold hover:text-blue-200"
        >
          Kembali ke halaman utama
        </Link>
      </nav>
      <h2 className="text-lg font-bold mb-4">
        Form Tambah/Edit Perangkat Desa
      </h2>
      <div>
        <label>Nama Perangkat:</label>
        <input
          type="text"
          className="border p-2 rounded w-full mb-3"
          placeholder="Masukkan nama perangkat"
        />
      </div>
      <div>
        <label>Jabatan:</label>
        <input
          type="text"
          className="border p-2 rounded w-full mb-3"
          placeholder="Masukkan jabatan perangkat"
        />
      </div>
      <div>
        <label>Status:</label>
        <select className="border p-2 rounded w-full mb-3">
          <option value="aktif">Aktif</option>
          <option value="non-aktif">Non-aktif</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
      >
        Simpan
      </button>
    </form>
  );
};

export default PerangkatForm;
