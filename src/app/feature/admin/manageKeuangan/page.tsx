import Link from "next/link";
import React from "react";

const TransactionForm = () => {
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
      <h2 className="text-lg font-bold mb-2">Tambah Transaksi</h2>
      <div>
        <label>Tipe Transaksi:</label>
        <select className="border p-2 rounded w-full mb-2">
          <option value="pendapatan">Pendapatan</option>
          <option value="pengeluaran">Pengeluaran</option>
        </select>
      </div>
      <div>
        <label>Jumlah:</label>
        <input
          type="number"
          className="no-arrows border p-2 rounded w-full mb-2"
          placeholder="Masukkan jumlah"
        />
      </div>
      <div>
        <label>Deskripsi:</label>
        <input
          type="text"
          className="border p-2 rounded w-full mb-2"
          placeholder="Masukkan deskripsi"
        />
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

export default TransactionForm;
