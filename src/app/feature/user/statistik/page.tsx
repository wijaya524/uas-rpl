"use client";

import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Link from "next/link";

ChartJS.register(ArcElement, Tooltip, Legend);

const StatistikPenduduk = () => {
  // Contoh data statistik
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [statistik, setStatistik] = useState({
    totalPenduduk: 1200,
    lakiLaki: 600,
    perempuan: 600,
    kepalaKeluarga: 300,
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [laporan, setLaporan] = useState([
    {
      id: 1,
      nama: "Budi Santoso",
      usia: 45,
      jenisKelamin: "Laki-Laki",
      rtRw: "09/07",
    },
    {
      id: 2,
      nama: "Siti Aminah",
      usia: 38,
      jenisKelamin: "Perempuan",
      rtRw: "09/07",
    },
    {
      id: 3,
      nama: "Tono Hartono",
      usia: 60,
      jenisKelamin: "Laki-Laki",
      rtRw: "10/08",
    },
    {
      id: 4,
      nama: "Ani Fatimah",
      usia: 25,
      jenisKelamin: "Perempuan",
      rtRw: "10/08",
    },
  ]);

  const pieData = {
    labels: ["Laki-Laki", "Perempuan"],
    datasets: [
      {
        label: "Distribusi Penduduk",
        data: [statistik.lakiLaki, statistik.perempuan],
        backgroundColor: ["#36A2EB", "#FF6384"],
        hoverBackgroundColor: ["#36A2EB80", "#FF638480"],
      },
    ],
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
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-8">
          Statistik Jumlah Penduduk Desa
        </h1>

        {/* Statistik Ringkasan */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-lg font-semibold text-gray-700">
              Total Penduduk
            </h2>
            <p className="text-2xl font-bold text-blue-600">
              {statistik.totalPenduduk}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-lg font-semibold text-gray-700">Laki-Laki</h2>
            <p className="text-2xl font-bold text-blue-600">
              {statistik.lakiLaki}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-lg font-semibold text-gray-700">Perempuan</h2>
            <p className="text-2xl font-bold text-blue-600">
              {statistik.perempuan}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-lg font-semibold text-gray-700">
              Kepala Keluarga
            </h2>
            <p className="text-2xl font-bold text-blue-600">
              {statistik.kepalaKeluarga}
            </p>
          </div>
        </div>

        {/* Diagram Pie */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Distribusi Penduduk
          </h2>
          <div className="w-80 mx-auto">
            <Pie data={pieData} />
          </div>
        </div>

        {/* Laporan Penduduk */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Laporan Penduduk
          </h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-2">ID</th>
                <th className="border border-gray-300 p-2">Nama</th>
                <th className="border border-gray-300 p-2">Usia</th>
                <th className="border border-gray-300 p-2">Jenis Kelamin</th>
                <th className="border border-gray-300 p-2">RT/RW</th>
              </tr>
            </thead>
            <tbody>
              {laporan.map((item) => (
                <tr key={item.id} className="text-center">
                  <td className="border border-gray-300 p-2">{item.id}</td>
                  <td className="border border-gray-300 p-2">{item.nama}</td>
                  <td className="border border-gray-300 p-2">{item.usia}</td>
                  <td className="border border-gray-300 p-2">
                    {item.jenisKelamin}
                  </td>
                  <td className="border border-gray-300 p-2">{item.rtRw}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StatistikPenduduk;
