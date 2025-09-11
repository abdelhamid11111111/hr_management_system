'use client';
import React, { useState } from 'react';
import { LiaEdit } from "react-icons/lia";

export default function EditDepartmentBtn() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Edit Department button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="inline-flex cursor-pointer text-sm items-center px-3 py-1.5 font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-md hover:bg-blue-100 hover:border-blue-300 outline-none transition-all duration-150"
      >
        <LiaEdit size={20} />
        Edit
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-md">
            {/* Header */}
            <div className="mb-4">
              <h2 className="text-lg font-bold text-[#111418]">Edit Department</h2>
            </div>

            {/* Body */}
            <div className="grid gap-4">
              <label className="flex flex-col gap-1">
                <span className="text-[#111418] font-medium">Department Name</span>
                <input
                  type="text"
                  placeholder="Enter department name"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-base text-[#111418] focus:border-blue-500 focus:outline-none focus:ring-0"
                />
              </label>

              <label className="flex flex-col gap-1">
                <span className="text-[#111418] font-medium">Location</span>
                <input
                  type="text"
                  placeholder="Enter location"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-base text-[#111418] focus:border-blue-500 focus:outline-none focus:ring-0"
                />
              </label>
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#617589] bg-gray-100 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                Update Department
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
