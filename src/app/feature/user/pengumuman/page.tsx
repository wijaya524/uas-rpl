"use client";

import Link from "next/link";
import React, { useState } from "react";

const Pengumuman = () => {
  // Contoh data pengumuman
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [pengumuman, setPengumuman] = useState([
    {
      id: 1,
      judul: "Pemadaman Listrik",
      isi: "Akan ada pemadaman listrik pada tanggal 12 Desember 2024 dari pukul 09.00 hingga 15.00.",
      tanggal: "10 Desember 2024",
    },
    {
      id: 2,
      judul: "Rapat RT",
      isi: "Mohon kehadiran seluruh warga RT 09/07 pada rapat yang akan dilaksanakan di balai desa, pukul 19.00 WIB.",
      tanggal: "9 Desember 2024",
    },
    {
      id: 3,
      judul: "Pembagian BLT",
      isi: "Pembagian BLT tahap ke-3 akan dilakukan pada 15 Desember 2024 di aula desa.",
      tanggal: "8 Desember 2024",
    },
  ]);

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
          Daftar Pengumuman
        </h1>
        <div className="space-y-6">
          {pengumuman.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                {item.judul}
              </h2>
              <p className="text-sm text-gray-500 mb-2">
                Tanggal: {item.tanggal}
              </p>
              <p className="text-gray-700">{item.isi}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pengumuman;
