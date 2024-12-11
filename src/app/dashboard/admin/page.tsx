import Image from 'next/image';
import React from 'react';
import jombang from '../../../../public/logo-jombang.png';
import keuangan from '../../../../public/keuangan.png';
import user from '../../../../public/logo-user-removebg-preview.png';
import perangkatDesa from '../../../../public/perangkat-desa-removebg-preview.png';
import statistik from '../../../../public/statistik.png';
import Link from 'next/link';

const Page = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 bg-blue-600 text-white shadow-md">
        <div className="flex items-center gap-4">
          <Image src={jombang} alt="jombang" className="w-12 h-12" />
          <h1 className="text-xl font-semibold">Desa PandanWangi</h1>
        </div>
        <div>
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
            <Link href="/">Logout</Link>
          </button>
        </div>
      </nav>

      {/* Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
        {/* Card: Manage Keuangan */}
        <Link href="../../feature/admin/manageKeuangan"  className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
          <div className="w-16 h-16 mb-4">
            <Image src={keuangan} alt="keuangan" className="object-contain" />
          </div>
          <h1 className="text-lg font-medium text-black">Manage Keuangan</h1>
        </Link>

        {/* Card: Manage Data User */}
        <Link href="../../feature/admin/manageMasyarakat" className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
          <div className="w-16 h-16 mb-4">
            <Image src={user} alt="user" className="object-contain" />
          </div>
          <h1 className="text-lg font-medium text-black">Manage Data User</h1>
        </Link>

        {/* Card: Manage Perangkat Desa */}
        <Link href="../../feature/admin/managePerangkatDesa" className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
          <div className="w-16 h-16 mb-4">
            <Image src={perangkatDesa} alt="perangkatDesa" className="object-contain" />
          </div>
          <h1 className="text-lg font-medium text-black">Manage Perangkat Desa</h1>
        </Link>

        {/* Card: Statistik dan Laporan Desa */}
        <Link href="../../feature/admin/manageStatistik" className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
          <div className="w-16 h-16 mb-4">
            <Image src={statistik} alt="statistik" className="object-contain" />
          </div>
          <h1 className="text-lg font-medium text-black">Statistik dan Laporan Desa</h1>
        </Link>
      </div>
    </>
  );
};

export default Page;
