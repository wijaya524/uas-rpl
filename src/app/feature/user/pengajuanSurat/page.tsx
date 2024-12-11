import Link from "next/link";
import React from "react";

const PengajuanSurat = () => {
  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <nav className="bg-blue-500 p-4 shadow-md">
        <Link
          href="../../../dashboard/user"
          className="text-white text-lg font-semibold hover:text-blue-200"
        >
          Kembali ke halaman utama
        </Link>
      </nav>
      <h1 className="text-2xl font-bold text-center mb-6">Pengajuan Surat</h1>
      <form>
        <div className="mb-4">
          <label
            htmlFor="jenisSurat"
            className="block text-sm font-medium text-gray-700"
          >
            Jenis Surat
          </label>
          <select
            name="jenisSurat"
            id="jenisSurat"
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
            required
          >
            <option value="">Pilih jenis surat</option>
            <option value="Surat Keterangan Domisili">
              Surat Keterangan Domisili
            </option>
            <option value="Surat Pengantar RT/RW">Surat Pengantar RT/RW</option>
            <option value="Surat Keterangan Usaha">
              Surat Keterangan Usaha
            </option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="keterangan"
            className="block text-sm font-medium text-gray-700"
          >
            Keterangan
          </label>
          <textarea
            name="keterangan"
            id="keterangan"
            rows={4}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
            placeholder="Masukkan keterangan tambahan"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:ring focus:ring-blue-200"
        >
          Ajukan Surat
        </button>
      </form>
    </div>
  );
};

export default PengajuanSurat;
