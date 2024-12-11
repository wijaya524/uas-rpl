"use client"

/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import dynamic from "next/dynamic";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import Link from "next/link";

ChartJS.register(ArcElement, Tooltip, Legend);

// Load the chart dynamically to fix SSR issue
const PieChart = dynamic(() => import("react-chartjs-2").then(mod => mod.Pie), {
  ssr: false,
});

const StatistikKeuangan = () => {
  const [keuangan, setKeuangan] = useState({
    totalPemasukan: 0,
    totalPengeluaran: 0,
    saldo: 0,
  });

  const [laporan, setLaporan] = useState([]);

  useEffect(() => {
    setKeuangan({
      totalPemasukan: 50000000,
      totalPengeluaran: 30000000,
      saldo: 2000000000,
    });

    
  }, []);

  const pieData = {
    labels: ["Pemasukan", "Pengeluaran"],
    datasets: [
      {
        label: "Statistik Keuangan",
        data: [keuangan.totalPemasukan, keuangan.totalPengeluaran],
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
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-8">Statistik Keuangan Desa</h1>

        {/* Ringkasan Keuangan */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-lg font-semibold text-gray-700">Total Pemasukan</h2>
            <p className="text-2xl font-bold text-green-600">Rp {keuangan.totalPemasukan.toLocaleString()}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-lg font-semibold text-gray-700">Total Pengeluaran</h2>
            <p className="text-2xl font-bold text-red-600">Rp {keuangan.totalPengeluaran.toLocaleString()}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-lg font-semibold text-gray-700">Saldo</h2>
            <p className="text-2xl font-bold text-blue-700">Rp {keuangan.saldo.toLocaleString()}</p>
          </div>
        </div>

        {/* Grafik Keuangan */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Distribusi Pemasukan dan Pengeluaran</h2>
          <div className="w-80 mx-auto">
            <PieChart data={pieData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatistikKeuangan;
