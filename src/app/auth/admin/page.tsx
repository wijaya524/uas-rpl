"use client";

import React from "react";
import "../../../../src/app/globals.css";

const AuthAdmin = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <form
        action="/dashboard/admin"
        method="post"
        className="bg-white shadow-md rounded px-6 pt-6 pb-8 mb-4 w-full sm:max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Admin Authentication</h2>
        
        <div className="mb-4">
          <label
            htmlFor="nik"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Masukkan NIK Anda
          </label>
          <input
            type="number"
            id="nik"
            name="nik"
            className="no-arrows shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Masukkan NIK"
            onInput={(e) => {
              const target = e.target as HTMLInputElement;
              target.value = target.value.slice(0, 16);
            }}
          />
        </div>
        
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="w-full sm:w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthAdmin;
