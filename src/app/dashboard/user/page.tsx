import Image from "next/image";
import React from "react";
import jombang from "../../../../public/logo-jombang.png";
import keuangan from "../../../../public/keuangan.png";
import statistik from "../../../../public/statistik.png";
import surat from "../../../../public/surat.png";
import pengumuman from "../../../../public/pengumuman.png";
import pengaduan from "../../../../public/pengaduan.png";
import map from "../../../../public/MAP.png";
import profile from "../../../../public/fotoku.jpg";
import Link from "next/link";

const page = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 bg-blue-600 text-white shadow-md">
        <div className="flex items-center gap-4">
          <Image src={jombang} alt="jombang" className="w-10 h-10" />
          <h1 className="text-lg sm:text-xl font-semibold">Desa PandanWangi</h1>
        </div>
        <div>
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
            <Link href="/">Logout</Link>
          </button>
        </div>
      </nav>

      {/* Profile Section */}
      <div className="flex flex-wrap justify-between items-center rounded-lg overflow-hidden mt-6 bg-slate-800 px-4 sm:px-8 py-4 mx-4 sm:mx-7 gap-4">
        {/* Profile Section */}
        <div className="flex gap-4 items-center w-full sm:w-auto">
          <Image
            src={profile}
            alt="profile"
            className="rounded-full border border-gray-300"
            width={80}
            height={80}
          />
          <div>
            <div className="flex gap-2 mb-2">
              <label
                htmlFor="nama"
                className="block text-sm font-medium text-slate-200"
              >
                Nama:
              </label>
              <input
                type="text"
                disabled
                value="Aryansyah"
                className=" bg-gray-300 rounded border-none py-1 px-2"
              />
            </div>
            <div className="flex gap-2 mb-2">
              <label
                htmlFor="rt-rw"
                className="block text-sm font-medium text-slate-200"
              >
                RT/RW:
              </label>
              <input
                type="text"
                disabled
                value="09/07"
                className="bg-gray-300 rounded border-none py-1 px-2"
              />
            </div>
            <p className="mt-2 text-sm text-gray-300">Masyarakat</p>
          </div>
        </div>

        {/* Edit Profile Section */}
        <div className="w-full sm:w-auto mt-2 sm:mt-0">
          <button>
            <Link
              href=""
              className="text-slate-200 hover:underline text-sm sm:text-base"
            >
              Edit Profile
            </Link>
          </button>
        </div>
      </div>

      {/* Grid Section: Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {/* Pengumuman */}
        <Link
          href="../../feature/user/pengumuman"
          className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
        >
          <div className="w-12 h-12 mb-2">
            <Image
              src={pengumuman}
              alt="pengumuman"
              className="object-contain"
            />
          </div>
          <h2 className="text-sm sm:text-lg font-medium text-gray-700">
            Pengumuman & Berita
          </h2>
        </Link>

        {/* Pengajuan Surat */}
        <Link
          href="../../feature/user/pengajuanSurat"
          className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
        >
          <div className="w-12 h-12 mb-2">
            <Image src={surat} alt="surat" className="object-contain" />
          </div>
          <h2 className="text-sm sm:text-lg font-medium text-gray-700">
            Pengajuan Surat
          </h2>
        </Link>

        {/* Pengaduan */}
        <Link
          href="../../feature/user/pengaduan"
          className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
        >
          <div className="w-12 h-12 mb-2">
            <Image src={pengaduan} alt="pengaduan" className="object-contain" />
          </div>
          <h2 className="text-sm sm:text-lg font-medium text-gray-700">
            Pengaduan Warga
          </h2>
        </Link>

        {/* Statistik */}
        <Link
          href="../../feature/user/statistik"
          className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
        >
          <div className="w-12 h-12 mb-2">
            <Image src={statistik} alt="statistik" className="object-contain" />
          </div>
          <h2 className="text-sm sm:text-lg font-medium text-gray-700">
            Statistik dan Laporan
          </h2>
        </Link>

        {/* Keuangan */}
        <Link
          href="../../feature/user/keuangan"
          className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
        >
          <div className="w-12 h-12 mb-2">
            <Image src={keuangan} alt="keuangan" className="object-contain" />
          </div>
          <h2 className="text-sm sm:text-lg font-medium text-gray-700">
            Keuangan Desa
          </h2>
        </Link>

        {/* Peta */}
        <Link
          href="../../feature/user/peta"
          className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
        >
          <div className="w-12 h-12 mb-2">
            <Image src={map} alt="map" className="object-contain" />
          </div>
          <h2 className="text-sm sm:text-lg font-medium text-gray-700">
            Peta Desa
          </h2>
        </Link>
      </div>
    </>
  );
};

export default page;
