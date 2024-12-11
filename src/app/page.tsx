import Image from "next/image";
import Link from "next/link";
import jombang from "../../public/logo-jombang.png";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      {/* Logo */}
      <div className="mb-6">
        <Image
          src={jombang}
          alt="Logo Jombang"
          width={150}
          height={150}
          className="rounded-lg"
          layout="intrinsic" // Mengembalikan ukuran asli berdasarkan width/height
        />
      </div>

      {/* Judul */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4 text-center">
        Selamat Datang di Sistem Informasi Desa
      </h1>

      {/* Tombol Masuk */}
      <div className="w-full md:w-auto flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
        <Link
          href="./auth/admin"
          className="px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition duration-200 ease-in-out text-center"
        >
          Masuk sebagai Perangkat Desa
        </Link>

        <Link
          href="./auth/user"
          className="px-6 py-3 text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 transition duration-200 ease-in-out text-center"
        >
          Masuk sebagai Masyarakat
        </Link>
      </div>

      {/* Footer atau Informasi Tambahan */}
      <div className="mt-8 text-sm text-gray-500 text-center">
        <p>&copy; {new Date().getFullYear()} Pemerintahan Desa Jombang</p>
      </div>
    </div>
  );
}
