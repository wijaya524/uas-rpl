"use client";

import Link from "next/link";
import React, { useState } from "react";

const Pengaduan = () => {
  const [pengaduan, setPengaduan] = useState([
    {
      id: 1,
      nama: "Budi Santoso",
      topik: "Jalan Rusak",
      isi: "Mohon perbaikan jalan di RT 09 karena banyak lubang yang membahayakan pengendara.",
      tanggal: "10 Desember 2024",
    },
    {
      id: 2,
      nama: "Siti Aminah",
      topik: "Lampu Jalan",
      isi: "Lampu jalan di RT 07 sudah mati selama seminggu, mohon segera diperbaiki.",
      tanggal: "9 Desember 2024",
    },
  ]);

  const [formData, setFormData] = useState({
    nama: "",
    topik: "",
    isi: "",
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (formData.nama && formData.topik && formData.isi) {
      setPengaduan([
        ...pengaduan,
        {
          id: pengaduan.length + 1,
          ...formData,
          tanggal: new Date().toLocaleDateString(),
        },
      ]);
      setFormData({ nama: "", topik: "", isi: "" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <nav className="bg-blue-500 p-4 shadow-md">
        <Link
          href="../../../dashboard/user"
          className="text-white text-lg font-semibold hover:text-blue-200"
        >
          Kembali ke halaman utama
        </Link>
      </nav>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-8">
          Form Pengaduan Warga
        </h1>

        {/* Form Pengaduan */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nama:
              </label>
              <input
                type="text"
                name="nama"
                value={formData.nama}
                onChange={handleChange}
                placeholder="Masukkan nama Anda"
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Topik Pengaduan:
              </label>
              <input
                type="text"
                name="topik"
                value={formData.topik}
                onChange={handleChange}
                placeholder="Masukkan topik pengaduan"
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Isi Pengaduan:
              </label>
              <textarea
                name="isi"
                value={formData.isi}
                onChange={handleChange}
                placeholder="Tulis pengaduan Anda"
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition"
            >
              Kirim Pengaduan
            </button>
          </form>
        </div>

        {/* Daftar Pengaduan */}
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Daftar Pengaduan
        </h2>
        <div className="space-y-6">
          {pengaduan.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {item.topik}
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                Oleh: {item.nama} | Tanggal: {item.tanggal}
              </p>
              <p className="text-gray-700">{item.isi}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pengaduan;
