"use client";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Link from "next/link";

let villageIcon:
  | L.Icon<{
      iconUrl: string;
      iconSize: [number, number];
      iconAnchor: [number, number];
    }>
  | L.Icon<L.IconOptions>
  | L.DivIcon
  | undefined;

// Periksa keberadaan window sebelum mengaksesnya
if (typeof window !== "undefined") {
  villageIcon = new L.Icon({
    iconUrl: "https://img.icons8.com/emoji/48/000000/village-emoji.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });
}

const DesaMapUI = () => {
  const desaCoordinates = {
    lat: -7.566562,
    lng: 112.2220404,
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
          Peta Lokasi Desa
        </h1>
        {typeof window !== "undefined" && (
          <MapContainer
            center={[desaCoordinates.lat, desaCoordinates.lng]}
            zoom={13}
            style={{ width: "100%", height: "500px" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker
              position={[desaCoordinates.lat, desaCoordinates.lng]}
              icon={villageIcon}
            >
              <Popup>
                <div>
                  <h3 className="text-lg font-bold">Desa Contoh</h3>
                  <p className="text-sm">
                    Lokasi desa ini adalah contoh penggunaan peta dengan Leaflet
                    dan React.
                  </p>
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        )}
      </div>
    </div>
  );
};

export default DesaMapUI;
