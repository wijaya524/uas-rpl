"use client"

import React, { useState } from "react";

const AnnouncementForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("pengumuman");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Simpan atau kirim data ke backend
    const newAnnouncement = {
      title,
      content,
      category,
    };

    console.log("New Announcement:", newAnnouncement);

    // Reset form and show success message
    setTitle("");
    setContent("");
    setCategory("pengumuman");
    setSuccessMessage("Pengumuman berhasil dikirim!");

    // Clear message after 3 seconds
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Tambah Pengumuman</h1>

      {successMessage && (
        <div className="bg-green-100 text-green-700 p-4 rounded mb-4">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="title">
            Judul Pengumuman
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Masukkan judul"
            className="w-full p-2 mt-2 border rounded-md focus:outline-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="content">
            Isi Pengumuman
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Masukkan isi pengumuman"
            rows={5}
            className="w-full p-2 mt-2 border rounded-md focus:outline-blue-500"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="category">
            Kategori
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 mt-2 border rounded-md focus:outline-blue-500"
          >
            <option value="pengumuman">Pengumuman</option>
            <option value="berita">Berita</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Kirim
        </button>
      </form>
    </div>
  );
};

export default AnnouncementForm;
